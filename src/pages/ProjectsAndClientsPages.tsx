import React, { useState } from 'react';
import {
  Factory,
  Building2,
  Home,
  Droplets,
  CheckCircle2,
  MapPin,
  Gauge,
  ArrowLeft,
  Wrench,
  ShieldCheck,
  FlaskConical,
  Star,
  Calendar,
  FileText,
} from 'lucide-react';
import {
  PROJECT_SOLUTIONS,
  COMPLETED_PROJECTS,
  CLIENT_PARTNERS,
  CLIENT_TESTIMONIALS,
  PRODUCTS,
  Product,
} from '../data/siteData';
import { ProductCard } from '../components/LayoutComponents';

interface ProjectsPageProps {
  onNavigate: (path: string) => void;
  onSelectProduct: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('الكل');
  const [studyModalOpen, setStudyModalOpen] = useState(false);
  const [studySubmitted, setStudySubmitted] = useState(false);
  const [studyForm, setStudyForm] = useState({
    companyName: '',
    phone: '',
    capacityNeeded: '50 م³/يوم',
    waterSource: 'مياه آبار جوفية',
    location: '',
  });

  const sectors = ['الكل', 'حكومي وهيئات', 'مصانع وأغذية', 'أندية ومستشفيات', 'فلل ومنتجعات'];

  const visibleProjects =
    selectedSector === 'الكل'
      ? COMPLETED_PROJECTS
      : COMPLETED_PROJECTS.filter((p) => p.category === selectedSector);

  const industrialAndCentralProducts = PRODUCTS.filter(
    (p) => p.category === 'صناعي' || p.category === 'مركزي'
  );

