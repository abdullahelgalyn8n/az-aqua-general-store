export type ProductCategory =
  | 'الكل'
  | 'منزلي ومكاتب'
  | 'مركزي'
  | 'صناعي'
  | 'صيانة'
  | 'إضافي'
  | 'قطع غيار';

export interface ProductReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  englishTitle: string;
  category: Exclude<ProductCategory, 'الكل'>;
  price: number;
  originalPrice: number;
  badge?: string;
  badgeTone?: 'blue' | 'emerald' | 'amber' | 'indigo';
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  sku: string;
  warranty: string;
  origin: string;
  stagesOrCapacity: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  visualType:
    | 'uf-cartridge'
    | 'alkaline-cartridge'
    | 'gac-cartridge'
    | 'pp-cartridge'
    | 'compact-set-3'
    | 'general-pro-7'
    | 'zeno-ro-7'
    | 'titan-ro-7'
    | 'zeno-tankless-400'
    | 'smart-uv-8'
    | 'nano-5'
    | 'dispenser-ro'
    | 'central-stainless-3'
    | 'central-frp-villa'
    | 'central-jumbo-3'
    | 'industrial-ro-500g'
    | 'industrial-ro-5m'
    | 'industrial-well-20m'
    | 'maintenance-annual'
    | 'maintenance-semi'
    | 'pump-100g'
    | 'membrane-filmtec'
    | 'faucet-304'
    | 'tds-meter';
  reviews: ProductReview[];
}

export interface SpecialOffer {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  savingAmount: number;
  tag: string;
  itemsIncluded: string[];
  productIds: string[];
  validUntil: string;
}

export interface ProjectSolution {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'factory' | 'building' | 'home' | 'droplet';
  features: string[];
  capacityRange: string;
}

export interface CompletedProject {
  id: string;
  title: string;
  client: string;
  capacity: string;
  location: string;
  year: string;
  category: 'حكومي وهيئات' | 'مصانع وأغذية' | 'أندية ومستشفيات' | 'فلل ومنتجعات';
  waterSource: string;
  outputQuality: string;
  summary: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'droplet' | 'wrench' | 'file-check' | 'flask' | 'headphones' | 'shield' | 'clock';
  features: string[];
  highlightText?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  channelOrSeries: string;
  duration: string;
  views: string;
  date: string;
  category: 'لقاءات تلفزيونية' | 'توعية ومقارنات' | 'شرح المنتجات' | 'تجارب عملية';
  description: string;
  keyTakeaways: string[];
  thumbnailType: 'tv-interview' | 'cartridge-comparison' | 'tankless-demo' | 'tds-test' | 'ro-plant' | 'maintenance-guide';
}

export interface ClientPartner {
  id: string;
  name: string;
  sector: string;
  projectSummary: string;
  logoCode: 'mofa' | 'armed-forces' | 'new-capital' | 'shalateen' | 'elhayat' | 'womens-health' | 'abc-hospital' | 'kenana';
}

export interface ClientTestimonial {
  id: string;
  name: string;
  role: string;
  initial: string;
  rating: number;
  quote: string;
  category: string;
}

export const COMPANY_INFO = {
  nameAr: 'أكوا جنرال',
  nameEn: 'Aqua General',
  slogan: 'حلول تنقية المياه المصممة علميًا وصحيًا',
  subSlogan:
    'في أكوا جنرال لا نقدم مجرد فلاتر مياه، بل نوفر حلولاً صحية وهندسية متكاملة لتنقية المياه، مصممة وفق أسس علمية دقيقة لضمان إزالة الشوائب والملوثات.',
  salesPhone: '+201155018102',
  salesPhoneDisplay: '201155018102+',
  salesPhoneFormatted: '+20 115 501 8102',
  afterSalesPhone: '+201156159991',
  afterSalesPhoneDisplay: '201156159991+',
  afterSalesPhoneFormatted: '+20 115 615 9991',
  whatsapp: '201155018102',
  workingHours: 'السبت - الخميس: 9 ص - 6 م',
  address: 'القاهرة الجديدة - التجمع الخامس، وفروع خدمة تغطي كافة محافظات الجمهورية',
  email: 'info@aquageneral.online',
  stats: [
    { value: '10+', label: 'سنوات خبرة', detail: 'إدارة هندسية متخصصة' },
    { value: '32,000+', label: 'عميل سعيد', detail: 'في جميع أنحاء مصر' },
    { value: '100+', label: 'مشروع منجز', detail: 'محطات صناعية وحكومية' },
    { value: '5', label: 'سنوات ضمان', detail: 'ضمان شامل ومكتوب' },
  ],
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  'الكل',
  'منزلي ومكاتب',
  'مركزي',
  'صناعي',
  'صيانة',
  'إضافي',
  'قطع غيار',
];

