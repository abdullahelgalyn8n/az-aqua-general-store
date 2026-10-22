import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  Wrench,
  ShieldCheck,
  Droplets,
  Award,
  Phone,
  CheckCircle2,
  Star,
  ShoppingCart,
  Zap,
  Plus,
  Minus,
  ArrowLeft,
  Check,
  Tag,
  Copy,
  User,
} from 'lucide-react';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  SPECIAL_OFFERS,
  Product,
  ProductCategory,
  ProductReview,
} from '../data/siteData';
import {
  filterAndSortProducts,
  SortOption,
  formatPriceEGP,
  calculateDiscountPercent,
} from '../utils/catalogLogic';
import { ProductCard } from '../components/LayoutComponents';
import { ProductVisual } from '../components/ProductVisual';

interface ProductsPageProps {
  initialCategory?: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  onSelectProduct: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onNavigate: (path: string) => void;
  onOpenMaintenanceModal: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  initialCategory = 'الكل',
  onSelectCategory,
  onSelectProduct,
  onAddToCart,
  onNavigate,
  onOpenMaintenanceModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const filteredProducts = filterAndSortProducts(PRODUCTS, {
    category: initialCategory,
    searchQuery,
    sortBy,
  });

  const getCategoryCount = (cat: ProductCategory) =>
    cat === 'الكل' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length;