  const handleStudySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studyForm.companyName.trim() || !studyForm.phone.trim()) return;
    setStudySubmitted(true);
  };

  return (
    <div className="space-y-16 py-12">
      {/* 1. Industrial & Commercial Solutions Header & 4 Cards (Matches Screenshot 4) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-extrabold text-sky-700 mb-1">المحطات والمشاريع</p>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950">
            حلول <span className="text-sky-700">صناعية وتجارية</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-700 font-medium">
            تصميم وتنفيذ محطات معالجة وتحلية المياه للمنشآت الكبيرة بأعلى معايير الجودة الهندسية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECT_SOLUTIONS.map((sol) => {
            const IconComp =
              sol.iconName === 'factory'
                ? Factory
                : sol.iconName === 'building'
                ? Building2
                : sol.iconName === 'home'
                ? Home
                : Droplets;

            return (
              <div
                key={sol.id}
                className="bg-white rounded-3xl border border-slate-300 p-7 shadow-xs hover:border-sky-600 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-sky-700 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h2 className="text-xl font-black text-slate-950">{sol.title}</h2>
                      <span className="text-xs font-extrabold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-lg">
                        {sol.capacityRange}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-700 font-semibold">{sol.subtitle}</p>

                    <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-slate-200">
                      {sol.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Completed Projects Section (High-Contrast Fix for Light Mode!) */}
      <section className="bg-slate-100/90 border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              مشاريع <span className="text-sky-700">منجزة</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium">
              بعض من المشاريع والمحطات التي تم تنفيذها وتسليمها بنجاح بمعايير قياسية
            </p>
          </div>

          {/* Sector Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {sectors.map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => setSelectedSector(sec)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold border transition-colors cursor-pointer ${
                  selectedSector === sec
                    ? 'bg-sky-700 text-white border-sky-700'
                    : 'bg-white text-slate-800 border-slate-300 hover:border-sky-600'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* High-Contrast Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((proj) => (
              <article
                key={proj.id}
                className="bg-white rounded-2xl border-2 border-slate-300 hover:border-sky-700 p-6 shadow-xs flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-extrabold text-sky-800 mb-3">
                    <span>{proj.category} · {proj.year}</span>
                    <span className="text-emerald-800">تم التسليم والتشغيل</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-950 leading-snug">
                    {proj.title}
                  </h3>
                  <p className="mt-1 text-xs font-extrabold text-slate-700">
                    الجهة: {proj.client}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                    {proj.summary}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 space-y-2 text-xs font-extrabold">
                  <div className="flex items-center justify-between text-slate-900">
                    <span className="inline-flex items-center gap-1.5 text-sky-800">
                      <Gauge className="w-4 h-4" />
                      <span>{proj.capacity}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-800">
                      <MapPin className="w-4 h-4 text-sky-700" />
                      <span>{proj.location}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2 text-[11px] text-slate-700 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                    <span>المصدر: {proj.waterSource}</span>
                    <span className="text-emerald-800 font-extrabold">
                      {proj.outputQuality}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ready-to-Order Central & Industrial Stations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-extrabold text-sky-700 mb-1">محطات جاهزة للتوريد</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            وحدات المعالجة <span className="text-sky-700">المركزية والصناعية</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industrialAndCentralProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* 4. Do you have a project CTA Banner + Interactive Project Study Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-l from-[#0C2D57] via-[#0369A1] to-[#0284C7] rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black">هل لديك مشروع؟</h2>
          <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-xl mx-auto font-medium">
            نقوم بالتصميم والتنفيذ وفق احتياجات كل مشروع، مع الالتزام بأعلى مستويات الكفاءة التشغيلية
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setStudySubmitted(false);
                setStudyModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-sky-50 font-black text-sm shadow-md transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-sky-700" />
              <span>طلب دراسة مشروع</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950/35 hover:bg-slate-950/55 text-white border border-white/30 font-extrabold text-sm cursor-pointer"
            >
              <span>تواصل مع إدارة المشروعات</span>
            </button>
          </div>
        </div>

        {/* Project Study Request Modal */}
        {studyModalOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="study-modal-title"
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-3xl border border-slate-300 max-w-lg w-full p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 id="study-modal-title" className="text-xl font-black text-slate-950">
                  طلب دراسة فنية وعرض سعر لمحطة مياه
                </h3>
                <button
                  type="button"
                  onClick={() => setStudyModalOpen(false)}
                  className="text-sm font-bold text-slate-600 hover:text-slate-950 cursor-pointer"
                >
                  إغلاق ✕
                </button>
              </div>

              {studySubmitted ? (
                <div className="space-y-4 text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-black text-slate-950">
                    تم استلام طلب الدراسة الهندسية بنجاح!
                  </h4>
                  <p className="text-sm text-slate-700 font-medium">
                    سيتواصل معكم كبير مهندسي المشروعات بشركة أكوا جنرال خلال 24 ساعة لتحديد موعد المعاينة وتحليل المياه.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStudyModalOpen(false)}
                    className="px-6 py-2.5 rounded-xl bg-sky-700 text-white text-sm font-extrabold cursor-pointer"
                  >
                    حسناً
                  </button>
                </div>
              ) : (
                <form onSubmit={handleStudySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-800 mb-1">
                      اسم الشركة / الجهة / صاحب الفيلا *
                    </label>
                    <input
                      type="text"
                      required
                      value={studyForm.companyName}
                      onChange={(e) =>
                        setStudyForm({ ...studyForm, companyName: e.target.value })
                      }
                      placeholder="مثال: مصنع النور للأغذية"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 mb-1">
                        رقم الهاتف / واتساب *
                      </label>
                      <input
                        type="tel"
                        required
                        value={studyForm.phone}
                        onChange={(e) => setStudyForm({ ...studyForm, phone: e.target.value })}
                        placeholder="010xxxxxxxx"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 mb-1">
                        السعة المطلوبة تقريباً
                      </label>
                      <select
                        value={studyForm.capacityNeeded}
                        onChange={(e) =>
                          setStudyForm({ ...studyForm, capacityNeeded: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slate-900"
                      >
                        <option value="منظومة فيلا مركزية">منظومة فيلا مركزية</option>
                        <option value="5 - 20 م³/يوم">5 - 20 م³/يوم</option>
                        <option value="50 - 150 م³/يوم">50 - 150 م³/يوم</option>
                        <option value="200 - 500+ م³/يوم">200 - 500+ م³/يوم</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 mb-1">
                        مصدر المياه
                      </label>
                      <select
                        value={studyForm.waterSource}
                        onChange={(e) =>
                          setStudyForm({ ...studyForm, waterSource: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slate-900"
                      >
                        <option value="مياه آبار جوفية">مياه آبار جوفية</option>
                        <option value="مياه بلدية">مياه بلدية / شبكة</option>
                        <option value="مياه بحر عالية الملوحة">مياه بحر عالية الملوحة</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-extrabold text-slate-800 mb-1">
                        الموقع / المحافظة
                      </label>
                      <input
                        type="text"
                        value={studyForm.location}
                        onChange={(e) => setStudyForm({ ...studyForm, location: e.target.value })}
                        placeholder="مثال: العاشر من رمضان"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm cursor-pointer"
                  >
                    إرسال طلب الدراسة المجانية
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

interface ClientsPageProps {
  onNavigate: (path: string) => void;
  onOpenMaintenanceModal: () => void;
}

export const ClientsPage: React.FC<ClientsPageProps> = ({
  onNavigate,
  onOpenMaintenanceModal,
}) => {
  return (
    <div className="space-y-20 py-12">
      {/* 1. Partners of Success Header, Stats & 8 Institutional Logos (Matches Screenshot 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-extrabold text-sky-700 mb-1">عملاؤنا</p>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950">
            شركاء <span className="text-sky-700">النجاح</span>
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium">
            نفخر بثقة كبرى المؤسسات والهيئات والمستشفيات والمصانع في حلول أكوا جنرال لمعالجة المياه
          </p>
        </div>

        {/* 4 Key Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { value: '100+', label: 'مشروع منجز' },
            { value: '32,000', label: 'عميل سعيد' },
            { value: '10', label: 'سنوات خبرة' },
            { value: '24/7', label: 'دعم فني' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-300 p-6 text-center shadow-2xs"
            >
              <div className="text-3xl font-black text-sky-800 tabular-nums">{stat.value}</div>
              <div className="text-sm font-extrabold text-slate-900 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 8 Partner Logo Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CLIENT_PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-slate-300 hover:border-sky-600 p-6 text-center shadow-2xs transition-all flex flex-col items-center justify-between"
            >
              {/* Emblem Icon */}
              <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-4">
                {partner.logoCode === 'mofa' || partner.logoCode === 'new-capital' ? (
                  <Building2 className="w-8 h-8 text-amber-600" />
                ) : partner.logoCode === 'armed-forces' || partner.logoCode === 'shalateen' ? (
                  <ShieldCheck className="w-8 h-8 text-sky-800" />
                ) : partner.logoCode === 'kenana' ? (
                  <Factory className="w-8 h-8 text-emerald-700" />
                ) : (
                  <FlaskConical className="w-8 h-8 text-rose-600" />
                )}
              </div>
              <div>
                <h2 className="text-base font-black text-slate-950">{partner.name}</h2>
                <p className="text-xs font-bold text-sky-700 mt-1">{partner.sector}</p>
                <p className="text-xs text-slate-700 font-medium mt-2 leading-relaxed">
                  {partner.projectSummary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Tailored Solutions for Every Need */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-extrabold text-sky-700 mb-1">تخصصاتنا</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            حلول <span className="text-sky-700">مخصصة</span> لكل احتياج
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-300 p-7 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mb-4">
              <Home className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-950">منزلي ومكاتب</h3>
            <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
              أنظمة تنقية مياه مصممة خصيصاً للمنازل والشقق والمكاتب. نوفر مياه نقية وصحية للجميع.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs sm:text-sm font-extrabold text-slate-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>فلاتر 7 مراحل</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>سهولة التركيب</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>صيانة دورية</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>ضمان شامل</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-300 p-7 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-slate-950">صناعي وتجاري</h3>
            <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
              محطات معالجة متكاملة للمصانع والمستشفيات والفنادق بأعلى معايير الجودة العالمية.
            </p>
            <div className="mt-5 pt-4 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs sm:text-sm font-extrabold text-slate-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>محطات كبيرة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>صيانة مجدولة</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>دعم فني سريع</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-700" />
                <span>عقود سنوية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Maintenance Center Strip */}
      <section className="bg-slate-100/80 border-y border-slate-200 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-sm font-extrabold text-sky-700 mb-1">مركز الصيانة</p>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              متخصصون في صيانة <span className="text-sky-700">جميع أنواع الفلاتر</span>
            </h2>
            <p className="mt-2 text-sm text-slate-700 font-medium">
              مركز متكامل لصيانة جميع أنواع وماركات فلاتر المياه مع فريق فني متخصص
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Wrench,
                title: 'صيانة جميع الماركات',
                desc: 'صيانة شاملة لجميع أنواع وماركات فلاتر المياه المنزلية والتجارية',
              },
              {
                icon: CheckCircle2,
                title: 'قطع غيار أصلية',
                desc: 'نستخدم فقط قطع الغيار الأصلية لضمان أفضل أداء وعمر أطول',
              },
              {
                icon: Droplets,
                title: 'تحليل مياه مجاني',
                desc: 'فحص شامل لجودة المياه قبل وبعد الصيانة مع تقرير مفصل',
              },
              {
                icon: ShieldCheck,
                title: 'ضمان على الصيانة',
                desc: 'ضمان 6 أشهر على جميع أعمال الصيانة وقطع الغيار',
              },
            ].map((m, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-300 p-6 text-center shadow-2xs"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-700 text-white flex items-center justify-center mx-auto mb-4">
                  <m.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-black text-slate-950">{m.title}</h3>
                <p className="mt-2 text-xs text-slate-700 font-medium leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onOpenMaintenanceModal}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>احجز موعد صيانة</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Client Testimonials Grid (Matches Screenshot 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm font-extrabold text-sky-700 mb-1">التقييمات</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            تقييم عملائنا <span className="text-sky-700">الكرام</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-500" />
              ))}
            </div>
            <span className="text-base font-black text-slate-950 tabular-nums">4.9/5</span>
            <span className="text-xs font-bold text-slate-600">(+500 تقييم)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {CLIENT_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-300 p-6 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-amber-500">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-600">{item.category}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-800 font-semibold leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-700 text-white font-black text-sm flex items-center justify-center shrink-0">
                  {item.initial}
                </div>
                <div>
                  <div className="text-sm font-black text-slate-950">{item.name}</div>
                  <div className="text-xs font-bold text-slate-600">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join our clients CTA */}
        <div className="mt-14 text-center">
          <h3 className="text-2xl font-black text-slate-950">انضم إلى قائمة عملائنا</h3>
          <p className="mt-2 text-sm text-slate-700 font-medium">
            نحن جاهزون لتنفيذ مشروعك القادم بأعلى معايير الجودة
          </p>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="mt-5 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm cursor-pointer"
          >
            <span>تواصل معنا</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