export const PRODUCTS: Product[] = [
  {
    id: 'd31a8a14-f104-4219-aeb9-07016d8807da',
    slug: 'turkish-compact-filter-cartridge-set',
    title: 'طقم شمع كومباكت تركي',
    englishTitle: 'Turkish compact filter cartridge set (PP-GAC-CTO)',
    category: 'قطع غيار',
    price: 499,
    originalPrice: 750,
    badge: 'الأكثر طلباً',
    badgeTone: 'blue',
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    sku: 'AG-TR-COMP-03',
    warranty: 'ضمان استبدال ضد عيوب الصناعة',
    origin: 'تركي أصلي (Made in Turkey)',
    stagesOrCapacity: '3 مراحل كومباكت (1 + 2 + 3)',
    shortDescription:
      'طقم 3 شمعات أكواترك كومباكت (PP-GAC-CTO) أصلي ومدمج لأجهزة الاستاند كومباكت والكبسولة.',
    description:
      'طقم 3 شمعات أكواترك كومباكت (PP-GAC-CTO) | أصلي ومدمج لأجهزة الاستاند كومباكت. إحصل على عرض مخفض عند طلب طقم الثلاث شمعات تركي كومباكت مرحلة أولى ومرحلة ثانية ومرحلة ثالثة بدلاً من طلب كل شمعة على حدة.',
    features: [
      'شمعة فلتر المياه المرحلة الأولى كومباكت PP: فلتر الرواسب (PP - Sediment filter) كومباكت يعمل على إزالة الجسيمات الكبيرة مثل الرمل والطمي والصدأ مما يحمي المراحل اللاحقة ويطيل عمر الفلتر.',
      'شمعة فلتر المياه المرحلة الثانية كومباكت GAC: المرحلة الثانية، فلتر الكربون الحبيبي (GAC - Granular Activated Carbon Filter) كومباكت يعمل على امتصاص الكلور والمواد الكيميائية العضوية الضارة والروائح الكريهة، مما يحسن من طعم ورائحة المياه.',
      'شمعة فلتر المياه المرحلة الثالثة كومباكت CTO: المرحلة الثالثة، فلتر الكربون المضغوط (CTO - Carbon Block Filter) كومباكت تعمل على إزالة بقايا الكلور والملوثات العضوية المتبقية، ويعزز من نقاء المياه بشكل أكبر.',
      'تصميم كبسولة محكم الإغلاق يمنع التلوث البكتيري أثناء الفك والتركيب.',
    ],
    specs: [
      { label: 'بلد المنشأ', value: 'تركيا (Aquaturk Original)' },
      { label: 'دقة الترشيح المبدئي', value: '5 ميكرون' },
      { label: 'العمر الافتراضي', value: 'من 4 إلى 6 أشهر حسب استهلاك المياه' },
      { label: 'التوافق', value: 'جميع أجهزة الكومباكت والاستاند التركي' },
      { label: 'شهادات الجودة', value: 'FDA & NSF Certified Materials' },
    ],
    visualType: 'compact-set-3',
    reviews: [
      {
        id: 'rev-1',
        author: 'م. طارق عبد الرحمن',
        role: 'عميل موثق - مدينة نصر',
        rating: 5,
        date: 'منذ 3 أيام',
        comment: 'الشمع التركي الأصلي فرق جداً في طعم المية ومفيش أي تسريب لأن الكبسولة محكمة.',
        verified: true,
      },
      {
        id: 'rev-2',
        author: 'مدام نهى الكيلاني',
        role: 'عميلة موثقة - الشروق',
        rating: 5,
        date: 'منذ أسبوع',
        comment: 'سعر المجموعة أوفر بكتير من شراء كل شمعة لوحدها والتوصيل تم في نفس اليوم.',
        verified: true,
      },
    ],
  },
  {
    id: 'uf-cartridge-aquaturk',
    slug: 'aquaturk-ultra-filtration-uf-cartridge',
    title: 'شمعة فلتر أكواترك Ultra Filtration (UF) | لإزالة البكتريا (متوافقة مع أنظمة UF)',
    englishTitle: 'Aquaturk Ultra Filtration (UF) Hollow Fiber Membrane',
    category: 'قطع غيار',
    price: 998,
    originalPrice: 1250,
    badge: 'دقة 0.01 ميكرون',
    badgeTone: 'indigo',
    rating: 4.8,
    reviewsCount: 64,
    inStock: true,
    sku: 'AG-TR-UF-01',
    warranty: 'ضمان 12 شهر على كفاءة الغشاء',
    origin: 'تركي أصلي (Aquaturk)',
    stagesOrCapacity: 'غشاء ألترا فيلتريشن 0.01 ميكرون',
    shortDescription:
      'تعمل شمعة فلتر المياه (معالجة البكتيريا Ultra Filtration) من أكواترك بتقنية الألياف المجوفة الدقيقة.',
    description:
      'تعمل شمعة فلتر المياه (معالجة البكتيريا Ultra Filtration) من أكواترك بتقنية الألياف الدقيقة التي تحجز البكتيريا والفيروسات والرواسب الغروية الدقيقة حتى 0.01 ميكرون مع الحفاظ على الأملاح المعدنية المفيدة في الماء.',
    features: [
      'إزالة الفيروسات والبكتيريا الضارة والطفيليات بدقة تصل إلى 0.01 ميكرون.',
      'تعمل بدون كهرباء وبدون إهدار للمياه (صفر صرف).',
      'تحافظ على المعادن الطبيعية المفيدة الموجودة في المياه.',
      'متوافقة مع جميع أنظمة التنقية الفائقة UF والفلاتر الكومباكت.',
    ],
    specs: [
      { label: 'نوع الغشاء', value: 'Hollow Fiber UF Membrane' },
      { label: 'دقة المسام', value: '0.01 ميكرون' },
      { label: 'العمر الافتراضي', value: '12 - 18 شهر' },
      { label: 'أقصى ضغط تشغيل', value: '6 بار' },
    ],
    visualType: 'uf-cartridge',
    reviews: [
      {
        id: 'rev-uf-1',
        author: 'د. سامح فؤاد',
        role: 'عميل موثق - المعادي',
        rating: 5,
        date: 'منذ أسبوعين',
        comment: 'ممتازة جداً للأماكن اللي الأملاح فيها معتدلة ومحتاجة تعقيم فائق ضد البكتيريا.',
        verified: true,
      },
    ],
  },
  {
    id: 'alkaline-plus-cartridge',
    slug: 'aquaturk-alkaline-plus-ph-cartridge',
    title: 'شمعة فلتر أكواترك ألكالين بلس (قلوية) | لتوازن pH ونكهة نقية (متوافقة مع جميع الأنظمة)',
    englishTitle: 'Aquaturk Alkaline Plus pH 8.5-9.5 Bio-Mineral Cartridge',
    category: 'إضافي',
    price: 450,
    originalPrice: 600,
    badge: 'صحة وحيوية pH+',
    badgeTone: 'emerald',
    rating: 4.9,
    reviewsCount: 89,
    inStock: true,
    sku: 'AG-TR-ALK-07',
    warranty: 'ضمان نقاء وجودة 12 شهر',
    origin: 'تركي أصلي (Aquaturk)',
    stagesOrCapacity: 'المرحلة القلوية pH 8.5 - 9.5',
    shortDescription:
      'تعمل على تعديل درجة الحموضة في الماء لتتراوح بين 8.5 و 9.5 مما يساعد على تعزيز صحة الجسم العامة.',
    description:
      'شمعة أكواترك ألكالين بلس تمنحك مياه قلوية غنية بمضادات الأكسدة والمعادن الأساسية (الكالسيوم، المغنيسيوم، البوتاسيوم)، وتعمل على رفع مستوى الأس الهيدروجيني pH لتعادل الحموضة الزائدة في الجسم.',
    features: [
      'جعل المياه قلوية متوازنة بدرجة pH تتراوح بين 8.5 و 9.5.',
      'إمداد المياه بالمعادن الحيوية سهلة الامتصاص (كالسيوم ومغنيسيوم).',
      'تحسين مذاق المياه وجعلها مستساغة وخفيفة على المعدة.',
      'متوافقة للتركيب على أي فلتر 7 مراحل أو نظام تدفق مباشر.',
    ],
    specs: [
      { label: 'مستوى pH الناتج', value: '8.5 إلى 9.5 pH' },
      { label: 'العمر الافتراضي', value: '12 شهر (أو 6,000 لتر)' },
      { label: 'التوصيل', value: 'Quick Fit 1/4 بوصة' },
    ],
    visualType: 'alkaline-cartridge',
    reviews: [],
  },
  {
    id: 'gac-compact-stage-2',
    slug: 'aquaturk-gac-compact-stage-2',
    title: 'شمعة فلتر أكواترك المرحلة الثانية GAC كومباكت | إزالة كلور مدمجة',
    englishTitle: 'Aquaturk 2nd Stage GAC Granular Activated Carbon Compact',
    category: 'قطع غيار',
    price: 175,
    originalPrice: 250,
    rating: 4.8,
    reviewsCount: 53,
    inStock: true,
    sku: 'AG-TR-GAC-02',
    warranty: 'أصلي 100%',
    origin: 'تركي أصلي',
    stagesOrCapacity: 'المرحلة الثانية GAC',
    shortDescription:
      'شمعة فلتر المياه (المرحلة الثانية GAC) هي مرشح كربوني حبيبي عالي الفعالية لإزالة الكلور المركز.',
    description:
      'شمعة المرحلة الثانية GAC كومباكت من أكواترك تحتوي على كربون نشط حبيبي مستخلص من قشور جوز الهند الطبيعي، لامتصاص الكلور الحر والمبيدات العضوية وتحسين طعم ورائحة المياه بكفاءة فائقة.',
    features: [
      'فعالية عالية في إزالة الكلور المركز والمركبات الكيميائية.',
      'كربون نباتي نشط عالي المسامية.',
      'تحسين جودة وطعم المياه وحماية ممبرين التناضح العكسي.',
    ],
    specs: [
      { label: 'المادة الفعالة', value: 'كربون جوز هند حبيبي نشط' },
      { label: 'العمر الافتراضي', value: '4 - 6 أشهر' },
    ],
    visualType: 'gac-cartridge',
    reviews: [],
  },
  {
    id: 'pp-compact-stage-1',
    slug: 'aquaturk-pp-compact-stage-1',
    title: 'شمعة فلتر أكواترك كومباكت المرحلة الأولى PP | تنقية أولية مدمجة (عمر أطول)',
    englishTitle: 'Aquaturk 1st Stage PP Sediment 5 Micron Compact Filter',
    category: 'قطع غيار',
    price: 175,
    originalPrice: 250,
    rating: 4.9,
    reviewsCount: 71,
    inStock: true,
    sku: 'AG-TR-PP-01',
    warranty: 'أصلي 100%',
    origin: 'تركي أصلي',
    stagesOrCapacity: 'المرحلة الأولى PP (5 ميكرون)',
    shortDescription:
      'شمعة فلتر المياه المرحلة الأولى (PP) هي مرشح للرواسب بمقدار 5 ميكرون لإزالة الشوائب الكبيرة.',
    description:
      'شمعة المرحلة الأولى بولي بروبيلين مضغوط متعدد الطبقات بدقة 5 ميكرون، مصممة لحجز الصدأ والرمال والطمي والحبيبات العالقة في خطوط المياه قبل وصولها لباقي مراحل الفلتر.',
    features: [
      'إزالة الشوائب الكبيرة والصدأ والرمال بدقة 5 ميكرون.',
      'كثافة تدريجية تمنع الانسداد السريع وتمنح عمراً أطول.',
      'كبسولة مدمجة سهلة التغيير بدون مفتاح تقليدي.',
    ],
    specs: [
      { label: 'مادة الصنع', value: '100% Pure Food-Grade Polypropylene' },
      { label: 'دقة الترشيح', value: '5 ميكرون' },
      { label: 'العمر الافتراضي', value: '3 - 4 أشهر' },
    ],
    visualType: 'pp-cartridge',
    reviews: [],
  },
  {
    id: 'general-pro-aquaturk-7',
    slug: 'general-pro-aquaturk-7-stages-biotech',
    title: 'جنرال برو أكوا ترك 7 مراحل تكنولوجيا حيوية',
    englishTitle: 'General Pro AquaTurk 7 Stages Bio-Technology RO System',
    category: 'منزلي ومكاتب',
    price: 3999,
    originalPrice: 4800,
    badge: 'المتميز',
    badgeTone: 'blue',
    rating: 4.9,
    reviewsCount: 215,
    inStock: true,
    sku: 'AG-SYS-GPRO7',
    warranty: 'ضمان شامل 5 سنوات + صيانة دورية',
    origin: 'تجميع تركي / تايواني معتمد',
    stagesOrCapacity: '7 مراحل تكنولوجيا حيوية (100 جالون/يوم)',
    shortDescription:
      'اكتشف أقوى منظومة تنقية مياه في مصر مع 28 نقطة تفوق تضمن لك ولأسرتك مياه صحية 100%.',
    description:
      'منظومة جنرال برو أكوا ترك 7 مراحل تكنولوجيا حيوية مصممة خصيصاً لطبيعة المياه المصرية. تجمع بين الشاسيه المعالج المضاد للصدأ والشمعات الكبسولة المغلقة بالكامل من المصنع لمنع أي تلوث خارجي.',
    features: [
      'شاسيه بلاستيك معالج (Compact): وداعاً للصدأ تماماً، متانة تعيش معاك سنين بشكل جمالي نظيف.',
      'شمعات كبسولة (Inline) مقفلة بالكامل من المصنع لمنع أي بكتيريا أو تلوث خارجي أثناء الصيانة.',
      'وحدة معالجة 7 مراحل تشمل التناضح العكسي RO + الكالسيت + الألكالين الحيوي.',
      'خزان فايبر مضاد للبكتيريا بسعة تخزينية عملية للطوارئ وانقطاع المياه.',
      'تركيب مجاني وتحليل مياه مجاني قبل وبعد التركيب بواسطة مهندس مختص.',
    ],
    specs: [
      { label: 'عدد المراحل', value: '7 مراحل حيوية متكاملة' },
      { label: 'القدرة الإنتاجية', value: '100 جالون/يوم (حوالي 380 لتر يومياً)' },
      { label: 'نوع الشمعات', value: 'Inline Sealed Capsules' },
      { label: 'الضمان', value: '5 سنوات شامل + ضمان نقاء مكتوب' },
    ],
    visualType: 'general-pro-7',
    reviews: [
      {
        id: 'rev-gp-1',
        author: 'أحمد عبد العزيز',
        role: 'عميل موثق - التجمع الخامس',
        rating: 5,
        date: 'منذ 5 أيام',
        comment: 'جهاز محترم جداً وشاسيه شيك تحت الحوض مبيصديش، والفني قاس نسبة الأملاح قبل وبعد التركيب.',
        verified: true,
      },
    ],
  },
  {
    id: 'zeno-ro-7-aquaturk',
    slug: 'aquaturk-zeno-ro-7-stages',
    title: 'فلتر مياه زينو 7 مراحل AquaTurk ZENO RO 7',
    englishTitle: 'AquaTurk ZENO RO 7 Closed-Case Luxury Water Purifier',
    category: 'منزلي ومكاتب',
    price: 6850,
    originalPrice: 8100,
    badge: 'تصميم فندقي مغلق',
    badgeTone: 'indigo',
    rating: 4.9,
    reviewsCount: 128,
    inStock: true,
    sku: 'AG-SYS-ZENO7',
    warranty: 'ضمان شامل 5 سنوات',
    origin: 'تركي أصلي بالكامل (Made in Turkey)',
    stagesOrCapacity: '7 مراحل داخل كابينة مدمجة (خزان داخلي)',
    shortDescription:
      'فلتر مياه زينو 7 مراحل (Zeno R.O) - تكنولوجيا النقاء الفائق بتصميم عصري أزرق مدمج بالكامل.',
    description:
      'فلتر أكواترك زينو 7 مراحل بتصميم البوكس المغلق الأنيق الذي يجمع الفلتر والخزان والموتور داخل وحدة واحدة مدمجة فائقة الجمال، مما يوفر 60% من المساحة تحت الحوض أو فوق الرخامة.',
    features: [
      'تنقية دقيقة (RO): غشاء دقيق يفصل الملوثات والأملاح الثقيلة والنترات بكفاءة تامة.',
      'مياه قلوية صحية: يوازن قلوية المياه ويضيف معادن الكالسيوم والصوديوم والمغنيسيوم.',
      'خزان داخلي مدمج داخل الكابينة لحماية مضاعفة وتوفير المساحة.',
      'مزود بمحبس خلط أوتوماتيكي للتحكم في مستوى الأملاح المطلوب.',
    ],
    specs: [
      { label: 'التصميم', value: 'Closed Box All-in-One (خزان داخلي)' },
      { label: 'الإنتاجية اليومية', value: '280 - 350 لتر / يوم' },
      { label: 'سعة الخزان الداخلي', value: '8 لتر صافي مضاد للبكتيريا' },
      { label: 'المنشأ', value: 'تركيا (Aquaturk)' },
    ],
    visualType: 'zeno-ro-7',
    reviews: [],
  },
  {
    id: 'titan-ro-7-heavy-duty',
    slug: 'titan-7-stages-heavy-duty-ro',
    title: 'فلتر تايتان 7 مراحل - منظومة "التحمل الشاق" (RO)',
    englishTitle: 'TITAN 7-Stage Heavy Duty Reverse Osmosis System',
    category: 'منزلي ومكاتب',
    price: 5900,
    originalPrice: 7500,
    badge: 'توفير 1,600 ج.م',
    badgeTone: 'emerald',
    rating: 4.9,
    reviewsCount: 176,
    inStock: true,
    sku: 'AG-SYS-TITAN7',
    warranty: 'ضمان 5 سنوات شامل',
    origin: 'موتور هندي + ممبرين روماني',
    stagesOrCapacity: '7 مراحل تحمل شاق (حتى 2500 TDS)',
    shortDescription:
      'نظام تنقية مياه متكامل صُمم ليعطيك راحة البال التامة تحت شعار "ركبه وانساه" للمياه الصعبة والطلمبات.',
    description:
      'منظومة تايتان 7 مراحل للتحمل الشاق مخصصة للمناطق ذات ضغط المياه المنخفض أو الأملاح المرتفعة ومياه الآبار والطلمبات. مجهزة بموتور هندي أصلي وممبرين روماني 100 جالون.',
    features: [
      'القلب النابض: موتور هندي 100 جالون بأعلى كفاءة تشغيل وتحمل مستمر بدون سخونة.',
      'وحدة المعالجة: ممبرين روماني 100 جالون يعالج كافة مشاكل المياه ويعمل بكفاءة مع مياه الطلمبات.',
      'فوارغ، هوسينجات، وخامات بيور غذائية تتحمل ضغط المياه العالي بدون تفاعل.',
      'خزان 4 جالون تايواني متعدد الطبقات يضمن ضغط مياه قوي حتى آخر كوب.',
    ],
    specs: [
      { label: 'الموتور', value: 'هندي 100 جالون Heavy-Duty' },
      { label: 'الممبرين', value: 'روماني 100 GPD أصلي' },
      { label: 'تحمل الأملاح', value: 'يعمل بكفاءة حتى 2,500 جزء في المليون (TDS)' },
      { label: 'الخزان', value: '4 جالون (12 لتر فعلي)' },
    ],
    visualType: 'titan-ro-7',
    reviews: [],
  },
  {
    id: 'zeno-tankless-400g',
    slug: 'aquaturk-zeno-tankless-400g-direct-flow',
    title: 'فلتر أكواترك ZENO Tankless (400 جالون) | محطة مياه منزلية بنظام التدفق المباشر',
    englishTitle: 'AquaTurk ZENO Tankless 400GPD Direct Flow Station',
    category: 'منزلي ومكاتب',
    price: 9240,
    originalPrice: 11999,
    badge: 'الأكثر مبيعاً',
    badgeTone: 'blue',
    rating: 5.0,
    reviewsCount: 194,
    inStock: true,
    sku: 'AG-SYS-TANKLESS400',
    warranty: 'ضمان ذهبي 5 سنوات',
    origin: 'تركي أصلي (Aquaturk Flagship)',
    stagesOrCapacity: '400 جالون تدفق مباشر بدون خزان (1,500 لتر/يوم)',
    shortDescription:
      'وداعاً لزحمة تحت الحوض والخزانات اللي بتاخد مساحة على الفاضي! عصر الفلاتر بدون خزان.',
    description:
      'محطة مياه منزلية ذكية بنظام التدفق المباشر (Direct Flow Tankless) بقوة 400 جالون يومياً. تمنحك مياه نقية طازجة لحظة بلحظة بمجرد فتح الصنبور دون الحاجة لخزان تخزين، مع توفير 70% من المساحة وتقليل الهدر.',
    features: [
      'موتور 400 جالون: أداء جبار وقوة ضغط غير مسبوقة تضمن لك استمرارية وكفاءة الفلترة تحت أي ظروف.',
      'ممبرين 400 جالون: قلب الجهاز النابض، يتعامل مع أعلى مستويات الأملاح ويحولها لمياه شرب نقية ومضمونة 100%.',
      'تدفق مباشر 1.2 لتر/دقيقة: يملأ كوب الماء في 8 ثوانٍ فقط بمياه مفلترة لحظياً.',
      'نظام غسيل ذاتي ذكي (Auto-Flush) لإطالة عمر الممبرين ومنع تراكم الأملاح.',
    ],
    specs: [
      { label: 'القدرة الإنتاجية', value: '400 جالون/يوم (1,500 لتر يومياً)' },
      { label: 'نظام التخزين', value: 'تدفق مباشر بدون خزان (Tankless Direct Flow)' },
      { label: 'نسبة توفير المياه', value: 'توفير 65% مقارنة بأنظمة RO التقليدية' },
      { label: 'الأبعاد', value: 'تصميم نحيف 18 سم عرض فقط' },
    ],
    visualType: 'zeno-tankless-400',
    reviews: [
      {
        id: 'rev-tl-1',
        author: 'م. كريم الشناوي',
        role: 'عميل موثق - الشيخ زايد',
        rating: 5,
        date: 'منذ 4 أيام',
        comment: 'اختراع عبقري! وفر المساحة تحت الحوض تماماً والمية نازلة فريش وسريعة جداً.',
        verified: true,
      },
    ],
  },
  // --- ADDITIONAL PRODUCTS ACROSS ALL CATEGORIES ---
  {
    id: 'aquaturk-smart-uv-8',
    slug: 'aquaturk-smart-8-stages-uv-alkaline',
    title: 'فلتر أكواترك سمارت 8 مراحل ديجيتال بوحدة تعقيم بالأشعة فوق البنفسجية UV',
    englishTitle: 'AquaTurk Smart 8-Stage RO + UV Sterilizer & TDS Display',
    category: 'منزلي ومكاتب',
    price: 7450,
    originalPrice: 8900,
    badge: 'تعقيم UV ذكي',
    badgeTone: 'indigo',
    rating: 4.9,
    reviewsCount: 84,
    inStock: true,
    sku: 'AG-SYS-SMUV8',
    warranty: 'ضمان شامل 5 سنوات',
    origin: 'تركي / أمريكي',
    stagesOrCapacity: '8 مراحل (RO + Alkaline + UV Sterilizer)',
    shortDescription:
      'نظام 8 مراحل مزود بشاشة ديجيتال لقراءة الأملاح اللحظية وتنبيه مواعيد تغيير الشمعات مع وحدة UV.',
    description:
      'منظومة أكواترك سمارت 8 مراحل تجمع بين التناضح العكسي RO والمرحلة القلوية مع مرحلة ثامنة للتعقيم بالأشعة فوق البنفسجية (Philips UV Lamp) للقضاء على 99.99% من الميكروبات والفيروسات، مع شاشة ذكية.',
    features: [
      'شاشة LED ديجيتال تعرض نسبة الأملاح TDS وحالة عمر كل شمعة.',
      'وحدة تعقيم بالأشعة فوق البنفسجية UV ستانلس ستيل 304.',
      'حساس تسرب مياه أوتوماتيكي يغلق المياه فورياً عند أي طارئ.',
      'مثالي للمنازل التي تعتمد على خزانات علوية أو مياه جوفية.',
    ],
    specs: [
      { label: 'عدد المراحل', value: '8 مراحل (تشمل UV + Alkaline)' },
      { label: 'الشاشة الذكية', value: 'Digital TDS & Filter Life Monitor' },
      { label: 'القدرة الإنتاجية', value: '100 جالون / يوم' },
    ],
    visualType: 'smart-uv-8',
    reviews: [],
  },
  {
    id: 'aqua-nano-silver-5',
    slug: 'aqua-general-nano-silver-5-stages',
    title: 'جهاز تنقية أكوا جنرال نانو سيلفر 5 مراحل كومباكت (بدون كهرباء)',
    englishTitle: 'Aqua General Nano-Silver 5-Stage Ultrafiltration System',
    category: 'منزلي ومكاتب',
    price: 2450,
    originalPrice: 3100,
    badge: 'اقتصادي وعملي',
    badgeTone: 'emerald',
    rating: 4.7,
    reviewsCount: 92,
    inStock: true,
    sku: 'AG-SYS-NANO5',
    warranty: 'ضمان 3 سنوات',
    origin: 'تركي أصلي',
    stagesOrCapacity: '5 مراحل نانو سيلفر + UF',
    shortDescription:
      'حل مثالي لمياه البلدية ذات الأملاح المعتدلة، يعمل بدون كهرباء وبدون خزان وبدون صرف مياه.',
    description:
      'جهاز تنقية 5 مراحل بتقنية النانو سيلفر والألترا فيلتريشن، مصمم للمناطق التي تتمتع بمياه بلدية عذبة وتحتاج لإزالة الكلور والرواسب والبكتيريا والصدأ مع الحفاظ على المعادن الطبيعية.',
    features: [
      'يعمل بدون كهرباء وبدون موتور وبدون إهدار نقطة مياه واحدة.',
      'مزود بشمعة كربون نانو سيلفر مانعة لنمو البكتيريا.',
      'حجم مدمج يركب بسهولة على الحائط أو تحت الحوض.',
    ],
    specs: [
      { label: 'عدد المراحل', value: '5 مراحل (PP + GAC + CTO + UF + Post Silver)' },
      { label: 'استهلاك الكهرباء', value: 'لا يحتاج كهرباء' },
      { label: 'معدل التدفق', value: '2.5 لتر / دقيقة' },
    ],
    visualType: 'nano-5',
    reviews: [],
  },
  {
    id: 'aquaturk-dispenser-ro-7',
    slug: 'aquaturk-hot-cold-dispenser-built-in-ro7',
    title: 'مبرد مياه أكواترك ستاند (بارد / ساخن / فاتر) بفلتر داخلي 7 مراحل RO',
    englishTitle: 'AquaTurk Floor Standing Water Dispenser with Built-in 7-Stage RO',
    category: 'منزلي ومكاتب',
    price: 11500,
    originalPrice: 13800,
    badge: 'للشركات والمنازل',
    badgeTone: 'blue',
    rating: 4.9,
    reviewsCount: 47,
    inStock: true,
    sku: 'AG-DISP-RO7',
    warranty: 'ضمان 3 سنوات شامل الكمبروسر',
    origin: 'كوري / تركي',
    stagesOrCapacity: 'مبرد 3 حنفيات + فلتر RO مدمج',
    shortDescription:
      'استغنِ عن قوارير المياه للأبد! مبرد مياه فندقي متصل مباشرة بمصدر المياه مع فلتر 7 مراحل داخلي.',
    description:
      'مبرد مياه أكواترك الفاخر للشركات والعيادات والمنازل العصرية. يتصل مباشرة بخط المياه ويحتوي بداخله على منظومة تنقية 7 مراحل RO متكاملة وخزانات داخلية من الستانلس ستيل الغذائي 304.',
    features: [
      'وداعاً لشراء وحمل قوارير المياه البلاستيكية وتكلفتها الشهرية.',
      '3 درجات حرارة: ماء بارد منعش، ساخن للشاي والقهوة بقفل أمان للأطفال، وفاتر.',
      'خزانات داخلية ستانلس ستيل 304 غير قابلة للصدأ.',
    ],
    specs: [
      { label: 'قدرة التبريد', value: '5 لتر / ساعة (كمبروسر LG صامت)' },
      { label: 'قدرة التسخين', value: '6 لتر / ساعة (90 درجة مئوية)' },
      { label: 'نظام الفلترة الداخلي', value: '7 مراحل RO كاملة داخل الكابينة' },
    ],
    visualType: 'dispenser-ro',
    reviews: [],
  },
  // --- CENTRAL SYSTEMS (مركزي) ---
  {
    id: 'central-stainless-villa-3',
    slug: 'central-stainless-steel-304-jumbo-3-stages',
    title: 'وحدة فلترة مركزية للفلل ستانلس ستيل الجامبو 3 مراحل (304 غذائي)',
    englishTitle: '3-Stage Heavy Duty 304 Stainless Steel Central Whole-House Filter',
    category: 'مركزي',
    price: 8900,
    originalPrice: 10500,
    badge: 'حماية شاملة للمنزل',
    badgeTone: 'blue',
    rating: 4.9,
    reviewsCount: 63,
    inStock: true,
    sku: 'AG-CNT-SS304',
    warranty: 'ضمان 10 سنوات على الهاوسينج الستانلس',
    origin: 'ستانلس ستيل 304 أصلي',
    stagesOrCapacity: 'تدفق حتى 6 م³/ساعة - 20 بوصة جامبو',
    shortDescription:
      'حماية كاملة لجميع حمامات ومطابخ وأجهزة الفيلا أو الشقة من الصدأ والكلور والرمال، يتحمل حرارة الشمس.',
    description:
      'وحدة تنقية مركزية ثلاثية مصنوعة من الستانلس ستيل الغذائي 304 المقاوم للصدأ والعوامل الجوية. تركب على المدخل الرئيسي للمنزل أو بعد الخزان العلوي لتنقية المياه المغذية للغسالات والسخانات والاستحمام.',
    features: [
      'جسم من الستانلس ستيل 304 يتحمل ضغط حتى 12 بار ودرجات الحرارة العالية في الصيف.',
      'يحمي الغسالات، السخانات، والخلاطات الفاخرة من التكلس والانسداد.',
      'يمتصل الكلور الحر ليحمي البشرة والشعر من الجفاف والتساقط أثناء الاستحمام.',
      'مزود بـ 3 عدادات ضغط جليسرين لمتابعة حالة الشمعات بدقة.',
    ],
    specs: [
      { label: 'مادة الهاوسينج', value: 'Stainless Steel 304 Food Grade' },
      { label: 'مقاس الدخول والخروج', value: '1 بوصة أو 1.5 بوصة' },
      { label: 'مقاس الشمعات', value: '20 بوصة جامبو (PP + GAC + CTO)' },
      { label: 'معدل التدفق', value: 'حتى 6 متر مكعب / ساعة' },
    ],
    visualType: 'central-stainless-3',
    reviews: [],
  },
  {
    id: 'central-frp-villa-softener',
    slug: 'central-villa-frp-water-treatment-softener-system',
    title: 'منظومة معالجة مياه مركزية للفلل والقصور FRP أوتوماتيك بالكامل (فلتر رملي + كربوني + سوفنر)',
    englishTitle: 'Full Automatic Villa Central FRP Multimedia, Carbon & Water Softener',
    category: 'مركزي',
    price: 28500,
    originalPrice: 33000,
    badge: 'تحكم ديجيتال أوتوماتيك',
    badgeTone: 'indigo',
    rating: 5.0,
    reviewsCount: 38,
    inStock: true,
    sku: 'AG-CNT-FRP3',
    warranty: 'ضمان 5 سنوات + عقد متابعة مجاني لأول عام',
    origin: 'صمامات Runxin ديجيتال + ميديا أمريكي/ألماني',
    stagesOrCapacity: 'منظومة ثلاثية FRP + تنك محلول ملحي',
    shortDescription:
      'الحل الهندسي النهائي لعسر المياه والكلور والرواسب في الفلل المستقلة والقصور وحمامات السباحة.',
    description:
      'محطة معالجة مركزية متكاملة للفلل تتكون من 3 اسطوانات الفايبر جلاس المسلح (FRP): اسطوانة الميديا الرملية متعددة الطبقات، اسطوانة الكربون النشط، واسطوانة إزالة العسر (Water Softener) المزودة برؤوس ديجيتال تقوم بالغسيل العكسي التلقائي.',
    features: [
      'إزالة كاملة لعسر المياه (الكالسيوم والمغنيسيوم المسبب لتكلس المواسير والسخانات).',
      'رؤوس تحكم أوتوماتيكية بالكامل تقوم بالغسيل العكسي والتنشيط دون تدخل بشري.',
      'تمنحك مياه فندقية ناعمة تحافظ على نعومة الملابس والبشرة ولمعان الأدوات الصحية.',
    ],
    specs: [
      { label: 'مكونات المنظومة', value: 'Sand Vessel + Carbon Vessel + Softener + Brine Tank' },
      { label: 'صمامات التحكم', value: 'Automatic Digital Control Valves' },
      { label: 'القدرة التصميمية', value: 'تغطي فيلا حتى 6 حمامات وحديقة' },
    ],
    visualType: 'central-frp-villa',
    reviews: [],
  },
  {
    id: 'central-jumbo-triple-20',
    slug: 'central-jumbo-triple-20-inch-filter',
    title: 'فلتر مركزي جامبو ثلاثي 20 بوصة بقاعدة حديد معالجة ضد الصدأ وعدادات ضغط',
    englishTitle: 'Triple 20" Big Blue Jumbo Whole-House Water Filter System',
    category: 'مركزي',
    price: 3200,
    originalPrice: 3950,
    badge: 'الأكثر انتشاراً للشقق والفلل',
    badgeTone: 'emerald',
    rating: 4.8,
    reviewsCount: 119,
    inStock: true,
    sku: 'AG-CNT-JMB20',
    warranty: 'ضمان 3 سنوات',
    origin: 'تايواني / تركي',
    stagesOrCapacity: '3 مراحل جامبو 20 بوصة',
    shortDescription:
      'فلتر مركزي جامبو 20 بوصة ثلاثي المراحل لتنقية مياه الشقة أو الفيلا بالكامل بتكلفة اقتصادية.',
    description:
      'وحدة فلترة مركزية بيج بلو (Big Blue 20 inch) مجهزة بشاسيه حديد مجلفن مدهون إلكتروستاتيك مقاوم للصدأ، مع 3 شمعات جامبو عالية التدفق وصمام تنفيس هواء.',
    features: [
      'خامات بولي بروبيلين مقوى يتحمل ضغط الموتور العمومي.',
      'شامل طقم الشمعات الجامبو (شوائب 5 ميكرون + كربون حبيبي + كربون بلوك).',
      'تركيب سريع على خط المياه الرئيسي 1 بوصة.',
    ],
    specs: [
      { label: 'المقاس', value: '20 بوصة جامبو (قطر 4.5 بوصة)' },
      { label: 'فتحات التوصيل', value: '1 بوصة نحاس مدعم' },
      { label: 'العمر الافتراضي للشمعات', value: '6 أشهر' },
    ],
    visualType: 'central-jumbo-3',
    reviews: [],
  },
  // --- INDUSTRIAL (صناعي) ---
  {
    id: 'industrial-ro-500g-commercial',
    slug: 'commercial-ro-station-500-gpd-cafes-restaurants',
    title: 'محطة تحلية مياه تجارية RO سعة 500 جالون/يوم (للكافيهات والمطاعم والمعامل)',
    englishTitle: 'Commercial 500 GPD Reverse Osmosis Skid for Cafes & Labs',
    category: 'صناعي',
    price: 24900,
    originalPrice: 29000,
    badge: 'للكافيهات والمطاعم',
    badgeTone: 'blue',
    rating: 4.9,
    reviewsCount: 41,
    inStock: true,
    sku: 'AG-IND-RO500',
    warranty: 'ضمان عامين + عقد صيانة ربع سنوي',
    origin: 'مكونات أمريكية / إيطالية',
    stagesOrCapacity: '500 جالون/يوم (حوالي 2,000 لتر يومياً)',
    shortDescription:
      'وحدة تناضح عكسي تجارية مدمجة لضمان مياه قياسية لماكينات الإسبريسو، صانعات الثلج، والمطاعم.',
    description:
      'محطة تحلية تجارية سعة 500 جالون يومياً مجمعة على شاسيه إلكتروستاتيك أو ستانلس ستيل، تحمي ماكينات القهوة الاحترافية وأفران البخار وصانعات الثلج من التكلس وتضبط طعم المشروبات وفق المعايير العالمية.',
    features: [
      'إنتاجية تصل إلى 2000 لتر يومياً من المياه النقية منخفضة الأملاح.',
      'تحمي غلايات ماكينات القهوة الإيطالية من الأملاح وتطيل عمرها الافتراضي.',
      'مزودة بلوحة تحكم وعدادات تدفق (Flow Meters) للمياه المنتجة والصرف.',
    ],
    specs: [
      { label: 'الإنتاجية', value: '500 جالون / يوم (2,000 لتر)' },
      { label: 'الأغشية', value: 'عدد 1 ممبرين صناعي 4021 أو 5×100 جالون' },
      { label: 'التطبيقات', value: 'الكافيهات، المطاعم، العيادات، المعامل الطبية' },
    ],
    visualType: 'industrial-ro-500g',
    reviews: [],
  },
  {
    id: 'industrial-ro-5m3-day',
    slug: 'industrial-ro-plant-5m3-day-stainless-skid',
    title: 'محطة تناضح عكسي صناعية RO سعة 5 متر مكعب/يوم (شاسيه ستانلس ولوحة PLC)',
    englishTitle: 'Industrial 5 m³/day Reverse Osmosis Desalination Plant',
    category: 'صناعي',
    price: 85000,
    originalPrice: 95000,
    badge: 'حلول المصانع والمزارع',
    badgeTone: 'indigo',
    rating: 5.0,
    reviewsCount: 29,
    inStock: true,
    sku: 'AG-IND-RO5M',
    warranty: 'ضمان سنتين + إشراف هندسي كامل',
    origin: 'طلمبات Grundfos + أغشية FilmTec USA',
    stagesOrCapacity: '5 م³/يوم (5,000 لتر يومياً)',
    shortDescription:
      'محطة تحلية مياه صناعية متكاملة بالمعالجة الابتدائية ووحدة الغسيل الكيميائي CIP ولوحة تحكم ذكية.',
    description:
      'محطة تحلية مياه صناعية بتقنية التناضح العكسي RO بطاقة إنتاجية 5 متر مكعب يومياً. تشمل الفلتر الرملي والفلتر الكربوني، وحدة حقن مضاد التكلس (Antiscalant Dosing)، طلمبة ضغط عالي ستانلس، وأغشية أمريكية عالية الاسترداد.',
    features: [
      'طلمبة ضغط عالي رأسية ستانلس ستيل متعددة المراحل عالية الكفاءة.',
      'لوحة تحكم كهربائية أوتوماتيكية بحمايات كاملة ضد انخفاض/ارتفاع الضغط ونقص المياه.',
      'أغشية تحلية 4040 أمريكية أصلية بنسبة إزالة أملاح تصل إلى 99.4%.',
      'تشمل التوريد والتركيب والتدريب الفني لفريق التشغيل.',
    ],
    specs: [
      { label: 'السعة الإنتاجية', value: '5 متر مكعب / يوم' },
      { label: 'مقاس الممبرين', value: '2 × 4040 High Rejection Membranes' },
      { label: 'نسبة الاسترداد (Recovery)', value: '55% - 70%' },
      { label: 'الشاسيه والمواسير', value: 'ستانلس ستيل 304 + UPVC Schedule 80' },
    ],
    visualType: 'industrial-ro-5m',
    reviews: [],
  },
  {
    id: 'industrial-well-20m3-day',
    slug: 'industrial-brackish-water-ro-plant-20m3',
    title: 'محطة معالجة وتحلية مياه آبار ومصانع سعة 20 م³/يوم متكاملة',
    englishTitle: '20 m³/day Industrial Brackish Well Water Desalination Plant',
    category: 'صناعي',
    price: 195000,
    originalPrice: 220000,
    badge: 'مشاريع كبرى',
    badgeTone: 'blue',
    rating: 5.0,
    reviewsCount: 18,
    inStock: true,
    sku: 'AG-IND-RO20M',
    warranty: 'ضمان سنتين + عقد تشغيل وصيانة',
    origin: 'تصميم وتنفيذ هندسي أكوا جنرال',
    stagesOrCapacity: '20 م³/يوم (20,000 لتر يومياً)',
    shortDescription:
      'محطة صناعية كبرى لتحلية مياه الآبار المالحة (حتى 8000 TDS) للمصانع الغذائية، الدوائية، والمنتجعات.',
    description:
      'حل هندسي متكامل لمعالجة وتحلية مياه الآبار والمنشآت الصناعية الكبرى بطاقة 20 متر مكعب في اليوم، مصمم خصيصاً بناءً على التحليل الكيميائي والفيزيائي لمصدر المياه لضمان أعلى كفاءة تشغيلية وأقل استهلاك للطاقة.',
    features: [
      'تصميم هندسي مخصص (Custom-Built) وفق تحليل معمل المياه الخاص بموقعك.',
      'نظام حقن كيميائي متكامل (كلور، ميتابيسلفيت، مانع ترسيب، وضبط pH).',
      'وحدة غسيل كيميائي مدمجة (CIP System) للحفاظ على كفاءة الأغشية لسنوات.',
    ],
    specs: [
      { label: 'السعة الإنتاجية', value: '20 متر مكعب / يوم' },
      { label: 'ملوحة مياه التغذية', value: 'تصل إلى 8,000 ppm TDS' },
      { label: 'نظام التحكم', value: 'PLC + HMI Touch Screen + Online TDS/Conductivity' },
    ],
    visualType: 'industrial-well-20m',
    reviews: [],
  },
  // --- MAINTENANCE PACKAGES (صيانة) ---
  {
    id: 'annual-gold-maintenance-contract',
    slug: 'annual-gold-maintenance-contract-7-stages',
    title: 'باقة الصيانة السنوية الشاملة (عقد صيانة ذهبي 7 مراحل + 8 شمعات أصلية + زيارات مجانية)',
    englishTitle: 'Annual Gold Maintenance Contract (8 Original Cartridges + 4 Free Visits)',
    category: 'صيانة',
    price: 1399,
    originalPrice: 1950,
    badge: 'راحة بال طوال العام',
    badgeTone: 'emerald',
    rating: 4.9,
    reviewsCount: 310,
    inStock: true,
    sku: 'AG-MNT-GOLD1Y',
    warranty: 'ضمان شامل طوال مدة العقد (12 شهر)',
    origin: 'شمعات تركي أصلية + فنيين معتمدين',
    stagesOrCapacity: '4 زيارات دورية مجدولة + طوارئ مجانية',
    shortDescription:
      'لا تشغل بالك بمواعيد تغيير الشمع! سيستم أكوا جنرال يتابعك تلقائياً ويرسل لك المهندس في الموعد المحدد.',
    description:
      'عقد الصيانة السنوي الذهبي من أكوا جنرال يضمن لك ولأسرتك مياه نقية طوال العام دون عناء تذكر مواعيد الشمعات. يشمل 4 زيارات دورية كل 3 أشهر مع إجمالي 8 شمعات أصلية وفحص شامل للضغط والأملاح والخزان.',
    features: [
      'إجمالي 8 شمعات أصلية خلال السنة (3 أطقم أولى + شمعة بوست كربون + شمعة ألكالين/كالسيت).',
      '4 زيارات منزلية مجدولة مسبقاً + زيارات طوارئ مجانية بدون رسوم انتقال.',
      'فحص وضبط هواء الخزان وقياس TDS و pH في كل زيارة مع تقرير حالة.',
      'خصم 25% على أي قطع غيار إضافية (موتور أو ممبرين) طوال فترة العقد.',
    ],
    specs: [
      { label: 'مدة التعاقد', value: '12 شهر من تاريخ التفعيل' },
      { label: 'عدد الزيارات', value: '4 زيارات دورية + زيارات أعطال مجانية' },
      { label: 'التوافق', value: 'جميع ماركات وأنواع فلاتر المياه 5 و 6 و 7 مراحل' },
    ],
    visualType: 'maintenance-annual',
    reviews: [],
  },
  {
    id: 'semi-annual-maintenance-pack',
    slug: 'semi-annual-original-filter-service-pack',
    title: 'طقم صيانة نصف سنوي أكواترك أوريجينال (شمعات 1+2+3 + بوست كربون + كالسيت + زيارة تعقيم)',
    englishTitle: '6-Month Complete Filter Service Kit + Sanitization Visit',
    category: 'صيانة',
    price: 799,
    originalPrice: 1100,
    badge: 'شامل التركيب والتعقيم',
    badgeTone: 'blue',
    rating: 4.8,
    reviewsCount: 124,
    inStock: true,
    sku: 'AG-MNT-SEMI6M',
    warranty: 'ضمان 6 أشهر على الصيانة',
    origin: 'تركي أصلي',
    stagesOrCapacity: '5 شمعات أصلية + زيارة فني شاملة',
    shortDescription:
      'جدد كفاءة فلترك بالكامل مع باقة الصيانة نصف السنوية الشاملة لـ 5 شمعات أصلية وتعقيم الخزان.',
    description:
      'باقة الصيانة نصف السنوية المصممة لإعادة الفلتر المنزلي لحالته الجديدة، تشمل تغيير المراحل الثلاث الأولى + المرحلة الخامسة (بوست كربون جوز هند) + المرحلة السادسة (كالسيت)، مع غسيل وتعقيم الخزان.',
    features: [
      'شامل زيارة الفني المتخصص والتركيب داخل القاهرة الكبرى والجيزة والمحافظات.',
      'قياس نسبة الأملاح وكفاءة الممبرين وضغط الموتور مجاناً.',
      'ضمان 6 أشهر على جميع الشمعات المستبدلة.',
    ],
    specs: [
      { label: 'محتويات الباقة', value: 'شمعات (1 + 2 + 3 + 5 + 6) أصلية' },
      { label: 'الخدمة المشمولة', value: 'تركيب منزلي + فحص شامل + تعقيم' },
    ],
    visualType: 'maintenance-semi',
    reviews: [],
  },
  // --- MORE SPARE PARTS & ADD-ONS (قطع غيار & إضافي) ---
  {
    id: 'pump-100g-heavy-duty',
    slug: 'aquaturk-100gpd-booster-pump-with-adapter',
    title: 'موتور تقوية ضغط مياه أكواترك 100 جالون هندي أصلي صامت بالترانس',
    englishTitle: '100 GPD Heavy Duty Silent RO Booster Pump + 24V Adapter',
    category: 'قطع غيار',
    price: 1450,
    originalPrice: 1850,
    badge: 'صامت وعالي الضغط',
    badgeTone: 'blue',
    rating: 4.9,
    reviewsCount: 67,
    inStock: true,
    sku: 'AG-PRT-PMP100',
    warranty: 'ضمان عام كامل استبدال',
    origin: 'هندي أصلي',
    stagesOrCapacity: 'ضغط حتى 130 PSI - شامل الأدابتور',
    shortDescription:
      'موتور ضغط عالي 100 جالون ملفات نحاس 100% يعمل بهدوء تام لرفع كفاءة الممبرين وملء الخزان بسرعة.',
    description:
      'موتور فلتر مياه 100 جالون هندي أصلي مخصص لتحمل ساعات التشغيل الطويلة وضغط المياه الضعيف في الأدوار العليا، يأتي شاملاً ترانس 24 فولت 1.5 أمبير مع قواعد كاوتش مانعة للاهتزاز.',
    features: [
      'ملفات نحاس 100% مقاومة للسخونة.',
      'تشغيل هادئ جداً بدون ضوضاء أو اهتزاز.',
      'يرفع ضغط المياه داخل الممبرين إلى 125-130 PSI لأفضل فصل للأملاح.',
    ],
    specs: [
      { label: 'القدرة', value: '100 GPD (24V DC)' },
      { label: 'أقصى ضغط', value: '130 PSI' },
      { label: 'الملحقات', value: 'شامل الترانس الكهربائي والوصلات' },
    ],
    visualType: 'pump-100g',
    reviews: [],
  },
  {
    id: 'filmtec-membrane-100g',
    slug: 'original-filmtec-100gpd-ro-membrane',
    title: 'ممبرين فيلمتك أمريكي أصلي 100 جالون (FilmTec 100 GPD RO Membrane)',
    englishTitle: 'Genuine DuPont FilmTec 100 GPD Reverse Osmosis Membrane',
    category: 'قطع غيار',
    price: 950,
    originalPrice: 1200,
    badge: 'باركود أصلي',
    badgeTone: 'indigo',
    rating: 4.9,
    reviewsCount: 112,
    inStock: true,
    sku: 'AG-PRT-MEM100',
    warranty: 'ضمان الكفاءة والنقاء',
    origin: 'أمريكي أصلي (USA)',
    stagesOrCapacity: 'المرحلة الرابعة RO (0.0001 ميكرون)',
    shortDescription:
      'قلب الفلتر النابض! غشاء تناضح عكسي أمريكي أصلي يفصل الأملاح الذائبة والمعادن الثقيلة والفيروسات.',
    description:
      'ممبرين المرحلة الرابعة الأصلي بدقة 0.0001 ميكرون وبطاقة 100 جالون يومياً. يعيد ضبط نسبة الأملاح الذائبة (TDS) للمعدل الصحي العالمي مع عمر افتراضي طويل يصل إلى سنتين.',
    features: [
      'دقة فصل 0.0001 ميكرون تزيل الأملاح الثقيلة والزرنيخ والرصاص والبكتيريا.',
      'مزود بعلامة مائية وباركود للتحقق من الأصالة.',
      'يتحمل ملوحة مياه تغذية مرتفعة بكفاءة ثبات عالية.',
    ],
    specs: [
      { label: 'دقة المسام', value: '0.0001 ميكرون' },
      { label: 'السعة الإنتاجية', value: '100 جالون / يوم' },
      { label: 'العمر الافتراضي', value: '18 - 24 شهر' },
    ],
    visualType: 'membrane-filmtec',
    reviews: [],
  },
  {
    id: 'stainless-faucet-304-deluxe',
    slug: 'deluxe-304-stainless-steel-filter-faucet',
    title: 'حنفية فلتر مياه استانلس ستيل 304 ديلوكس (قلب سيراميك ثقيل)',
    englishTitle: 'Deluxe Brushed 304 Stainless Steel Gooseneck RO Faucet',
    category: 'إضافي',
    price: 420,
    originalPrice: 550,
    badge: 'ستانلس 304 غذائي',
    badgeTone: 'emerald',
    rating: 4.8,
    reviewsCount: 79,
    inStock: true,
    sku: 'AG-ADD-FCT304',
    warranty: 'ضمان 3 سنوات ضد الصدأ والتسريب',
    origin: 'مستورد فرز أول',
    stagesOrCapacity: 'دوران 360 درجة - خالٍ من الرصاص',
    shortDescription:
      'صنبور مياه مفلترة فاخر من الستانلس ستيل المطفي 304، خالٍ تماماً من الرصاص ولا يتغير لونه أبداً.',
    description:
      'حنفية فلتر ديلوكس بتصميم عنق الإوزة العصري، مصنوعة بالكامل من الستانلس ستيل الغذائي 304 بقلب سيراميك يمنع التنقيط ويدور 360 درجة لسهولة ملء الأكواب والأواني الكبيرة.',
    features: [
      'ستانلس ستيل 304 نقي 100% خالٍ من الرصاص والكروم المؤكسد.',
      'قلب سيراميك يتحمل أكثر من 500,000 فتحة وقفلة بدون تسريب.',
      'تشطيب Brushed Nickel أنيق يناسب أرقى المطابخ الحديثة.',
    ],
    specs: [
      { label: 'الخامة', value: 'SUS 304 Stainless Steel' },
      { label: 'زاوية الدوران', value: '360 درجة' },
    ],
    visualType: 'faucet-304',
    reviews: [],
  },
  {
    id: 'digital-tds-temp-meter',
    slug: 'digital-tds-and-temperature-water-tester',
    title: 'جهاز قياس الأملاح الذائبة والحرارة الديجيتال TDS & Temp Meter',
    englishTitle: 'Digital Water Quality TDS & Temperature Tester Pen',
    category: 'إضافي',
    price: 290,
    originalPrice: 400,
    badge: 'اختبر مياهك بنفسك',
    badgeTone: 'blue',
    rating: 4.9,
    reviewsCount: 156,
    inStock: true,
    sku: 'AG-ADD-TDS01',
    warranty: 'ضمان سنة',
    origin: 'معاير مصنعياً',
    stagesOrCapacity: 'قياس من 0 إلى 9990 ppm',
    shortDescription:
      'جهاز جيب ديجيتال دقيق لقياس نسبة الأملاح الكلية الذائبة (TDS) ودرجة حرارة المياه في ثانية واحدة.',
    description:
      'اطمئن على جودة مياه منزلك وكفاءة فلترك في أي وقت مع قلم قياس TDS الديجيتال المزود بحساس تيتانيوم عالي الدقة وشاشة LCD واضحة بخاصية تثبيت القراءة (Hold).',
    features: [
      'قياس فوري لنسبة الأملاح الذائبة بالجزء في المليون (PPM).',
      'حساس تيتانيوم مقاوم للصدأ مع معايرة تلقائية لدرجة الحرارة ATC.',
      'إيقاف تشغيل تلقائي بعد 5 دقائق للحفاظ على البطارية.',
    ],
    specs: [
      { label: 'مدى القياس', value: '0 - 9990 ppm (mg/L)' },
      { label: 'الدقة', value: '± 2%' },
      { label: 'الملحقات', value: 'جراب جلدي للحفظ + بطارية مركبة' },
    ],
    visualType: 'tds-meter',
    reviews: [],
  },
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-family-shield',
    title: 'عرض الحماية المتكاملة للأسرة (فلتر جنرال برو 7 مراحل + طقم شمع تركي إضافي)',
    subtitle: 'احصل على جهاز جنرال برو 7 مراحل حيوي مع طقم شمع كومباكت تركي إضافي يكفيك سنة كاملة + تركيب مجاني.',
    price: 4299,
    originalPrice: 5550,
    savingAmount: 1251,
    tag: 'وفر 1,251 ج.م',
    itemsIncluded: [
      'فلتر جنرال برو أكوا ترك 7 مراحل تكنولوجيا حيوية',
      'طقم 3 شمعات كومباكت تركي أصلي إضافي',
      'جهاز قياس أملاح أو فحص مياه منزلي مجاني',
      'تركيب وتوصيل مجاني مع ضمان 5 سنوات',
    ],
    productIds: ['general-pro-aquaturk-7', 'd31a8a14-f104-4219-aeb9-07016d8807da'],
    validUntil: 'نهاية الشهر الحالي',
  },
  {
    id: 'offer-tankless-vip',
    title: 'باقة النخبة بدون خزان (ZENO Tankless 400G + شمعة ألكالين بلس + حنفية ستانلس 304)',
    subtitle: 'أحدث تكنولوجيا التدفق المباشر في مصر مع ترقية حنفية ستانلس 304 ديلوكس وشمعة القلوية.',
    price: 9690,
    originalPrice: 13019,
    savingAmount: 3329,
    tag: 'عرض الـ VIP - وفر 3,329 ج.م',
    itemsIncluded: [
      'محطة ZENO Tankless 400 جالون تدفق مباشر',
      'شمعة ألكالين بلس لرفع قلوية المياه pH 9.5',
      'حنفية ستانلس ستيل 304 ديلوكس قلب سيراميك',
      'عقد متابعة مجاني لمدة عامين',
    ],
    productIds: ['zeno-tankless-400g', 'alkaline-plus-cartridge', 'stainless-faucet-304-deluxe'],
    validUntil: 'حتى نفاد الكمية المحدودة',
  },
  {
    id: 'offer-villa-complete',
    title: 'باقة الفيلا الذكية (فلتر مركزي جامبو ثلاثي + فلتر تايتان 7 مراحل للمطبخ)',
    subtitle: 'نقاء شامل لمياه الاستحمام والغسالات في الفيلا بالكامل + مياه شرب صحية قلوية في المطبخ.',
    price: 8390,
    originalPrice: 11450,
    savingAmount: 3060,
    tag: 'باقة الفلل والشقق الكبرى',
    itemsIncluded: [
      'فلتر مركزي جامبو ثلاثي 20 بوصة بالعدادات والشمعات',
      'فلتر تايتان 7 مراحل للتحمل الشاق RO للمطبخ',
      'معاينة هندسية وتركيب كامل بواسطة فريق المشاريع',
    ],
    productIds: ['central-jumbo-triple-20', 'titan-ro-7-heavy-duty'],
    validUntil: 'عرض الموسم',
  },
  {
    id: 'offer-cartridges-2pack',
    title: 'عرض التوفير السنوي للشمع (2 طقم شمع كومباكت تركي + شمعة ألكالين بلس)',
    subtitle: 'اشترِ مؤونة سنة كاملة من الشمعات التركية الأصلية بخصم خاص وتوصيل لباب البيت.',
    price: 1249,
    originalPrice: 2100,
    savingAmount: 851,
    tag: 'الأكثر مبيعاً للصيانة',
    itemsIncluded: [
      'عدد 2 طقم شمع كومباكت تركي (إجمالي 6 شمعات مراحل أولية)',
      'عدد 1 شمعة ألكالين بلس قلوية أصلية',
      'تذكير مجدول بمواعيد تغيير كل شمعة',
    ],
    productIds: ['d31a8a14-f104-4219-aeb9-07016d8807da', 'alkaline-plus-cartridge'],
    validUntil: 'متاح الآن',
  },
];

