import React, { useState } from 'react';
import {
  ShieldCheck,
  Droplets,
  Award,
  ArrowLeft,
  Play,
  Wrench,
  Headphones,
  CheckCircle2,
  Building2,
  Home,
  Eye,
  Target,
  Users,
  Sparkles,
  FlaskConical,
  Phone,
} from 'lucide-react';
import {
  COMPANY_INFO,
  PRODUCTS,
  VIDEOS_LIST,
  Product,
  ProductCategory,
  VideoItem,
} from '../data/siteData';
import {
  recommendSystemByWaterProfile,
  formatPriceEGP,
} from '../utils/catalogLogic';
import { ProductCard } from '../components/LayoutComponents';

interface HomePageProps {
  onNavigate: (path: string, category?: ProductCategory) => void;
  onSelectProduct: (id: string) => void;
  onAddToCart: (product: Product) => void;
  onOpenVideo: (video: VideoItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
  onOpenVideo,
}) => {
  // Interactive TDS & System Recommender State
  const [tdsValue, setTdsValue] = useState<number>(380);
  const [usageType, setUsageType] = useState<'home' | 'villa' | 'commercial' | 'industrial'>('home');
  const [spaceType, setSpaceType] = useState<'normal' | 'tight'>('normal');

  const recommendation = recommendSystemByWaterProfile(tdsValue, usageType, spaceType);
  const recommendedProduct =
    PRODUCTS.find((p) => p.id === recommendation.recommendedProductId) || PRODUCTS[5];

  const featuredProducts = PRODUCTS.slice(0, 6);
  const featuredVideos = VIDEOS_LIST.slice(0, 2);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#071A3E] via-[#0B2B5E] to-[#0E3F7B] text-white py-20 lg:py-24 border-b border-sky-900">
        {/* Water ripple subtle SVG background */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.45) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.35) 0%, transparent 45%)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-sky-300 text-sm font-bold tracking-wide mb-4">
            مصمم بشكل علمي وصحي · ضمان نقاء مكتوب
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight max-w-4xl mx-auto">
            حلول تنقية المياه{' '}
            <span className="text-sky-300">المصممة علميًا وصحيًا</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed font-medium">
            {COMPANY_INFO.subSlogan}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/products')}
              className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-base shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              استكشف منتجاتنا ({PRODUCTS.length} منتج)
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="px-7 py-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white border border-white/40 font-extrabold text-base transition-all cursor-pointer whitespace-nowrap"
            >
              تواصل معنا
            </button>
          </div>

          {/* 3 Hero Trust Cards */}
          <div className="mt-14 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-900/65 backdrop-blur-md border border-sky-400/35 rounded-2xl p-5 text-center">
              <ShieldCheck className="w-7 h-7 text-sky-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white tabular-nums">+10</div>
              <div className="text-sm font-bold text-slate-200 mt-0.5">سنوات خبرة</div>
            </div>
            <div className="bg-slate-900/65 backdrop-blur-md border border-sky-400/35 rounded-2xl p-5 text-center">
              <Droplets className="w-7 h-7 text-sky-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white tabular-nums">+32,000</div>
              <div className="text-sm font-bold text-slate-200 mt-0.5">عميل سعيد</div>
            </div>
            <div className="bg-slate-900/65 backdrop-blur-md border border-sky-400/35 rounded-2xl p-5 text-center">
              <Award className="w-7 h-7 text-sky-400 mx-auto mb-2" />
              <div className="text-2xl font-black text-white tabular-nums">5</div>
              <div className="text-sm font-bold text-slate-200 mt-0.5">سنوات ضمان</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Preview Section (High Contrast Light Mode) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-300 p-6 sm:p-10 shadow-xs">
          {/* Text Column */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-sm font-extrabold text-sky-700">من نحن</p>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              شركة <span className="text-sky-700">أكوا جنرال</span>
            </h2>
            <p className="text-slate-800 text-base leading-relaxed font-medium">
              شركة رائدة في مصر، تعمل تحت إدارة هندسية متخصصة، وتهدف إلى تقديم أفضل تكنولوجيا الفلاتر وأنظمة معالجة المياه لضمان مياه نقية وآمنة لكل منزل ومصنع ومؤسسة.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('/about')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm transition-colors cursor-pointer"
              >
                <span>اقرأ المزيد عن الشركة</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/offers')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 font-extrabold text-sm transition-colors cursor-pointer"
              >
                <span>تصفح العروض السنوية</span>
              </button>
            </div>
          </div>

          {/* 4 Stat Boxes Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-300 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-sky-800 tabular-nums">10</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">سنوات خبرة</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">إدارة هندسية متخصصة</div>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-sky-800 tabular-nums">100+</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">مشروع منجز</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">محطات صناعية وحكومية</div>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-sky-800 tabular-nums">32,000</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">عميل سعيد</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">ثقة في جميع المحافظات</div>
            </div>
            <div className="bg-slate-50 border border-slate-300 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-sky-800 tabular-nums">24/7</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">دعم فني</div>
              <div className="text-xs font-semibold text-slate-600 mt-0.5">استجابة وصيانة فورية</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-extrabold text-sky-700 mb-1">منتجاتنا</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            أنظمة <span className="text-sky-700">تنقية المياه</span> المنزلية
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium">
            اكتشف مجموعتنا المتكاملة من أنظمة تنقية المياه والشمعات الأصلية المصممة لتلبية احتياجات كل أسرة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/products')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm shadow-sm transition-colors cursor-pointer"
          >
            <span>عرض جميع المنتجات ({PRODUCTS.length} منتج)</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. Interactive Smart Water Advisor (UI Organization Enhancement) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#0F2547] to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-extrabold">
                <FlaskConical className="w-5 h-5" />
                <span>المستشار الهندسي الذكي لاختيار النظام المناسب</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black">
                حدد طبيعة المياه لديك وسنرشح لك المنظومة المثالية فوراً
              </h2>

              {/* Usage Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  1. نوع الاستخدام المطلوب:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'home', label: 'منزل / شقة' },
                    { id: 'villa', label: 'فيلا كاملة' },
                    { id: 'commercial', label: 'كافيه / عيادة' },
                    { id: 'industrial', label: 'مصنع / بئر' },
                  ].map((u) => (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUsageType(u.id as typeof usageType)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-extrabold border transition-colors cursor-pointer ${
                        usageType === u.id
                          ? 'bg-sky-500 text-slate-950 border-sky-400'
                          : 'bg-slate-800/90 text-slate-200 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      {u.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* TDS Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold mb-2">
                  <label htmlFor="tds-slider" className="text-slate-300">
                    2. نسبة الأملاح التقريبية (TDS) أو مصدر المياه:
                  </label>
                  <span className="text-sky-300 font-black tabular-nums">
                    {tdsValue} جزء في المليون (PPM)
                  </span>
                </div>
                <input
                  id="tds-slider"
                  type="range"
                  min={120}
                  max={3500}
                  step={20}
                  value={tdsValue}
                  onChange={(e) => setTdsValue(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-300 mt-1 font-medium">
                  <span>مياه بلدية عذبة (150)</span>
                  <span>متوسطة الأملاح (500)</span>
                  <span>طلمبات / آبار (1500+)</span>
                </div>
              </div>

              {/* Under-sink space toggle for home */}
              {usageType === 'home' && (
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    3. المساحة المتاحة تحت الحوض:
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setSpaceType('normal')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border cursor-pointer ${
                        spaceType === 'normal'
                          ? 'bg-sky-500 text-slate-950 border-sky-400'
                          : 'bg-slate-800 text-slate-200 border-slate-700'
                      }`}
                    >
                      مساحة عادية (تتسع لخزان)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSpaceType('tight')}
                      className={`py-2 px-3 rounded-xl text-xs font-bold border cursor-pointer ${
                        spaceType === 'tight'
                          ? 'bg-sky-500 text-slate-950 border-sky-400'
                          : 'bg-slate-800 text-slate-200 border-slate-700'
                      }`}
                    >
                      مساحة ضيقة (أفضل بدون خزان)
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Recommendation Result Box */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="text-xs font-extrabold text-sky-700 mb-1">
                الترشيح الهندسي الأنسب لك:
              </div>
              <div className="text-sm font-bold text-emerald-800 mb-2">
                {recommendation.statusLabel}
              </div>
              <h3 className="text-lg font-black text-slate-950 leading-snug">
                {recommendedProduct.title}
              </h3>
              <p className="mt-2 text-xs text-slate-700 leading-relaxed font-medium">
                {recommendation.explanation}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 flex items-baseline justify-between">
                <span className="text-xs font-bold text-slate-600">السعر الشامل للضمان:</span>
                <span className="text-2xl font-black text-sky-800 tabular-nums">
                  {formatPriceEGP(recommendedProduct.price)} ج.م
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onSelectProduct(recommendedProduct.id)}
                  className="py-2.5 px-3 rounded-xl border border-slate-300 hover:border-sky-600 text-slate-900 font-extrabold text-xs cursor-pointer"
                >
                  عرض المواصفات
                </button>
                <button
                  type="button"
                  onClick={() => onAddToCart(recommendedProduct)}
                  className="py-2.5 px-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-xs cursor-pointer"
                >
                  أضف للسلة الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Videos Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-extrabold text-sky-700 mb-1">فيديوهاتنا</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            شاهد <span className="text-sky-700">فيديوهاتنا</span> التوضيحية
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium">
            تعرف على منتجاتنا وتجاربنا المعملية ولقاءاتنا التلفزيونية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {featuredVideos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => onOpenVideo(vid)}
              className="group bg-white rounded-2xl border border-slate-300 hover:border-sky-600 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <div className="relative h-56 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 flex items-center justify-center p-6">
                <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-md">
                  يوتيوب · {vid.duration}
                </div>
                <div className="text-center max-w-xs">
                  <div className="w-14 h-14 rounded-full bg-sky-500 group-hover:bg-sky-400 text-slate-950 flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                  <p className="text-xs font-bold text-sky-300">{vid.channelOrSeries}</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-extrabold text-slate-950 group-hover:text-sky-700 transition-colors">
                  {vid.title}
                </h3>
                <p className="mt-2 text-xs text-slate-700 leading-relaxed line-clamp-2">
                  {vid.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/videos')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-sky-600 text-slate-900 font-extrabold text-sm transition-colors cursor-pointer"
          >
            <span>جميع الفيديوهات ({VIDEOS_LIST.length})</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6. Integrated Water Solutions (Home & Industrial) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-extrabold text-sky-700 mb-1">تخصصاتنا</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            حلول <span className="text-sky-700">متكاملة</span> للمياه
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-300 p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mb-4">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950">أنظمة تنقية المياه المنزلية</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
                أنظمة مصممة علميًا وصحيًا، تضمن مياه نقية وآمنة للاستخدام اليومي، مع الحفاظ على المعادن الضرورية لصحة الجسم، بالإضافة إلى الفلاتر المركزية للفلل.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => onNavigate('/products', 'منزلي ومكاتب')}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-sky-700 hover:text-sky-900 cursor-pointer"
              >
                <span>اكتشف المنتجات المنزلية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-300 p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950">محطات تحلية ومعالجة المياه</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed font-medium">
                تصميم وتنفيذ محطات معالجة وتحلية المياه للمصانع، الهيئات، المستشفيات، الفلل، والمنشآت الصناعية والغذائية بطاقات تبدأ من 5 م³ حتى 1000 م³/يوم.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => onNavigate('/projects')}
                className="inline-flex items-center gap-2 text-sm font-extrabold text-sky-700 hover:text-sky-900 cursor-pointer"
              >
                <span>اكتشف المشاريع والمحطات</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Why Aqua General */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-extrabold text-sky-700 mb-1">خدماتنا</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            لماذا <span className="text-sky-700">أكوا جنرال؟</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: 'ضمان شامل',
              desc: 'ضمان 5 سنوات على جميع المنتجات وضمان نقاء مكتوب',
            },
            {
              icon: Wrench,
              title: 'صيانة دورية',
              desc: 'عقود صيانة سنوية احترافية وتذكير أوتوماتيكي بالمواعيد',
            },
            {
              icon: Headphones,
              title: 'دعم فني',
              desc: 'فريق دعم فني ومهندسين متاح 24/7 في كافة المحافظات',
            },
            {
              icon: Award,
              title: 'جودة معتمدة',
              desc: 'شمعات تركية ومكونات أصلية مطابقة للمعايير العالمية',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-300 p-6 text-center shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-slate-950">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-700 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/services')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-sky-600 text-slate-900 font-extrabold text-sm transition-colors cursor-pointer"
          >
            <span>جميع الخدمات</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 8. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-l from-[#0C2D57] via-[#0369A1] to-[#0284C7] rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black">هل تحتاج إلى استشارة مجانية؟</h2>
          <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-xl mx-auto font-medium">
            تواصل معنا اليوم وسنساعدك في اختيار النظام المناسب لاحتياجاتك أو حجز موعد تحليل مياه مجاني.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-sky-50 font-black text-sm shadow-md transition-colors cursor-pointer"
            >
              <span>تواصل معنا</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.salesPhone}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950/40 hover:bg-slate-950/60 text-white border border-white/30 font-extrabold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">{COMPANY_INFO.salesPhoneFormatted}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-12">
      {/* Section 1: About Intro & Engineer Card (Matches Screenshot 8) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-extrabold text-sky-700 mb-2">من نحن</p>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950">
            شركة <span className="text-sky-700">أكوا جنرال</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            شركة رائدة في مصر، تعمل تحت إدارة هندسية متخصصة، وتهدف إلى تقديم أفضل تكنولوجيا الفلاتر وأنظمة معالجة المياه لضمان مياه نقية وآمنة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Right Column in RTL: Engineer / Lab Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-sky-700 via-sky-800 to-slate-900 p-6 text-white shadow-lg border border-sky-600">
              <div className="bg-slate-900/80 rounded-2xl p-6 border border-sky-400/30 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-sky-300">
                    قطاع الجودة والمعامل الهندسية
                  </span>
                  <ShieldCheck className="w-6 h-6 text-sky-400" />
                </div>

                {/* SVG Illustration of Water Quality Engineer & Lab Test */}
                <svg viewBox="0 0 320 220" className="w-full h-48 rounded-xl bg-slate-800/90 p-3">
                  <circle cx="160" cy="85" r="42" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
                  <path
                    d="M160 52 C178 78 182 95 160 110 C138 95 142 78 160 52 Z"
                    fill="#38bdf8"
                  />
                  <text x="160" y="155" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="900">
                    إشراف هندسي ومعامل معتمدة
                  </text>
                  <text x="160" y="176" textAnchor="middle" fill="#bae6fd" fontSize="11" fontWeight="600">
                    فحص TDS · توازن pH · تعقيم بكتيري
                  </text>
                  <rect x="65" y="190" width="190" height="10" rx="5" fill="#0ea5e9" />
                </svg>

                <div className="grid grid-cols-2 gap-3 text-xs font-bold">
                  <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                    <div className="text-sky-300 font-black">وثيقة ضمان النقاء</div>
                    <div className="text-slate-200 mt-0.5">تعويض 5,000 ج.م مكتوب</div>
                  </div>
                  <div className="bg-slate-800/90 p-3 rounded-xl border border-slate-700">
                    <div className="text-sky-300 font-black">شمعات أصلية 100%</div>
                    <div className="text-slate-200 mt-0.5">كبسولات معقمة تركية</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column in RTL: Engineering Approach & Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              نتعامل مع المياه بمنظور هندسي صحي
            </h2>
            <p className="text-slate-800 text-base leading-relaxed font-medium">
              نحن نتعامل مع المياه بمنظور هندسي صحي، ونعتمد على حلول مدروسة علميًا، مع التزام كامل بخدمات ما بعد البيع والصيانة الدورية الاحترافية، لنضمن لعملائنا أعلى مستويات الأمان والجودة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                'إدارة هندسية متخصصة',
                'أفضل تكنولوجيا الفلاتر',
                'منظور هندسي صحي',
                'حلول مدروسة علميًا',
                'خدمات ما بعد البيع',
                'صيانة دورية احترافية',
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-300 shadow-2xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-sky-700 shrink-0" />
                  <span className="text-sm font-extrabold text-slate-900">{point}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white rounded-2xl border border-slate-300 p-5 text-center shadow-xs">
                <div className="text-3xl font-black text-sky-800 tabular-nums">10</div>
                <div className="text-sm font-extrabold text-slate-900 mt-1">سنوات خبرة</div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-300 p-5 text-center shadow-xs">
                <div className="text-3xl font-black text-sky-800 tabular-nums">32,000</div>
                <div className="text-sm font-extrabold text-slate-900 mt-1">عميل سعيد</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Vision & Mission */}
      <section className="bg-slate-100/80 border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-300 p-8 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-950">رؤيتنا</h2>
            <p className="mt-3 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              أن نكون المرجع الأول في مصر لتكنولوجيا المياه الصحية، من خلال دمج العلم بالهندسة لتوفير كوب ماء نقي في كل مكان.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-300 p-8 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-black text-slate-950">رسالتنا</h2>
            <p className="mt-3 text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
              حماية صحة كل أسرة مصرية عبر أنظمة تنقية منزلية ذكية، ودعم قطاع الأعمال بمحطات معالجة مياه فائقة الكفاءة.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            قيمنا <span className="text-sky-700">الأساسية</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: 'الجودة',
              desc: 'نلتزم بأعلى معايير الجودة العالمية في كل شمعة وجهاز ومحطة.',
            },
            {
              icon: Sparkles,
              title: 'التميز',
              desc: 'نسعى دائماً للتميز والابتكار في تكنولوجيا المعالجة الحيوية.',
            },
            {
              icon: Users,
              title: 'الثقة',
              desc: 'نبني علاقات طويلة المدى مع عملائنا عبر ضمان النقاء المكتوب.',
            },
            {
              icon: Wrench,
              title: 'الخدمة',
              desc: 'دعم فني متواصل وجدولة صيانة دقيقة على مدار الساعة.',
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-300 p-6 text-center shadow-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mx-auto mb-4">
                <val.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-950">{val.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/products')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm cursor-pointer"
          >
            <span>تصفح كتالوج المنتجات الكامل</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
