import React, { useState } from 'react';
import {
  Droplets,
  Wrench,
  FileCheck,
  FlaskConical,
  Headphones,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Play,
  Phone,
  MessageCircle,
  Send,
  Calendar,
} from 'lucide-react';
import {
  SERVICES_LIST,
  VIDEOS_LIST,
  COMPANY_INFO,
  VideoItem,
} from '../data/siteData';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onOpenMaintenanceModal: (defaultService?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenMaintenanceModal,
}) => {
  return (
    <div className="space-y-16 py-12">
      {/* 1. Services Header & 7 Service Cards (Matches Screenshot 5) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-extrabold text-sky-700 mb-1">خدماتنا</p>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950">
            خدمات <span className="text-sky-700">متكاملة</span> ودعم احترافي
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-700 font-medium">
            نقدم مجموعة شاملة من الخدمات الهندسية والفنية لضمان أفضل تجربة لعملائنا قبل وبعد البيع
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv) => {
            const IconComp =
              srv.iconName === 'droplet'
                ? Droplets
                : srv.iconName === 'wrench'
                ? Wrench
                : srv.iconName === 'file-check'
                ? FileCheck
                : srv.iconName === 'flask'
                ? FlaskConical
                : srv.iconName === 'headphones'
                ? Headphones
                : srv.iconName === 'shield'
                ? ShieldCheck
                : Clock;

            return (
              <div
                key={srv.id}
                className="bg-white rounded-3xl border border-slate-300 hover:border-sky-600 p-7 shadow-xs flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-700 text-white flex items-center justify-center mb-5 shadow-2xs">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h2 className="text-xl font-black text-slate-950">{srv.title}</h2>
                  <p className="mt-2 text-sm text-slate-700 font-medium leading-relaxed">
                    {srv.description}
                  </p>

                  {srv.highlightText && (
                    <div className="mt-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-extrabold">
                      ★ {srv.highlightText}
                    </div>
                  )}

                  <ul className="mt-5 pt-4 border-t border-slate-200 space-y-2.5">
                    {srv.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-extrabold text-slate-900"
                      >
                        <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onOpenMaintenanceModal(srv.title)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-sky-700 text-slate-900 hover:text-white font-extrabold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>اطلب خدمة "{srv.title}" الآن</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Need Help Banner (Matches Screenshot 5 bottom) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-l from-[#0C2D57] via-[#0369A1] to-[#0284C7] rounded-3xl p-8 sm:p-12 text-center text-white shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-black">هل تحتاج إلى مساعدة؟</h2>
          <p className="mt-3 text-sm sm:text-base text-sky-100 max-w-xl mx-auto font-medium">
            فريقنا جاهز لمساعدتك في اختيار أفضل الحلول لاحتياجاتك أو جدولة زيارة مهندس الصيانة
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-950 hover:bg-sky-50 font-black text-sm shadow-md transition-colors cursor-pointer"
            >
              <span>تواصل معنا الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

interface VideosPageProps {
  onOpenVideo: (video: VideoItem) => void;
}

export const VideosPage: React.FC<VideosPageProps> = ({ onOpenVideo }) => {
  const [selectedCat, setSelectedCat] = useState<string>('الكل');
  const categories = [
    'الكل',
    'لقاءات تلفزيونية',
    'توعية ومقارنات',
    'شرح المنتجات',
    'تجارب عملية',
  ];

  const filteredVideos =
    selectedCat === 'الكل'
      ? VIDEOS_LIST
      : VIDEOS_LIST.filter((v) => v.category === selectedCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-sm font-extrabold text-sky-700 mb-1">مكتبة الفيديو</p>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950">فيديوهاتنا</h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 font-medium">
          شاهد فيديوهات توضيحية ولقاءات تلفزيونية وتجارب عملية عن منتجاتنا وخدماتنا
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-extrabold border transition-colors cursor-pointer ${
              selectedCat === cat
                ? 'bg-sky-700 text-white border-sky-700'
                : 'bg-white text-slate-800 border-slate-300 hover:border-sky-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((vid) => (
          <article
            key={vid.id}
            onClick={() => onOpenVideo(vid)}
            className="group bg-white rounded-2xl border border-slate-300 hover:border-sky-600 overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Video Thumbnail Visual */}
              <div className="relative h-52 bg-gradient-to-br from-slate-900 via-[#0E2F5A] to-slate-950 flex flex-col items-center justify-center p-5 text-center">
                <span className="absolute top-3 right-3 bg-slate-900/90 text-white text-xs font-extrabold px-2.5 py-1 rounded-md border border-slate-700">
                  يوتيوب
                </span>
                <span className="absolute top-3 left-3 bg-sky-600 text-white text-xs font-extrabold px-2.5 py-1 rounded-md tabular-nums">
                  {vid.duration}
                </span>

                <div className="w-14 h-14 rounded-full bg-sky-500 group-hover:bg-sky-400 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform mb-3">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
                <div className="text-xs font-extrabold text-sky-300">{vid.channelOrSeries}</div>
              </div>

              <div className="p-5">
                <div className="text-xs font-bold text-slate-600 mb-1.5">
                  {vid.category} · {vid.views} · {vid.date}
                </div>
                <h2 className="text-base font-black text-slate-950 group-hover:text-sky-700 transition-colors leading-snug">
                  {vid.title}
                </h2>
                <p className="mt-2 text-xs text-slate-700 font-medium leading-relaxed line-clamp-3">
                  {vid.description}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-sky-700">
              <span>مشاهدة الفيديو والتفاصيل</span>
              <Play className="w-4 h-4" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.serviceType) {
      setErrorMsg('يرجى إدخال الاسم ورقم الهاتف واختيار نوع الخدمة المطلوبة.');
      return;
    }
    setErrorMsg(null);
    const ticketId = `AG-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedTicket(ticketId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header (Matches Screenshot 1) */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-extrabold text-sky-700 mb-1">تواصل معنا</p>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950">
          نحن هنا <span className="text-sky-700">لمساعدتك</span>
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-700 font-medium">
          تواصل معنا للحصول على استشارة مجانية أو عرض سعر مخصص لاحتياجاتك
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Form Card (Right side in RTL) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-300 p-6 sm:p-9 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-black text-slate-950 mb-6">أرسل رسالتك</h2>

          {submittedTicket ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-black text-slate-950">
                تم استلام رسالتك بنجاح! رقم الطلب: <span className="font-mono">{submittedTicket}</span>
              </h3>
              <p className="text-sm text-slate-800 font-medium">
                شكراً لتواصلك مع أكوا جنرال يا {formData.name}. سيقوم فريق خدمة العملاء بالاتصال بك على الرقم{' '}
                <span dir="ltr" className="font-bold">
                  {formData.phone}
                </span>{' '}
                خلال أقل من ساعة عمل.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmittedTicket(null);
                  setFormData({ name: '', phone: '', email: '', serviceType: '', message: '' });
                }}
                className="px-5 py-2.5 rounded-xl bg-sky-700 text-white text-xs font-extrabold cursor-pointer"
              >
                إرسال رسالة أخرى
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {errorMsg && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-rose-50 border border-rose-300 text-rose-900 text-xs font-extrabold"
                >
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                    الاسم *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="اسمك الكريم"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm font-medium text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-sky-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                    الهاتف *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="رقم الهاتف"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm font-medium text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-sky-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                  البريد الإلكتروني
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm font-medium text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-sky-600 focus:bg-white"
                />
              </div>

              <div>
                <label htmlFor="contact-service" className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                  نوع الخدمة *
                </label>
                <select
                  id="contact-service"
                  required
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slate-950 focus:outline-none focus:border-sky-600 focus:bg-white"
                >
                  <option value="">اختر نوع الخدمة</option>
                  <option value="شراء فلتر مياه منزلي">شراء فلتر مياه منزلي</option>
                  <option value="طلب صيانة أو تغيير شمعات">طلب صيانة أو تغيير شمعات</option>
                  <option value="منظومة فلترة مركزية للفيلا">منظومة فلترة مركزية للفيلا</option>
                  <option value="دراسة وتنفيذ محطة صناعية RO">دراسة وتنفيذ محطة صناعية RO</option>
                  <option value="تحليل مياه مجاني">تحليل مياه مجاني</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs sm:text-sm font-extrabold text-slate-900 mb-1.5">
                  الرسالة
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب رسالتك هنا..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-sm font-medium text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-sky-600 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-l from-[#0B3B66] via-[#0369A1] to-[#0EA5E9] hover:opacity-95 text-white font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>إرسال الرسالة</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Info Cards (Left side in RTL - Matches Screenshot 1) */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href={`tel:${COMPANY_INFO.salesPhone}`}
            className="flex items-center gap-4 bg-white rounded-2xl border border-slate-300 hover:border-sky-600 p-5 shadow-2xs transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-sky-700 text-white flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-950">المبيعات</div>
              <div dir="ltr" className="text-sm font-extrabold text-sky-800 tabular-nums mt-0.5">
                {COMPANY_INFO.salesPhoneDisplay}
              </div>
            </div>
          </a>

          <a
            href={`tel:${COMPANY_INFO.afterSalesPhone}`}
            className="flex items-center gap-4 bg-white rounded-2xl border border-slate-300 hover:border-sky-600 p-5 shadow-2xs transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-sky-700 text-white flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-950">خدمة ما بعد البيع</div>
              <div dir="ltr" className="text-sm font-extrabold text-sky-800 tabular-nums mt-0.5">
                {COMPANY_INFO.afterSalesPhoneDisplay}
              </div>
            </div>
          </a>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-white rounded-2xl border border-slate-300 hover:border-emerald-600 p-5 shadow-2xs transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-sky-700 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-950">واتساب</div>
              <div dir="ltr" className="text-sm font-extrabold text-sky-800 tabular-nums mt-0.5">
                {COMPANY_INFO.salesPhoneDisplay}
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-white rounded-2xl border border-slate-300 p-5 shadow-2xs">
            <div className="w-12 h-12 rounded-full bg-sky-700 text-white flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-black text-slate-950">ساعات العمل</div>
              <div className="text-sm font-bold text-slate-700 mt-0.5">
                {COMPANY_INFO.workingHours}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-300 p-5 shadow-2xs">
            <div className="text-sm font-black text-slate-950 mb-3">تابعنا على</div>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center font-black transition-colors"
                aria-label="واتساب أكوا جنرال"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-sky-700 hover:bg-sky-800 text-white flex items-center justify-center font-black transition-colors"
                aria-label="فيسبوك أكوا جنرال"
              >
                f
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
