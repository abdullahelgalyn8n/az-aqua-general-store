import React, { useState } from 'react';
import {
  Phone,
  ShoppingCart,
  User,
  Menu,
  X,
  Check,
  Copy,
  Link2,
  ArrowLeft,
  Star,
  ShieldCheck,
  MessageCircle,
  Eye,
} from 'lucide-react';
import { COMPANY_INFO, Product } from '../data/siteData';
import { PageRoute, calculateDiscountPercent, formatPriceEGP } from '../utils/catalogLogic';
import { ProductVisual } from './ProductVisual';

export const AquaGeneralLogo: React.FC<{ dark?: boolean }> = ({ dark = false }) => (
  <div className="flex items-center gap-3 shrink-0 select-none">
    <div
      className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center border shadow-sm ${
        dark
          ? 'bg-white border-slate-200 text-slate-900'
          : 'bg-slate-900 border-slate-800 text-white'
      }`}
    >
      <span className="text-[15px] font-black tracking-tighter leading-none text-sky-400">
        AQUA
      </span>
      <span
        className={`text-[9px] font-bold tracking-widest uppercase mt-0.5 ${
          dark ? 'text-slate-800' : 'text-slate-200'
        }`}
      >
        General
      </span>
    </div>
    <span
      className={`text-xl font-black tracking-tight whitespace-nowrap ${
        dark ? 'text-white' : 'text-slate-900'
      }`}
    >
      أكوا جنرال
    </span>
  </div>
);

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (path: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  currentUser: { name: string; phone: string } | null;
  onOpenLogin: () => void;
}

const NAV_LINKS: { label: string; path: string; matchPage: PageRoute['page'][] }[] = [
  { label: 'الرئيسية', path: '/', matchPage: ['home'] },
  { label: 'من نحن', path: '/about', matchPage: ['about'] },
  { label: 'المنتجات', path: '/products', matchPage: ['products', 'product-detail'] },
  { label: 'العروض', path: '/offers', matchPage: ['offers'] },
  { label: 'المحطات والمشاريع', path: '/projects', matchPage: ['projects'] },
  { label: 'سابقة الأعمال', path: '/clients', matchPage: ['clients'] },
  { label: 'الخدمات', path: '/services', matchPage: ['services'] },
  { label: 'فيديو', path: '/videos', matchPage: ['videos'] },
  { label: 'اتصل بنا', path: '/contact', matchPage: ['contact'] },
];

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  cartCount,
  onOpenCart,
  currentUser,
  onOpenLogin,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 rounded-lg"
        >
          <AquaGeneralLogo />
        </a>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="القائمة الرئيسية"
          className="hidden xl:flex items-center gap-5 text-[15px] font-bold"
        >
          {NAV_LINKS.map((item) => {
            const isActive = item.matchPage.includes(currentRoute.page);
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`py-2 px-1.5 transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                  isActive
                    ? 'text-sky-700 border-sky-600'
                    : 'text-slate-700 border-transparent hover:text-sky-700 hover:border-sky-300'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Cart, Login, Call CTA) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`سلة المشتريات (${cartCount})`}
            className="relative p-2.5 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400 transition-colors cursor-pointer"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 rounded-full bg-sky-600 text-white text-xs font-extrabold flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenLogin}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 border border-slate-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <User className="w-4 h-4 text-sky-700" />
            <span>{currentUser ? currentUser.name : 'تسجيل الدخول'}</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.salesPhone}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-l from-sky-600 to-sky-800 hover:from-sky-700 hover:to-sky-900 shadow-xs transition-all whitespace-nowrap shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>اتصل الآن</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            className="xl:hidden p-2.5 rounded-xl border border-slate-300 text-slate-800 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 shadow-lg">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {NAV_LINKS.map((item) => {
              const isActive = item.matchPage.includes(currentRoute.page);
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-800 border border-sky-200'
                      : 'text-slate-800 hover:bg-slate-100 border border-transparent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between gap-3 sm:hidden">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 flex items-center justify-center gap-2"
            >
              <User className="w-4 h-4 text-sky-700" />
              <span>{currentUser ? currentUser.name : 'تسجيل الدخول'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

interface PageUrlBarProps {
  currentRoute: PageRoute;
  pageTitle: string;
  parentCrumb?: { label: string; path: string };
  onNavigate: (path: string) => void;
}

export const PageUrlBar: React.FC<PageUrlBarProps> = ({
  currentRoute,
  pageTitle,
  parentCrumb,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);
  const fullDisplayUrl = `https://aquageneral.online${currentRoute.path}`;

  const handleCopyUrl = () => {
    const urlToCopy =
      typeof window !== 'undefined'
        ? `${window.location.origin}${currentRoute.path}`
        : fullDisplayUrl;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(urlToCopy).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-100 border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Breadcrumb */}
        <nav aria-label="مسار الصفحة" className="flex items-center gap-2 text-slate-700 font-semibold">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/');
            }}
            className="hover:text-sky-700 transition-colors"
          >
            الرئيسية
          </a>
          {parentCrumb && (
            <>
              <span className="text-slate-400" aria-hidden="true">
                /
              </span>
              <a
                href={parentCrumb.path}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(parentCrumb.path);
                }}
                className="hover:text-sky-700 transition-colors"
              >
                {parentCrumb.label}
              </a>
            </>
          )}
          {currentRoute.path !== '/' && (
            <>
              <span className="text-slate-400" aria-hidden="true">
                /
              </span>
              <span className="text-slate-950 font-bold truncate max-w-[240px] sm:max-w-md">
                {pageTitle}
              </span>
            </>
          )}
        </nav>

        {/* Dedicated Page Link Display & Copy Button */}
        <div className="flex items-center gap-2 bg-white border border-slate-300 rounded-lg px-2.5 py-1 shadow-2xs">
          <Link2 className="w-3.5 h-3.5 text-sky-700 shrink-0" />
          <span
            dir="ltr"
            className="font-mono text-xs font-semibold text-slate-800 select-all truncate max-w-[210px] sm:max-w-xs"
          >
            aquageneral.online{currentRoute.path}
          </span>
          <button
            type="button"
            onClick={handleCopyUrl}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-sky-800 font-bold text-xs transition-colors border border-slate-200 cursor-pointer shrink-0"
            title="نسخ رابط الصفحة المباشر"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-700" />
                <span className="text-emerald-800">تم النسخ</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>نسخ الرابط</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onSelectProduct: (id: string) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onAddToCart,
}) => {
  const discount = calculateDiscountPercent(product.price, product.originalPrice);

  return (
    <article className="group bg-white rounded-2xl border border-slate-300/90 hover:border-sky-600 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
      {/* Product Image / Visual Header */}
      <div className="relative h-64 w-full border-b border-slate-200 overflow-hidden">
        <a
          href={`/product/${product.id}`}
          onClick={(e) => {
            e.preventDefault();
            onSelectProduct(product.id);
          }}
          className="block w-full h-full focus:outline-none"
        >
          <ProductVisual
            visualType={product.visualType}
            title={product.title}
            className="w-full h-full group-hover:scale-[1.02] transition-transform duration-200"
          />
        </a>

        {/* Top Left Discount / Feature Tag */}
        {product.badge ? (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-lg text-xs font-extrabold shadow-xs ${
              product.badgeTone === 'emerald'
                ? 'bg-emerald-700 text-white'
                : product.badgeTone === 'indigo'
                ? 'bg-indigo-800 text-white'
                : 'bg-sky-700 text-white'
            }`}
          >
            {product.badge}
          </span>
        ) : discount > 0 ? (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-xs font-extrabold bg-emerald-700 text-white shadow-xs tabular-nums">
            وفر {discount}%
          </span>
        ) : null}
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata row: Unboxed clean text with separator */}
          <div className="flex items-center justify-between gap-2 text-xs font-bold text-slate-600 mb-2">
            <span>{product.category} · {product.origin}</span>
            <span className="inline-flex items-center gap-1 text-amber-600 tabular-nums">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span className="text-slate-800 font-extrabold">{product.rating.toFixed(1)}</span>
              <span className="text-slate-600">({product.reviewsCount})</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-base font-extrabold text-slate-950 leading-snug mb-2 line-clamp-2 group-hover:text-sky-700 transition-colors">
            <a
              href={`/product/${product.id}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectProduct(product.id);
              }}
            >
              {product.title}
            </a>
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-700 leading-relaxed line-clamp-2 mb-3">
            {product.shortDescription}
          </p>

          {/* Key Features Preview (First 2 points) */}
          <ul className="space-y-1.5 mb-4 border-t border-slate-200/80 pt-3">
            {product.features.slice(0, 2).map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-800 font-medium">
                <Check className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-slate-200">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2 tabular-nums">
              <span className="text-xl font-black text-sky-800">
                {formatPriceEGP(product.price)} ج.م
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs font-bold text-slate-500 line-through">
                  {formatPriceEGP(product.originalPrice)} ج.م
                </span>
              )}
            </div>
            <span className="text-[11px] font-bold text-emerald-800">متوفر بالمخزون</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={`/product/${product.id}`}
              onClick={(e) => {
                e.preventDefault();
                onSelectProduct(product.id);
              }}
              className="py-2.5 px-3 rounded-xl border border-slate-300 hover:border-sky-600 text-slate-900 hover:text-sky-800 bg-slate-50 hover:bg-sky-50/60 text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>التفاصيل</span>
            </a>
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="py-2.5 px-3 rounded-xl bg-sky-700 hover:bg-sky-800 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap shadow-2xs"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>أضف للسلة</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1528] text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Bio */}
          <div>
            <AquaGeneralLogo dark />
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              شركة رائدة في مصر متخصصة في تقديم أفضل تكنولوجيا الفلاتر وأنظمة معالجة المياه لضمان مياه نقية وآمنة لكل أسرة ومنشأة صناعية.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                aria-label="تواصل عبر واتساب"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.salesPhone}`}
                aria-label="اتصال هاتفي بالمبيعات"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-sky-600 text-white flex items-center justify-center transition-colors border border-slate-700"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-extrabold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li>
                <a href="/" onClick={(e) => handleLink(e, '/')} className="hover:text-sky-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLink(e, '/about')} className="hover:text-sky-400 transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleLink(e, '/products')} className="hover:text-sky-400 transition-colors">
                  المنتجات ({formatPriceEGP(19)} منتج)
                </a>
              </li>
              <li>
                <a href="/offers" onClick={(e) => handleLink(e, '/offers')} className="hover:text-sky-400 transition-colors">
                  العروض والباقات
                </a>
              </li>
              <li>
                <a href="/projects" onClick={(e) => handleLink(e, '/projects')} className="hover:text-sky-400 transition-colors">
                  المحطات والمشاريع
                </a>
              </li>
              <li>
                <a href="/clients" onClick={(e) => handleLink(e, '/clients')} className="hover:text-sky-400 transition-colors">
                  سابقة الأعمال
                </a>
              </li>
              <li>
                <a href="/videos" onClick={(e) => handleLink(e, '/videos')} className="hover:text-sky-400 transition-colors">
                  مكتبة الفيديو
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink(e, '/contact')} className="hover:text-sky-400 transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-base font-extrabold text-white mb-4">خدماتنا</h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-300">
              <li>
                <a href="/services" onClick={(e) => handleLink(e, '/services')} className="hover:text-sky-400 transition-colors">
                  ضمان النقاء المكتوب (تعويض 5000 ج.م)
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLink(e, '/services')} className="hover:text-sky-400 transition-colors">
                  عقود صيانة سنوية
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleLink(e, '/products')} className="hover:text-sky-400 transition-colors">
                  قطع غيار أصلية
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLink(e, '/services')} className="hover:text-sky-400 transition-colors">
                  تحليل مياه مجاني
                </a>
              </li>
              <li>
                <a href="/services" onClick={(e) => handleLink(e, '/services')} className="hover:text-sky-400 transition-colors">
                  تركيب وتوصيل سريع
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink(e, '/contact')} className="hover:text-sky-400 transition-colors">
                  الدعم الفني 24/7
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base font-extrabold text-white mb-4">تواصل معنا</h3>
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_INFO.salesPhone}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-sky-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/40 text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-semibold">المبيعات وطلبات الأجهزة</div>
                  <div dir="ltr" className="text-sm font-extrabold text-white tabular-nums">
                    {COMPANY_INFO.salesPhoneFormatted}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_INFO.afterSalesPhone}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-sky-500 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-semibold">خدمة ما بعد البيع والصيانة</div>
                  <div dir="ltr" className="text-sm font-extrabold text-white tabular-nums">
                    {COMPANY_INFO.afterSalesPhoneFormatted}
                  </div>
                </div>
              </a>

              <p className="text-xs text-slate-300 font-medium">
                مواعيد العمل: {COMPANY_INFO.workingHours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>جميع الحقوق محفوظة. <a href="https://azagency.online/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">A.Z Agency</a> 2026 ©</p>
          <div className="flex items-center gap-4">
            <a href="/about" onClick={(e) => handleLink(e, '/about')} className="hover:text-white">
              سياسة الضمان والنقاء
            </a>
            <span>·</span>
            <a href="/contact" onClick={(e) => handleLink(e, '/contact')} className="hover:text-white">
              الفروع والتغطية الجغرافية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