  return (
    <div className="space-y-16 py-10">
      {/* 1. Header & Organized Filter/Search Toolbar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm font-extrabold text-sky-700 mb-1">منتجاتنا</p>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950">
            أنظمة <span className="text-sky-700">تنقية المياه</span> وقطع الغيار
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-700 font-medium">
            اكتشف مجموعتنا الكاملة ({PRODUCTS.length} منتج أصلي) من أنظمة تنقية المياه المنزلية، الفلاتر المركزية، المحطات الصناعية، والشمعات التركية الأصلية.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div
          role="tablist"
          aria-label="تصنيفات المنتجات"
          className="flex flex-wrap items-center justify-center gap-2 mb-6"
        >
          {PRODUCT_CATEGORIES.map((cat) => {
            const active = initialCategory === cat;
            const count = getCategoryCount(cat);
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer whitespace-nowrap border ${
                  active
                    ? 'bg-sky-700 text-white border-sky-700 shadow-xs'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-sky-500 hover:text-sky-800'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`mr-1.5 text-xs tabular-nums ${
                    active ? 'text-sky-100' : 'text-slate-500'
                  }`}
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Sort Controls Row */}
        <div className="bg-white rounded-2xl border border-slate-300 p-4 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث باسم الفلتر، الشمعة، السعة (مثال: كومباكت، زينو، Tankless، 7 مراحل)..."
              aria-label="ابحث في المنتجات"
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-sky-600 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-700">
              <SlidersHorizontal className="w-4 h-4 text-sky-700" />
              <label htmlFor="product-sort">ترتيب حسب:</label>
            </div>
            <select
              id="product-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="py-2.5 px-3.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-sky-600 cursor-pointer"
            >
              <option value="featured">الأكثر تميزاً ومبيعاً</option>
              <option value="price-asc">السعر: من الأقل للأعلى</option>
              <option value="price-desc">السعر: من الأعلى للأقل</option>
              <option value="rating-desc">الأعلى تقييماً</option>
              <option value="discount-desc">الأكبر توفيراً وخصماً</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-300 p-12 text-center">
            <p className="text-lg font-extrabold text-slate-900">
              لا توجد منتجات مطابقة لبحثك "{searchQuery}"
            </p>
            <p className="mt-1 text-sm text-slate-600">
              جرب اختيار تصنيف آخر أو مسح كلمة البحث لعرض جميع المنتجات المتاحة.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('الكل');
              }}
              className="mt-4 px-5 py-2.5 rounded-xl bg-sky-700 text-white text-xs font-extrabold cursor-pointer"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        )}
      </section>

      {/* 2. Specialized Maintenance Center Section (Matches Screenshot 9 bottom) */}
      <section className="bg-slate-100/90 border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-extrabold text-sky-700 mb-1">
              مركز الصيانة المتخصص
            </p>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              صيانة جميع أنواع وماركات <span className="text-sky-700">فلاتر المياه</span>
            </h2>
            <p className="mt-2 text-sm text-slate-700 font-medium">
              مركز متكامل لصيانة وإصلاح جميع أنواع وماركات فلاتر المياه مع ضمان على قطع الغيار وفريق فني متخصص
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Wrench,
                title: 'صيانة جميع الماركات',
                desc: 'نصلح ونصون جميع أنواع وماركات فلاتر المياه المنزلية والتجارية والصناعية.',
              },
              {
                icon: ShieldCheck,
                title: 'قطع غيار أصلية',
                desc: 'نستخدم فقط قطع غيار أصلية 100% مع ضمان 6 أشهر على جميع القطع المستبدلة.',
              },
              {
                icon: Droplets,
                title: 'تحليل مياه مجاني',
                desc: 'تحليل شامل لجودة المياه قبل وبعد الصيانة مع تقرير مفصل بالنتائج.',
              },
              {
                icon: Award,
                title: 'فنيين معتمدين',
                desc: 'فريق من الفنيين المدربين والمعتمدين على أعلى مستوى من الخبرة.',
              },
              {
                icon: Phone,
                title: 'خدمة منزلية',
                desc: 'نصلك أينما كنت - خدمة صيانة منزلية سريعة في نفس اليوم.',
              },
              {
                icon: CheckCircle2,
                title: 'عقود صيانة سنوية',
                desc: 'عقود صيانة دورية بأسعار مخفضة تشمل الفحص والتنظيف وتغيير الشمعات.',
              },
            ].map((srv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-300 p-6 shadow-2xs"
              >
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 text-sky-700 flex items-center justify-center mb-4">
                  <srv.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-black text-slate-950">{srv.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onOpenMaintenanceModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm shadow-sm transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>احجز موعد صيانة الآن</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Didn't find what you're looking for CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-300 p-8 text-center shadow-xs">
          <h3 className="text-xl sm:text-2xl font-black text-slate-950">لم تجد ما تبحث عنه؟</h3>
          <p className="mt-2 text-sm text-slate-700 font-medium">
            تواصل معنا وسنساعدك في اختيار النظام المناسب لاحتياجاتك أو توفير أي قطعة غيار خاصة.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm cursor-pointer"
          >
            <span>تواصل معنا</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

interface ProductDetailPageProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onBuyNow: (product: Product, quantity: number) => void;
  onSelectProduct: (id: string) => void;
  onSelectCategory: (cat: ProductCategory) => void;
  currentUser: { name: string; phone: string } | null;
  onOpenLogin: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onAddToCart,
  onBuyNow,
  onSelectProduct,
  onSelectCategory,
  currentUser,
  onOpenLogin,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [localReviews, setLocalReviews] = useState<ProductReview[]>(product.reviews);
  const [newReviewAuthor, setNewReviewAuthor] = useState(currentUser?.name || '');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState('');
  const [reviewSubmittedMsg, setReviewSubmittedMsg] = useState(false);

  // Sync reviews if product prop changes
  React.useEffect(() => {
    setLocalReviews(product.reviews);
    setQuantity(1);
    setReviewSubmittedMsg(false);
  }, [product.id, product.reviews]);

  const discount = calculateDiscountPercent(product.price, product.originalPrice);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const authorName = (newReviewAuthor || currentUser?.name || '').trim();
    const commentText = newReviewComment.trim();
    if (!authorName || !commentText) return;

    const added: ProductReview = {
      id: `rev-custom-${Date.now()}`,
      author: authorName,
      role: 'عميل أكوا جنرال',
      rating: newReviewRating,
      date: 'الآن',
      comment: commentText,
      verified: true,
    };
    setLocalReviews([added, ...localReviews]);
    setNewReviewComment('');
    setReviewSubmittedMsg(true);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
      {/* 1. Main Product Detail Split (Matches Screenshots 2 & 3) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column in RTL (Right side visually in screenshot): Product Visual Card */}
        <div className="lg:col-span-6 lg:order-2">
          <div className="bg-white rounded-3xl border border-slate-300 overflow-hidden shadow-sm">
            <ProductVisual
              visualType={product.visualType}
              title={product.title}
              className="h-80 sm:h-[420px] w-full"
              detailed
            />
            <div className="p-4 bg-slate-50 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center text-xs font-bold text-slate-800">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <div className="text-sky-700 font-black">المنشأ</div>
                <div className="mt-0.5 leading-snug">{product.origin}</div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <div className="text-sky-700 font-black">الضمان</div>
                <div className="mt-0.5 leading-snug">{product.warranty}</div>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                <div className="text-sky-700 font-black">كود المنتج</div>
                <div dir="ltr" className="mt-0.5 font-mono">
                  {product.sku}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column in RTL (Purchase & Features Module) */}
        <div className="lg:col-span-6 lg:order-1 space-y-5">
          {/* Rating Stars */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-800 tabular-nums">
              {product.rating.toFixed(1)} ({product.reviewsCount + localReviews.length} تقييم)
            </span>
          </div>

          {/* Arabic & English Titles */}
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-950 leading-snug">
              {product.title}
            </h1>
            <p dir="ltr" className="mt-1 text-sm font-semibold text-slate-600 text-right">
              {product.englishTitle}
            </p>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-3 pt-1 tabular-nums">
            <span className="text-3xl sm:text-4xl font-black text-sky-800">
              {formatPriceEGP(product.price)} ج.م
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-lg font-bold text-slate-500 line-through">
                  {formatPriceEGP(product.originalPrice)} ج.م
                </span>
                <span className="text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                  وفر {discount}% ({formatPriceEGP(product.originalPrice - product.price)} ج.م)
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
            {product.description}
          </p>

          {/* Features List */}
          <div className="space-y-3 pt-2">
            <h2 className="text-base font-black text-slate-950">المميزات:</h2>
            <ul className="space-y-2.5">
              {product.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm text-slate-800 font-medium leading-relaxed"
                >
                  <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2 text-sm font-extrabold text-emerald-700 pt-1">
            <Check className="w-4 h-4" />
            <span>متوفر في المخزون · جاهز للشحن والتركيب الفوري</span>
          </div>

          {/* Quantity Stepper + Add to Cart & Buy Now */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Quantity Stepper */}
              <div className="flex items-center border border-slate-300 rounded-xl bg-white h-12 px-2">
                <button
                  type="button"
                  aria-label="زيادة الكمية"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-slate-800 hover:text-sky-700 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <span className="w-10 text-center font-black text-slate-950 tabular-nums">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="تقليل الكمية"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-slate-800 hover:text-sky-700 cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 h-12 rounded-xl bg-[#0F4C81] hover:bg-[#0B3B66] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>أضف للسلة</span>
              </button>
            </div>

            {/* Buy Now Button */}
            <button
              type="button"
              onClick={() => onBuyNow(product, quantity)}
              className="w-full h-12 rounded-xl bg-sky-500 hover:bg-sky-600 text-slate-950 hover:text-white font-black text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>اشتري الآن</span>
            </button>
          </div>

          {/* Category Metadata Link */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm">
            <div>
              <span className="text-slate-600 font-semibold">التصنيف: </span>
              <button
                type="button"
                onClick={() => onSelectCategory(product.category)}
                className="font-black text-slate-950 hover:text-sky-700 underline cursor-pointer"
              >
                {product.category}
              </button>
            </div>
            <span className="text-slate-600 font-semibold">{product.stagesOrCapacity}</span>
          </div>
        </div>
      </div>

      {/* 2. Technical Specifications Table */}
      <section className="bg-white rounded-2xl border border-slate-300 p-6 sm:p-8 shadow-2xs">
        <h2 className="text-xl font-black text-slate-950 mb-4">المواصفات الفنية والهندسية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {product.specs.map((spec, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"
            >
              <span className="font-bold text-slate-700">{spec.label}</span>
              <span className="font-black text-slate-950">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Customer Reviews Section (Matches Screenshot 2 & 3 + Interactive Submission) */}
      <section className="border-t border-slate-200 pt-10">
        <h2 className="text-2xl font-black text-slate-950 mb-6">تقييمات العملاء</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Rating Breakdown Box */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-300 p-6 text-center shadow-2xs">
            <div className="text-5xl font-black text-slate-950 tabular-nums">
              {product.rating.toFixed(1)}
            </div>
            <div className="flex items-center justify-center gap-1 my-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <p className="text-xs font-bold text-slate-600 tabular-nums">
              بناءً على {product.reviewsCount + localReviews.length} تقييم موثق
            </p>

            <div className="mt-5 space-y-2 text-xs font-bold text-slate-700 tabular-nums">
              {[
                { stars: 5, pct: 88 },
                { stars: 4, pct: 10 },
                { stars: 3, pct: 2 },
                { stars: 2, pct: 0 },
                { stars: 1, pct: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-2">
                  <span className="w-6 text-right">{row.stars} ★</span>
                  <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-500 rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="w-8 text-left">{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add Review & Reviews List */}
          <div className="lg:col-span-8 space-y-6">
            {/* Add Review Form */}
            <form
              onSubmit={handleReviewSubmit}
              className="bg-white rounded-2xl border border-slate-300 p-6 shadow-2xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-slate-950">أضف تقييمك</h3>
                {!currentUser && (
                  <button
                    type="button"
                    onClick={onOpenLogin}
                    className="text-xs font-bold text-sky-700 hover:underline cursor-pointer"
                  >
                    أو سجل دخولك السريع
                  </button>
                )}
              </div>

              {reviewSubmittedMsg && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-extrabold">
                  شكراً لك! تم إضافة تقييمك للمنتج بنجاح.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="rev-author" className="block text-xs font-bold text-slate-800 mb-1">
                    الاسم الكريم *
                  </label>
                  <input
                    id="rev-author"
                    type="text"
                    required
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    placeholder="اكتب اسمك..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
                  />
                </div>
                <div>
                  <label htmlFor="rev-rating" className="block text-xs font-bold text-slate-800 mb-1">
                    التقييم بالنجوم
                  </label>
                  <select
                    id="rev-rating"
                    value={newReviewRating}
                    onChange={(e) => setNewReviewRating(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slate-900 focus:outline-none focus:border-sky-600"
                  >
                    <option value={5}>★★★★★ (5 نجوم - ممتاز)</option>
                    <option value={4}>★★★★☆ (4 نجوم - جيد جداً)</option>
                    <option value={3}>★★★☆☆ (3 نجوم - جيد)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="rev-comment" className="block text-xs font-bold text-slate-800 mb-1">
                  رأيك في المنتج والخدمة *
                </label>
                <textarea
                  id="rev-comment"
                  rows={2}
                  required
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  placeholder="شارك تجربتك مع هذا المنتج..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-600"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-extrabold cursor-pointer"
              >
                نشر التقييم
              </button>
            </form>

            {/* Existing Reviews */}
            {localReviews.length > 0 ? (
              <div className="space-y-3">
                {localReviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="bg-white rounded-2xl border border-slate-300 p-5 shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-sky-700 text-white font-black text-sm flex items-center justify-center">
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-950">{rev.author}</div>
                          <div className="text-xs text-slate-600 font-semibold">
                            {rev.role} · {rev.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-amber-500">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-800 font-medium leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-300 p-6 text-center text-slate-700">
                <User className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-extrabold text-slate-900">
                  منتج أصلي مضمون بضمان أكوا جنرال - كن أول من يضيف تعليقاً تفصيلياً أعلاه!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-slate-200 pt-10">
          <h2 className="text-2xl font-black text-slate-950 mb-6">منتجات ذات صلة من نفس الفئة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onSelectProduct={onSelectProduct}
                onAddToCart={(p) => onAddToCart(p, 1)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

interface OffersPageProps {
  onAddOfferToCart: (offerId: string) => void;
  onSelectProduct: (id: string) => void;
}

export const OffersPage: React.FC<OffersPageProps> = ({
  onAddOfferToCart,
  onSelectProduct,
}) => {
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  const copyCode = (code: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-extrabold text-sky-700 mb-1">العروض والباقات الحصرية</p>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950">
          أقوى <span className="text-sky-700">عروض التوفير</span> من أكوا جنرال
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 font-medium">
          باقات مجمعة مصممة لتوفير أقصى حماية لأسرتك بأفضل سعر شامل التوصيل والتركيب والضمان.
        </p>
      </div>

      {/* Discount Coupons Strip */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-l from-sky-800 to-slate-900 text-white rounded-2xl p-5 flex items-center justify-between gap-4 border border-sky-700">
          <div>
            <div className="text-xs font-extrabold text-sky-300">كوبون خصم فوري 10%</div>
            <div className="text-lg font-black mt-0.5">خصم إضافي 10% على جميع الشمعات والفلاتر</div>
            <div className="text-xs text-slate-300 mt-1">استخدم الكود داخل سلة المشتريات</div>
          </div>
          <button
            type="button"
            onClick={() => copyCode('AQUA10')}
            className="px-4 py-2.5 rounded-xl bg-white text-slate-950 font-mono font-black text-sm flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>AQUA10</span>
            {copiedCoupon === 'AQUA10' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4 text-sky-700" />
            )}
          </button>
        </div>

        <div className="bg-gradient-to-l from-emerald-800 to-slate-900 text-white rounded-2xl p-5 flex items-center justify-between gap-4 border border-emerald-700">
          <div>
            <div className="text-xs font-extrabold text-emerald-300">كوبون خصم 500 ج.م</div>
            <div className="text-lg font-black mt-0.5">خصم 500 ج.م للطلبات أعلى من 5,000 ج.م</div>
            <div className="text-xs text-slate-300 mt-1">مثالي لأجهزة ZENO Tankless والأنظمة المركزية</div>
          </div>
          <button
            type="button"
            onClick={() => copyCode('PURE500')}
            className="px-4 py-2.5 rounded-xl bg-white text-slate-950 font-mono font-black text-sm flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>PURE500</span>
            {copiedCoupon === 'PURE500' ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <Copy className="w-4 h-4 text-emerald-700" />
            )}
          </button>
        </div>
      </div>

      {/* Special Bundle Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {SPECIAL_OFFERS.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-3xl border border-slate-300 p-7 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{offer.tag}</span>
                </span>
                <span className="text-xs font-bold text-slate-600">ساري: {offer.validUntil}</span>
              </div>

              <h2 className="text-xl font-black text-slate-950 leading-snug">{offer.title}</h2>
              <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
                {offer.subtitle}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <div className="text-xs font-black text-slate-900 mb-2">محتويات الباقة:</div>
                <ul className="space-y-2">
                  {offer.itemsIncluded.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="tabular-nums">
                <div className="text-xs font-bold text-slate-500 line-through">
                  بدلاً من {formatPriceEGP(offer.originalPrice)} ج.م
                </div>
                <div className="text-2xl sm:text-3xl font-black text-sky-800">
                  {formatPriceEGP(offer.price)} ج.م
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                {offer.productIds[0] && (
                  <button
                    type="button"
                    onClick={() => onSelectProduct(offer.productIds[0])}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 hover:border-sky-600 text-xs font-extrabold text-slate-900 cursor-pointer"
                  >
                    عرض الجهاز
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => onAddOfferToCart(offer.id)}
                  className="px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>اطلب العرض الآن</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
