import { Product, ProductCategory } from '../data/siteData';

export type PageRoute =
  | { page: 'home'; path: '/' }
  | { page: 'about'; path: '/about' }
  | { page: 'products'; path: '/products'; category?: ProductCategory }
  | { page: 'product-detail'; path: string; productId: string }
  | { page: 'offers'; path: '/offers' }
  | { page: 'projects'; path: '/projects' }
  | { page: 'clients'; path: '/clients' }
  | { page: 'services'; path: '/services' }
  | { page: 'videos'; path: '/videos' }
  | { page: 'contact'; path: '/contact' };

export type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating-desc' | 'discount-desc';

export interface CartItem {
  productId: string;
  title: string;
  price: number;
  originalPrice: number;
  quantity: number;
  category: string;
}

export function parseRoute(pathname: string): PageRoute {
  const clean = (pathname || '/').trim().replace(/\/+$/, '') || '/';

  if (clean === '/' || clean === '/home') {
    return { page: 'home', path: '/' };
  }
  if (clean === '/about') {
    return { page: 'about', path: '/about' };
  }
  if (clean === '/products') {
    return { page: 'products', path: '/products' };
  }
  if (clean.startsWith('/product/')) {
    const productId = decodeURIComponent(clean.slice('/product/'.length));
    return {
      page: 'product-detail',
      path: `/product/${productId}`,
      productId: productId || 'd31a8a14-f104-4219-aeb9-07016d8807da',
    };
  }
  if (clean === '/offers') {
    return { page: 'offers', path: '/offers' };
  }
  if (clean === '/projects') {
    return { page: 'projects', path: '/projects' };
  }
  if (clean === '/clients') {
    return { page: 'clients', path: '/clients' };
  }
  if (clean === '/services') {
    return { page: 'services', path: '/services' };
  }
  if (clean === '/videos') {
    return { page: 'videos', path: '/videos' };
  }
  if (clean === '/contact') {
    return { page: 'contact', path: '/contact' };
  }

  return { page: 'home', path: '/' };
}

export function calculateDiscountPercent(price: number, originalPrice: number): number {
  if (originalPrice <= 0 || price >= originalPrice) return 0;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

export function formatPriceEGP(amount: number): string {
  return amount.toLocaleString('en-US');
}

export function filterAndSortProducts(
  products: Product[],
  options: {
    category?: ProductCategory;
    searchQuery?: string;
    sortBy?: SortOption;
    maxPrice?: number;
  }
): Product[] {
  const category = options.category ?? 'الكل';
  const query = (options.searchQuery ?? '').trim().toLowerCase();
  const sortBy = options.sortBy ?? 'featured';
  const maxPrice = options.maxPrice;

  const filtered = products.filter((p) => {
    if (category !== 'الكل' && p.category !== category) {
      return false;
    }
    if (typeof maxPrice === 'number' && maxPrice > 0 && p.price > maxPrice) {
      return false;
    }
    if (query.length > 0) {
      const haystack = `${p.title} ${p.englishTitle} ${p.shortDescription} ${p.category} ${p.sku}`.toLowerCase();
      if (!haystack.includes(query)) {
        return false;
      }
    }
    return true;
  });

  const sorted = [...filtered];
  if (sortBy === 'price-asc') {
    sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating-desc') {
    sorted.sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
  } else if (sortBy === 'discount-desc') {
    sorted.sort(
      (a, b) =>
        calculateDiscountPercent(b.price, b.originalPrice) -
        calculateDiscountPercent(a.price, a.originalPrice)
    );
  }

  return sorted;
}

export function addOrIncrementCartItem(
  cart: CartItem[],
  product: Pick<Product, 'id' | 'title' | 'price' | 'originalPrice' | 'category'>,
  quantityToAdd: number = 1
): CartItem[] {
  const validQty = Math.max(1, Math.floor(quantityToAdd));
  const existingIndex = cart.findIndex((item) => item.productId === product.id);
  if (existingIndex === -1) {
    return [
      ...cart,
      {
        productId: product.id,
        title: product.title,
        price: product.price,
        originalPrice: product.originalPrice,
        quantity: validQty,
        category: product.category,
      },
    ];
  }
  return cart.map((item, idx) =>
    idx === existingIndex ? { ...item, quantity: item.quantity + validQty } : item
  );
}

export function updateCartItemQuantity(
  cart: CartItem[],
  productId: string,
  newQuantity: number
): CartItem[] {
  if (newQuantity <= 0) {
    return cart.filter((item) => item.productId !== productId);
  }
  return cart.map((item) =>
    item.productId === productId ? { ...item, quantity: Math.floor(newQuantity) } : item
  );
}

export function calculateCartSummary(cart: CartItem[], couponCode?: string) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const originalSubtotal = cart.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0);
  const productSavings = Math.max(0, originalSubtotal - subtotal);

  const normalizedCoupon = (couponCode ?? '').trim().toUpperCase();
  let couponDiscount = 0;
  if (normalizedCoupon === 'AQUA10' && subtotal > 0) {
    couponDiscount = Math.round(subtotal * 0.1);
  } else if (normalizedCoupon === 'PURE500' && subtotal >= 5000) {
    couponDiscount = 500;
  }

  const finalTotal = Math.max(0, subtotal - couponDiscount);
  const freeShipping = finalTotal >= 1000 || totalItems === 0;
  const shippingFee = freeShipping ? 0 : 75;

  return {
    totalItems,
    subtotal,
    originalSubtotal,
    productSavings,
    couponDiscount,
    shippingFee,
    grandTotal: finalTotal + shippingFee,
  };
}