export const PROJECT_SOLUTIONS: ProjectSolution[] = [
  {
    id: 'sol-ro-industrial',
    title: 'محطات التناضح العكسي (RO)',
    subtitle: 'للمصانع والمزارع والمنشآت الكبيرة',
    iconName: 'factory',
    capacityRange: 'من 5 م³/يوم حتى 1,000 م³/يوم',
    features: ['سعات متنوعة', 'كفاءة عالية', 'توفير في التكاليف', 'صيانة سهلة'],
  },
  {
    id: 'sol-gov-institutions',
    title: 'محطات معالجة للهيئات',
    subtitle: 'للمؤسسات الحكومية والخاصة',
    iconName: 'building',
    capacityRange: 'معايير الكود المصري والعالمي WHO',
    features: ['مواصفات عالمية', 'ضمان ممتد', 'تشغيل أوتوماتيكي', 'تقارير أداء'],
  },
  {
    id: 'sol-villa-central',
    title: 'أنظمة مركزية للفلل',
    subtitle: 'معالجة شاملة لمياه الفيلا بالكامل',
    iconName: 'home',
    capacityRange: 'فلترة + إزالة عسر + تعقيم UV',
    features: ['معالجة كل المنزل', 'حماية الأجهزة', 'مياه ناعمة', 'تحكم ذكي'],
  },
  {
    id: 'sol-desalination',
    title: 'محطات تحلية المياه',
    subtitle: 'لتحلية المياه المالحة والجوفية',
    iconName: 'droplet',
    capacityRange: 'مياه آبار ومياه بحر حتى 40,000 TDS',
    features: ['تحلية كاملة', 'جودة مياه الشرب', 'استرداد عالي', 'تقنية متقدمة'],
  },
];

