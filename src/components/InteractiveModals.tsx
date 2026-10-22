import React, { useState } from 'react';
import {
  X,
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  CheckCircle2,
  ShieldCheck,
  Play,
  Pause,
  Calendar,
  User,
} from 'lucide-react';
import { VideoItem, COMPANY_INFO } from '../data/siteData';
import { CartItem, calculateCartSummary, formatPriceEGP } from '../utils/catalogLogic';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (productId: string, newQty: number) => void;
  onClearCart: () => void;
  onSelectProduct: (productId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onClearCart,
  onSelectProduct,
}) => {
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'confirmed'>('cart');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    governorate: 'القاهرة',
    address: '',
    paymentMethod: 'cod',
  });
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const summary = calculateCartSummary(cart, appliedCoupon);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerInfo.name.trim() || !customerInfo.phone.trim() || !customerInfo.address.trim()) {
      return;
    }
    const generated = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generated);
    setCheckoutStep('confirmed');
    onClearCart();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="سلة المشتريات"
      className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex justify-end"
    >
      <div className="bg-white w-full max-w-md h-full flex flex-col shadow-2xl border-r border-slate-200">
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <ShoppingCart className="w-5 h-5 text-sky-700" />
            <h2 className="text-lg font-black text-slate-950">
              {checkoutStep === 'cart'
                ? `سلة المشتريات (${summary.totalItems})`
                : checkoutStep === 'shipping'
                ? 'بيانات التوصيل والتركيب'
                : 'تأكيد الطلب'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setCheckoutStep('cart');
              onClose();
            }}
            aria-label="إغلاق السلة"
            className="p-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-200 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {checkoutStep === 'confirmed' ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-black text-slate-950">تم تأكيد طلبك بنجاح!</h3>
              <p className="text-sm font-extrabold text-sky-800">
                رقم الطلب: <span className="font-mono">{orderId}</span>
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                شكراً لثقتك في أكوا جنرال يا {customerInfo.name}. سيتواصل معك مسؤول التنسيق والتركيبات على رقم{' '}
                <span dir="ltr" className="font-bold">
                  {customerInfo.phone}
                </span>{' '}
                لتأكيد الموعد المناسب لك.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCheckoutStep('cart');
                  onClose();
                }}
                className="w-full py-3 rounded-xl bg-sky-700 text-white font-extrabold text-sm cursor-pointer"
              >
                العودة للتسوق
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingCart className="w-12 h-12 text-slate-400 mx-auto" />
              <p className="text-base font-black text-slate-900">سلة المشتريات فارغة حالياً</p>
              <p className="text-xs text-slate-600 font-medium">
                تصفح فلاتر المياه والشمعات التركية الأصلية وأضف ما تحتاجه للسلة.
              </p>
            </div>
          ) : checkoutStep === 'cart' ? (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-300 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectProduct(item.productId);
                      }}
                      className="text-right text-sm font-black text-slate-950 hover:text-sky-700 line-clamp-2 cursor-pointer"
                    >
                      {item.title}
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateQty(item.productId, 0)}
                      aria-label={`حذف ${item.title}`}
                      className="p-1.5 text-slate-500 hover:text-rose-600 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-slate-300 rounded-xl bg-white">
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.productId, item.quantity + 1)}
                        className="p-1.5 text-slate-800 hover:text-sky-700 cursor-pointer"
                        aria-label="زيادة الكمية"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-black text-slate-950 tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.productId, item.quantity - 1)}
                        className="p-1.5 text-slate-800 hover:text-sky-700 cursor-pointer"
                        aria-label="تقليل الكمية"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-sm font-black text-sky-800 tabular-nums">
                      {formatPriceEGP(item.price * item.quantity)} ج.م
                    </div>
                  </div>
                </div>
              ))}

              {/* Coupon Box */}
              <div className="pt-2">
                <label className="block text-xs font-extrabold text-slate-800 mb-1.5">
                  هل لديك كود خصم؟ (جرب: AQUA10 أو PURE500)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="أدخل الكود..."
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs font-mono font-bold text-slate-900 uppercase"
                  />
                  <button
                    type="button"
                    onClick={() => setAppliedCoupon(couponInput)}
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-extrabold cursor-pointer"
                  >
                    تطبيق
                  </button>
                </div>
                {summary.couponDiscount > 0 && (
                  <p className="mt-1.5 text-xs font-bold text-emerald-700">
                    تم تطبيق خصم الكوبون: -{formatPriceEGP(summary.couponDiscount)} ج.م
                  </p>
                )}
              </div>
            </div>
          ) : (
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">
                  الاسم بالكامل *
                </label>
                <input
                  type="text"
                  required
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  placeholder="الاسم الثلاثي"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">
                  رقم الموبايل *
                </label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                  placeholder="01xxxxxxxxx"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">
                  المحافظة
                </label>
                <select
                  value={customerInfo.governorate}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, governorate: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slate-900"
                >
                  <option value="القاهرة">القاهرة</option>
                  <option value="الجيزة">الجيزة</option>
                  <option value="الإسكندرية">الإسكندرية</option>
                  <option value="القليوبية">القليوبية</option>
                  <option value="الدقهلية">الدقهلية</option>
                  <option value="الشرقية">الشرقية</option>
                  <option value="الغربية">الغربية</option>
                  <option value="أخرى">محافظة أخرى</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-extrabold text-slate-900 mb-1">
                  العنوان بالتفصيل للتركيب والتوصيل *
                </label>
                <textarea
                  rows={2}
                  required
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  placeholder="المنطقة، الشارع، رقم العقار والشقة..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
                />
              </div>
              <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs font-bold text-sky-950 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" />
                <span>الدفع عند الاستلام وبعد المعاينة والتركيب والتأكد من نقاء المياه.</span>
              </div>
            </form>
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && checkoutStep !== 'confirmed' && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs font-bold text-slate-700 tabular-nums">
              <div className="flex justify-between">
                <span>المجموع الفرعي:</span>
                <span>{formatPriceEGP(summary.subtotal)} ج.م</span>
              </div>
              {summary.couponDiscount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>خصم الكوبون:</span>
                  <span>-{formatPriceEGP(summary.couponDiscount)} ج.م</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>التوصيل والتركيب:</span>
                <span className="text-emerald-800">
                  {summary.shippingFee === 0 ? 'مجاني' : `${summary.shippingFee} ج.م`}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-slate-950 pt-2 border-t border-slate-200">
                <span>الإجمالي النهائي:</span>
                <span className="text-sky-800">{formatPriceEGP(summary.grandTotal)} ج.م</span>
              </div>
            </div>

            {checkoutStep === 'cart' ? (
              <button
                type="button"
                onClick={() => setCheckoutStep('shipping')}
                className="w-full py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-black text-sm cursor-pointer"
              >
                إتمام الطلب والتركيب
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="py-3 rounded-xl border border-slate-300 text-slate-800 font-extrabold text-xs cursor-pointer"
                >
                  رجوع للسلة
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs cursor-pointer"
                >
                  تأكيد الطلب الآن
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: { name: string; phone: string } | null;
  onLoginSuccess: (user: { name: string; phone: string }) => void;
  onLogout: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess,
  onLogout,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    onLoginSuccess({ name: name.trim(), phone: phone.trim() });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="تسجيل الدخول لحساب العميل"
      className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-3xl border border-slate-300 max-w-md w-full p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-sky-700" />
            <h2 className="text-xl font-black text-slate-950">حساب عملاء أكوا جنرال</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق نافذة تسجيل الدخول"
            className="p-1.5 rounded-lg text-slate-600 hover:text-slate-950 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {currentUser ? (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-sm font-black text-slate-950">مرحباً، {currentUser.name}</div>
              <div dir="ltr" className="text-xs font-bold text-slate-600 text-right mt-1">
                {currentUser.phone}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-200 text-xs font-extrabold text-emerald-800">
                ✓ حالة الضمان: مفعّل (ضمان النقاء الشامل 5 سنوات)
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="w-full py-2.5 rounded-xl border border-rose-300 text-rose-700 font-extrabold text-xs hover:bg-rose-50 cursor-pointer"
            >
              تسجيل الخروج
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-700 font-medium leading-relaxed">
              سجل دخولك برقم الهاتف لمتابعة مواعيد تغيير الشمعات، عقود الصيانة السنوية، وإضافة تقييماتك.
            </p>
            <div>
              <label htmlFor="login-name" className="block text-xs font-extrabold text-slate-900 mb-1">
                الاسم الكريم *
              </label>
              <input
                id="login-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="مثال: م. محمد عادل"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
              />
            </div>
            <div>
              <label htmlFor="login-phone" className="block text-xs font-extrabold text-slate-900 mb-1">
                رقم الهاتف المسجل *
              </label>
              <input
                id="login-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01xxxxxxxxx"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm cursor-pointer"
            >
              دخول / تفعيل الحساب
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

interface MaintenanceModalProps {
  isOpen: boolean;
  defaultService?: string;
  onClose: () => void;
}

export const MaintenanceBookingModal: React.FC<MaintenanceModalProps> = ({
  isOpen,
  defaultService = 'صيانة دورية وتغيير شمعات',
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');
  const [service, setService] = useState(defaultService);
  const [confirmed, setConfirmed] = useState(false);

  React.useEffect(() => {
    if (defaultService) setService(defaultService);
    setConfirmed(false);
  }, [defaultService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setConfirmed(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="حجز موعد صيانة أو تحليل مياه"
      className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-3xl border border-slate-300 max-w-md w-full p-6 sm:p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-sky-700" />
            <h2 className="text-lg font-black text-slate-950">حجز موعد زيارة فنية</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-600 hover:text-slate-950 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-black text-slate-950">تم تسجيل موعد الزيارة بنجاح!</h3>
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              سيتصل بك قسم الصيانة ({COMPANY_INFO.afterSalesPhoneFormatted}) لتأكيد ساعة وصول الفني المختص.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-sky-700 text-white text-xs font-extrabold cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-extrabold text-slate-900 mb-1">
                نوع الخدمة المطلوبة
              </label>
              <input
                type="text"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm font-bold text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-extrabold text-slate-900 mb-1">
                الاسم الكريم *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="اسمك..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-extrabold text-slate-900 mb-1">
                رقم الهاتف *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="01xxxxxxxxx"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
              />
            </div>
            <div>
              <label className="block text-xs font-extrabold text-slate-900 mb-1">
                المنطقة / الحي
              </label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="مثال: مدينة نصر، المعادي، أكتوبر..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-extrabold text-sm cursor-pointer"
            >
              تأكيد حجز الموعد
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
  onNavigateToProducts: () => void;
}

export const VideoPlayerModal: React.FC<VideoModalProps> = ({
  video,
  onClose,
  onNavigateToProducts,
}) => {
  const [playing, setPlaying] = useState(true);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4"
    >
      <div className="bg-white rounded-3xl border border-slate-300 max-w-2xl w-full overflow-hidden shadow-2xl">
        {/* Interactive Simulated Video Screen */}
        <div className="relative h-64 sm:h-80 bg-gradient-to-br from-slate-950 via-[#0A2540] to-slate-900 text-white p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold bg-red-600 px-3 py-1 rounded-md">
              {video.channelOrSeries} · {video.duration}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق الفيديو"
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center my-auto space-y-3">
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              className="w-16 h-16 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg cursor-pointer"
            >
              {playing ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 fill-current" />}
            </button>
            <div className="text-sm sm:text-base font-black text-sky-200 max-w-md mx-auto">
              {playing ? 'جاري تشغيل العرض التوضيحي...' : 'تم إيقاف العرض مؤقتاً'}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
              <div className="w-2/5 h-full bg-sky-400 rounded-full" />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-300">
              <span>03:18</span>
              <span>{video.duration}</span>
            </div>
          </div>
        </div>

        {/* Video Details & Key Takeaways */}
        <div className="p-6 space-y-4">
          <h2 className="text-lg sm:text-xl font-black text-slate-950">{video.title}</h2>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            {video.description}
          </p>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
            <div className="text-xs font-black text-slate-900 mb-2">أبرز النقاط الهندسية في الفيديو:</div>
            <ul className="space-y-1.5">
              {video.keyTakeaways.map((pt, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs font-bold text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigateToProducts();
              }}
              className="px-5 py-2.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-extrabold cursor-pointer"
            >
              تصفح الأجهزة المذكورة في الفيديو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