export interface WaterRecommendation {
  statusLabel: string;
  severity: 'optimal' | 'moderate' | 'high' | 'extreme';
  recommendedProductId: string;
  explanation: string;
}

export function recommendSystemByWaterProfile(
  tds: number,
  usageType: 'home' | 'villa' | 'commercial' | 'industrial',
  underSinkSpace: 'normal' | 'tight' = 'normal'
): WaterRecommendation {
  if (usageType === 'industrial') {
    return {
      statusLabel: 'يتطلب محطة تحلية صناعية RO',
      severity: 'extreme',
      recommendedProductId: tds > 2000 ? 'industrial-well-20m3-day' : 'industrial-ro-5m3-day',
      explanation:
        'الاستخدام الصناعي والمصانع يتطلب محطة تناضح عكسي RO بأغشية 4040 عالية الاسترداد ولوحة PLC لضمان ثبات الإنتاجية على مدار الساعة.',
    };
  }

  if (usageType === 'commercial') {
    return {
      statusLabel: 'مناسب لوحدة تجارية 500 جالون',
      severity: 'high',
      recommendedProductId: 'industrial-ro-500g-commercial',
      explanation:
        'الكافيهات والمطاعم والعيادات تحتاج إلى محطة 500 جالون/يوم لحماية الغلايات وماكينات الإسبريسو وتوفير مياه قياسية.',
    };
  }

  if (usageType === 'villa') {
    return {
      statusLabel: 'منظومة معالجة فيلا مركزية',
      severity: tds > 450 ? 'high' : 'moderate',
      recommendedProductId: tds > 450 ? 'central-frp-villa-softener' : 'central-stainless-villa-3',
      explanation:
        'لحماية شبكة السباكة والسخانات وحمامات الفيلا بالكامل من العسر والكلور والرواسب، نوصي بمنظومة المعالجة المركزية.',
    };
  }

  // Home usage
  if (tds <= 220) {
    return {
      statusLabel: 'مياه عذبة - تحتاج تنقية فائقة وتعقيم',
      severity: 'optimal',
      recommendedProductId: underSinkSpace === 'tight' ? 'zeno-ro-7-aquaturk' : 'general-pro-aquaturk-7',
      explanation:
        'نسبة الأملاح لديك معتدلة، وننصح بمنظومة جنرال برو 7 مراحل تكنولوجيا حيوية أو زينو المدمج لضمان إزالة الكلور والرواسب وضبط قلوية المياه pH.',
    };
  }

  if (tds <= 700) {
    if (underSinkSpace === 'tight') {
      return {
        statusLabel: 'أملاح متوسطة إلى مرتفعة + توفير مساحة',
        severity: 'moderate',
        recommendedProductId: 'zeno-tankless-400g',
        explanation:
          'محطة ZENO Tankless 400G بدون خزان هي الخيار الأحدث لتنقية الأملاح لحظياً مع توفير 70% من مساحة المطبخ تحت الحوض.',
      };
    }
    return {
      statusLabel: 'أملاح متوسطة - تحتاج تناضح عكسي RO حيوي',
      severity: 'moderate',
      recommendedProductId: 'general-pro-aquaturk-7',
      explanation:
        'منظومة جنرال برو أكوا ترك 7 مراحل تكنولوجيا حيوية تفصل الأملاح الزائدة وتعيد المعادن الصحية بشمعات كبسولة معقمة.',
    };
  }

  return {
    statusLabel: 'أملاح مرتفعة / مياه طلمبات - تحتاج نظام تحمل شاق',
    severity: 'high',
    recommendedProductId: 'titan-ro-7-heavy-duty',
    explanation:
      'نسبة الأملاح مرتفعة (أعلى من 700 ppm)، لذلك نوصي بمنظومة تايتان 7 مراحل للتحمل الشاق المزودة بموتور هندي 100 جالون وممبرين روماني أصلي.',
  };
}