export const COMPLETED_PROJECTS: CompletedProject[] = [
  {
    id: 'proj-mofa',
    title: 'محطة معالجة وزارة الخارجية',
    client: 'وزارة الخارجية المصرية',
    capacity: 'السعة: 500 م³/يوم',
    location: 'العاصمة الإدارية',
    year: '2025',
    category: 'حكومي وهيئات',
    waterSource: 'مياه بلدية / خزانات استراتيجية',
    outputQuality: 'TDS < 80 ppm + تعقيم مركزي',
    summary: 'تصميم وتنفيذ منظومة معالجة وتعقيم مركزية متكاملة بمواصفات قياسية عالمية ولوحات مراقبة ذكية.',
  },
  {
    id: 'proj-kenana',
    title: 'محطة RO مصنع كنانة',
    client: 'مصنع كنانة للصناعات الغذائية',
    capacity: 'السعة: 200 م³/يوم',
    location: 'القاهرة',
    year: '2025',
    category: 'مصانع وأغذية',
    waterSource: 'مياه تشغيل صناعي',
    outputQuality: 'TDS < 35 ppm (مواصفات غذائية)',
    summary: 'محطة تناضح عكسي صناعية بشاسيه ستانلس ستيل 316L لتغذية خطوط الإنتاج الغذائي بمياه فائقة النقاء.',
  },
  {
    id: 'proj-armed-forces-club',
    title: 'نظام مركزي نادي القوات المسلحة',
    client: 'نادي القوات المسلحة',
    capacity: 'السعة: 150 م³/يوم',
    location: 'شبرا الخيمة',
    year: '2024',
    category: 'أندية ومستشفيات',
    waterSource: 'مياه آبار وبلدية مختلطة',
    outputQuality: 'TDS < 90 ppm مياه شرب ومطاعم',
    summary: 'توريد وتركيب محطة معالجة وتحلية مركزية لخدمة المطاعم والقاعات والمرافق الرياضية بالنادي.',
  },
  {
    id: 'proj-shalateen',
    title: 'محطة تحلية آبار شركة شلاتين',
    client: 'شركة شلاتين للثروة المعدنية',
    capacity: 'السعة: 350 م³/يوم',
    location: 'البحر الأحمر / الصحراء الشرقية',
    year: '2025',
    category: 'حكومي وهيئات',
    waterSource: 'مياه آبار عالية الملوحة (6,500 TDS)',
    outputQuality: 'TDS < 120 ppm صالحة للشرب والتشغيل',
    summary: 'محطة تحلية مياه آبار للخدمة الشاقة في الظروف الصحراوية مع نظام غسيل كيميائي أوتوماتيكي CIP.',
  },
  {
    id: 'proj-elhayat-hospital',
    title: 'وحدة مياه الغسيل الكلوي والتعقيم بمستشفى الحياة',
    client: 'مستشفى الحياة التخصصي',
    capacity: 'السعة: 80 م³/يوم (Double Pass RO)',
    location: 'مصر الجديدة - القاهرة',
    year: '2025',
    category: 'أندية ومستشفيات',
    waterSource: 'مياه بلدية',
    outputQuality: 'Ultra-Pure Medical Grade < 10 µS/cm',
    summary: 'منظومة RO مرحلتين (Double Pass) مع تعقيم بالأشعة فوق البنفسجية والأوزون لوحدات الرعاية والعمليات.',
  },
  {
    id: 'proj-new-capital-villas',
    title: 'منظومات معالجة الفلل السكنية بالعاصمة الإدارية',
    client: 'كمبوندات الحي السكني R3 & R5',
    capacity: 'السعة: 45 وحدة فيلا مركزية',
    location: 'العاصمة الإدارية الجديدة',
    year: '2026',
    category: 'فلل ومنتجعات',
    waterSource: 'شبكة المياه العمومية',
    outputQuality: 'إزالة 100% للعسر والكلور والرواسب',
    summary: 'تركيب وحدات FRP أوتوماتيكية وستانلس ستيل 304 لحماية شبكات السباكة الذكية وحمامات السباحة.',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'srv-purity-guarantee',
    title: 'ضمان النقاء',
    description: 'نحن من أوائل الشركات في السوق التي تقدم ضماناً مكتوباً على نقاء المياه الناتجة من فلاترنا',
    iconName: 'droplet',
    highlightText: 'تعويض 5,000 جنيه في حالة عدم مطابقة النقاء',
    features: ['تحليل في أي معمل معتمد', 'استرجاع الجهاز بالكامل', 'رد كامل المبلغ', 'تعويض 5000 جنيه'],
  },
  {
    id: 'srv-annual-contracts',
    title: 'عقود صيانة سنوية',
    description: 'صيانة دورية منتظمة لضمان أداء مثالي لأنظمة التنقية على مدار العام',
    iconName: 'wrench',
    features: ['زيارات دورية منتظمة', 'تبديل الفلاتر', 'فحص شامل', 'تقرير حالة'],
  },
  {
    id: 'srv-original-parts',
    title: 'قطع غيار أصلية',
    description: 'نوفر جميع قطع الغيار الأصلية المعتمدة لضمان جودة التشغيل',
    iconName: 'file-check',
    features: ['فلاتر أصلية', 'ممبرين RO', 'صمامات', 'مواتير'],
  },
  {
    id: 'srv-free-water-test',
    title: 'تحليل مياه مجاني',
    description: 'فحص وتحليل شامل لجودة المياه لتحديد النظام الأمثل لاحتياجاتك',
    iconName: 'flask',
    features: ['فحص TDS', 'قياس pH', 'كشف الملوثات', 'تقرير مفصل'],
  },
  {
    id: 'srv-24-7-support',
    title: 'دعم فني متواصل',
    description: 'فريق دعم فني متخصص متاح للإجابة على استفساراتك وحل مشاكلك',
    iconName: 'headphones',
    features: ['دعم هاتفي', 'زيارات طوارئ', 'استجابة سريعة', 'فنيين معتمدين'],
  },
  {
    id: 'srv-full-warranty',
    title: 'ضمان شامل',
    description: 'ضمان شامل على جميع المنتجات والخدمات لراحة بالك التامة',
    iconName: 'shield',
    features: ['ضمان 5 سنوات', 'تغطية كاملة', 'استبدال مجاني', 'صيانة مجانية'],
  },
  {
    id: 'srv-fast-install',
    title: 'تركيب سريع',
    description: 'خدمة تركيب احترافية وسريعة في نفس اليوم أو اليوم التالي',
    iconName: 'clock',
    features: ['تركيب مجاني', 'فريق محترف', 'تشغيل فوري', 'شرح الاستخدام'],
  },
];

export const VIDEOS_LIST: VideoItem[] = [
  {
    id: 'vid-alshams-2026',
    title: 'اكتشف ثورة التكنولوجيا الحيوية لعام 2026 مع أكوا جنرال',
    channelOrSeries: 'لقاء تلفزيوني - قناة الشمس',
    duration: '14:25',
    views: '48.2 ألف مشاهدة',
    date: 'أكتوبر 2026',
    category: 'لقاءات تلفزيونية',
    description:
      'مصمم بأربع وحدات متطورة: وحدة تنقية لإزالة الشوائب، وحدة معالجة لتحسين الجودة، وحدة تعقيم لضمان السلامة، ووحدة تنشيط حيوي لمياه قلوية غنية بالمعادن.',
    keyTakeaways: [
      'الفرق الجوهري بين الفلاتر التقليدية وأنظمة التكنولوجيا الحيوية من أكوا جنرال.',
      'شرح عملي لـ 28 نقطة تفوق في جهاز جنرال برو أكوا ترك.',
      'تفاصيل وثيقة ضمان النقاء المكتوب وتعويض الـ 5,000 جنيه.',
    ],
    thumbnailType: 'tv-interview',
  },
  {
    id: 'vid-cartridge-price-diff',
    title: 'في فرق في سعر شمع الفلتر ... طيب ما تيجي نعرف الفرق العملي!',
    channelOrSeries: 'مختبر أكوا جنرال الهندسي',
    duration: '08:15',
    views: '92.5 ألف مشاهدة',
    date: 'سبتمبر 2026',
    category: 'توعية ومقارنات',
    description:
      'مقارنة معملية وتشريح فعلي بين الشمعات التركية الأصلية (Food Grade) والشمعات المقلدة مجهولة المصدر وتأثيرها المباشر على صحة الكلى والكبد.',
    keyTakeaways: [
      'اختبار كثافة البولي بروبيلين في شمعة المرحلة الأولى PP.',
      'الفرق بين كربون جوز الهند النباتي النشط والفحم الصناعي الرخيص.',
      'لماذا تحمي الشمعات الكبسولة المغلقة أسرتك من البكتيريا؟',
    ],
    thumbnailType: 'cartridge-comparison',
  },
  {
    id: 'vid-zeno-tankless-review',
    title: 'تجربة عملية لفلتر ZENO Tankless 400 جالون بدون خزان تحت الحوض',
    channelOrSeries: 'مراجعات المنتجات',
    duration: '06:40',
    views: '34.1 ألف مشاهدة',
    date: 'أغسطس 2026',
    category: 'شرح المنتجات',
    description:
      'شاهد كيف وفرنا 70% من مساحة المطبخ مع سرعة تدفق مذهلة وقياس حي لنسبة الأملاح قبل وبعد الفلترة.',
    keyTakeaways: [
      'قياس سرعة ملء لتر مياه كامل في أقل من 50 ثانية بدون خزان.',
      'اختبار صوت الموتور الصامت ونظام الغسيل الذاتي Auto-Flush.',
    ],
    thumbnailType: 'tankless-demo',
  },
  {
    id: 'vid-water-tds-experiment',
    title: 'إزاي تقيس جودة مية بيتك في 30 ثانية وتعرف الفلتر شغال صح ولا لأ؟',
    channelOrSeries: 'نصائح مهندسي أكوا جنرال',
    duration: '05:10',
    views: '61.8 ألف مشاهدة',
    date: 'يوليو 2026',
    category: 'تجارب عملية',
    description:
      'دليل عملي لكل أسرة مصرية لقراءة جهاز الـ TDS ومعرفة النسب الصحية للأملاح ودرجة القلوية pH.',
    keyTakeaways: [
      'المعدل المثالي لأملاح مياه الشرب بين 40 إلى 120 جزء في المليون.',
      'علامات تلف ممبرين المرحلة الرابعة ومتى يجب استبداله.',
    ],
    thumbnailType: 'tds-test',
  },
  {
    id: 'vid-industrial-ro-tour',
    title: 'جولة داخل إحدى محطات تحلية أكوا جنرال بسعة 500 م³/يوم بالعاصمة الإدارية',
    channelOrSeries: 'مشاريعنا على أرض الواقع',
    duration: '11:05',
    views: '22.4 ألف مشاهدة',
    date: 'يونيو 2026',
    category: 'تجارب عملية',
    description:
      'توثيق مراحل التصميم والتوريد والتشغيل لمحطة معالجة وتحلية متكاملة تعمل بنظام PLC الأوتوماتيكي.',
    keyTakeaways: [
      'مراحل الفلترة الرملية والكربونية المسبقة وحقن الكيماويات.',
      'اختبار جودة المياه الناتجة ومطابقتها للكود المصري والعالمي.',
    ],
    thumbnailType: 'ro-plant',
  },
  {
    id: 'vid-maintenance-steps',
    title: 'ماذا يحدث في زيارة الصيانة الدورية من أكوا جنرال؟ (12 نقطة فحص وتطهير)',
    channelOrSeries: 'مركز الصيانة المعتمد',
    duration: '07:30',
    views: '29.7 ألف مشاهدة',
    date: 'مايو 2026',
    category: 'شرح المنتجات',
    description:
      'تعرف على البروتوكول الهندسي المعتمد لدى فنيي أكوا جنرال لتعقيم الفلتر وضبط ضغط الخزان في كل زيارة.',
    keyTakeaways: [
      'تعقيم الهاوسينج وخطوط المياه بمواد آمنة غذائياً.',
      'ضبط ضغط البالون الداخلي للخزان على 7 PSI لضمان قوة اندفاع المياه.',
    ],
    thumbnailType: 'maintenance-guide',
  },
];

export const CLIENT_PARTNERS: ClientPartner[] = [
  {
    id: 'cl-mofa',
    name: 'وزارة الخارجية',
    sector: 'هيئات سيادية وحكومية',
    projectSummary: 'محطة معالجة مركزية بسعة 500 م³/يوم بالعاصمة الإدارية الجديدة',
    logoCode: 'mofa',
  },
  {
    id: 'cl-armed-forces',
    name: 'نادي القوات المسلحة',
    sector: 'أندية ومنشآت كبرى',
    projectSummary: 'منظومة تنقية وتحلية مركزية بسعة 150 م³/يوم',
    logoCode: 'armed-forces',
  },
  {
    id: 'cl-new-capital',
    name: 'العاصمة الإدارية الجديدة',
    sector: 'مدن ذكية ومشروعات قومية',
    projectSummary: 'أنظمة معالجة مياه المباني الإدارية والفلل السكنية',
    logoCode: 'new-capital',
  },
  {
    id: 'cl-shalateen',
    name: 'شركة شلاتين للثروة المعدنية',
    sector: 'تعدين وصناعات استراتيجية',
    projectSummary: 'محطات تحلية مياه آبار عالية الملوحة بالصحراء الشرقية',
    logoCode: 'shalateen',
  },
  {
    id: 'cl-elhayat',
    name: 'مستشفى الحياة التخصصي',
    sector: 'قطاع طبي ومستشفيات',
    projectSummary: 'وحدات مياه فائقة النقاء Double-Pass RO للغسيل الكلوي والتعقيم',
    logoCode: 'elhayat',
  },
  {
    id: 'cl-womens-health',
    name: 'مستشفى صحة المرأة',
    sector: 'قطاع طبي ومستشفيات',
    projectSummary: 'محطة معالجة وتعقيم مركزي بالأشعة فوق البنفسجية UV',
    logoCode: 'womens-health',
  },
  {
    id: 'cl-abc-hospital',
    name: 'مستشفى ABC',
    sector: 'قطاع طبي ومستشفيات',
    projectSummary: 'شبكة مياه معقمة لغرف العمليات والعناية المركزة والمعامل',
    logoCode: 'abc-hospital',
  },
  {
    id: 'cl-kenana',
    name: 'مصنع كنانة للصناعات الغذائية',
    sector: 'مصانع وصناعات غذائية',
    projectSummary: 'محطة تناضح عكسي RO بسعة 200 م³/يوم لخطوط الإنتاج',
    logoCode: 'kenana',
  },
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'test-1',
    name: 'أحمد محمد',
    role: 'مدير مستشفى الحياة',
    initial: 'أ',
    rating: 5,
    quote: 'خدمة ممتازة وسرعة في التركيب، والمياه أصبحت نقية تماماً. أنصح بهم بشدة!',
    category: 'قطاع طبي',
  },
  {
    id: 'test-2',
    name: 'محمود السيد',
    role: 'مدير شركة شلاتين',
    initial: 'م',
    rating: 5,
    quote: 'تعاملنا معهم في تنفيذ محطة معالجة كاملة، والنتيجة فاقت توقعاتنا. احترافية عالية.',
    category: 'محطات صناعية',
  },
  {
    id: 'test-3',
    name: 'سارة أحمد',
    role: 'صاحبة فيلا بالشروق',
    initial: 'س',
    rating: 5,
    quote: 'فريق محترف جداً، والصيانة الدورية ممتازة. شكراً أكوا جنرال!',
    category: 'أنظمة فلل',
  },
  {
    id: 'test-4',
    name: 'عمرو حسن',
    role: 'مدير مكتب هندسي',
    initial: 'ع',
    rating: 5,
    quote: 'أفضل شركة تعاملت معها في مجال فلاتر المياه. جودة عالية وأسعار مناسبة.',
    category: 'مكاتب وشركات',
  },
  {
    id: 'test-5',
    name: 'مي إبراهيم',
    role: 'مديرة مطعم فندقي',
    initial: 'م',
    rating: 5,
    quote: 'الفلتر غيّر طعم المياه بالكامل، والعملاء لاحظوا الفرق. خدمة عملاء ممتازة!',
    category: 'مطاعم وكافيهات',
  },
  {
    id: 'test-6',
    name: 'كريم عبدالله',
    role: 'صاحب مصنع أغذية',
    initial: 'ك',
    rating: 5,
    quote: 'محطة المعالجة تعمل بكفاءة عالية منذ 3 سنوات. فريق الصيانة دائماً في الموعد.',
    category: 'مصانع أغذية',
  },
  {
    id: 'test-7',
    name: 'هدى محمود',
    role: 'ربة منزل - المعادي',
    initial: 'هـ',
    rating: 5,
    quote: 'أفضل استثمار لصحة عائلتي. الفلتر سهل الاستخدام والشمع بيتغير في الميعاد.',
    category: 'منزلي',
  },
  {
    id: 'test-8',
    name: 'د. خالد سمير',
    role: 'طبيب - عيادة خاصة',
    initial: 'د',
    rating: 5,
    quote: 'جودة المياه أساسية في العيادة. أكوا جنرال وفرولي حل متكامل وآمن.',
    category: 'عيادات طبية',
  },
];
