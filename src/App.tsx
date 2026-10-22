/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  PRODUCTS,
  SPECIAL_OFFERS,
  Product,
  ProductCategory,
  VideoItem,
} from './data/siteData';
import {
  parseRoute,
  PageRoute,
  CartItem,
  addOrIncrementCartItem,
  updateCartItemQuantity,
} from './utils/catalogLogic';
import { Header, PageUrlBar, Footer } from './components/LayoutComponents';
import { HomePage, AboutPage } from './pages/HomeAndAboutPages';
import {
  ProductsPage,
  ProductDetailPage,
  OffersPage,
} from './pages/ProductsAndDetailPages';
import { ProjectsPage, ClientsPage } from './pages/ProjectsAndClientsPages';
import {
  ServicesPage,
  VideosPage,
  ContactPage,
} from './pages/ServicesVideosContactPages';
import {
  CartDrawer,
  LoginModal,
  MaintenanceBookingModal,
  VideoPlayerModal,
} from './components/InteractiveModals';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    parseRoute(typeof window !== 'undefined' ? window.location.pathname : '/')
  );
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('الكل');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ name: string; phone: string } | null>(null);
  const [maintenanceModal, setMaintenanceModal] = useState<{
    open: boolean;
    service?: string;
  }>({ open: false });
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(parseRoute(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const navigateTo = (path: string, category?: ProductCategory) => {
    if (category) {
      setSelectedCategory(category);
    }
    if (typeof window !== 'undefined' && window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(parseRoute(path));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (productId: string) => {
    navigateTo(`/product/${productId}`);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => addOrIncrementCartItem(prev, product, quantity));
    showToast(`تمت إضافة "${product.title}" إلى سلة المشتريات`);
  };

  const handleBuyNow = (product: Product, quantity: number = 1) => {
    setCart((prev) => addOrIncrementCartItem(prev, product, quantity));
    setCartOpen(true);
  };

  const handleAddOfferToCart = (offerId: string) => {
    const offer = SPECIAL_OFFERS.find((o) => o.id === offerId);
    if (!offer) return;
    setCart((prev) =>
      addOrIncrementCartItem(
        prev,
        {
          id: offer.id,
          title: offer.title,
          price: offer.price,
          originalPrice: offer.originalPrice,
          category: 'عرض خاص',
        },
        1
      )
    );
    setCartOpen(true);
  };

  const handleUpdateCartQty = (productId: string, newQty: number) => {
    setCart((prev) => updateCartItemQuantity(prev, productId, newQty));
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Determine current page title & breadcrumb for PageUrlBar
  const getPageMeta = (): {
    title: string;
    parent?: { label: string; path: string };
    activeProduct?: Product;
  } => {
    switch (currentRoute.page) {
      case 'home':
        return { title: 'الرئيسية' };
      case 'about':
        return { title: 'من نحن' };
      case 'products':
        return { title: 'المنتجات' };
      case 'product-detail': {
        const found =
          PRODUCTS.find(
            (p) =>
              p.id === currentRoute.productId || p.slug === currentRoute.productId
          ) || PRODUCTS[0];
        return {
          title: found.title,
          parent: { label: 'المنتجات', path: '/products' },
          activeProduct: found,
        };
      }
      case 'offers':
        return { title: 'العروض والباقات' };
      case 'projects':
        return { title: 'المحطات والمشاريع' };
      case 'clients':
        return { title: 'سابقة الأعمال' };
      case 'services':
        return { title: 'الخدمات' };
      case 'videos':
        return { title: 'مكتبة الفيديو' };
      case 'contact':
        return { title: 'اتصل بنا' };
      default:
        return { title: 'الرئيسية' };
    }
  };

  const pageMeta = getPageMeta();

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Navigation Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={(path) => navigateTo(path)}
        cartCount={totalCartItems}
        onOpenCart={() => setCartOpen(true)}
        currentUser={currentUser}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {/* Dedicated Page URL & Breadcrumb Bar */}
      <PageUrlBar
        currentRoute={currentRoute}
        pageTitle={pageMeta.title}
        parentCrumb={pageMeta.parent}
        onNavigate={(path) => navigateTo(path)}
      />

      {/* Toast Feedback Banner */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-5 left-5 z-50 bg-slate-950 text-white px-5 py-3 rounded-2xl shadow-xl border border-sky-500 flex items-center gap-3 text-xs sm:text-sm font-extrabold"
        >
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            className="px-3 py-1 rounded-lg bg-sky-500 text-slate-950 font-black text-xs cursor-pointer"
          >
            عرض السلة
          </button>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {currentRoute.page === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onOpenVideo={(vid) => setActiveVideo(vid)}
          />
        )}

        {currentRoute.page === 'about' && <AboutPage onNavigate={navigateTo} />}

        {currentRoute.page === 'products' && (
          <ProductsPage
            initialCategory={selectedCategory}
            onSelectCategory={(cat) => setSelectedCategory(cat)}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onNavigate={navigateTo}
            onOpenMaintenanceModal={() =>
              setMaintenanceModal({ open: true, service: 'صيانة جميع ماركات الفلاتر' })
            }
          />
        )}

        {currentRoute.page === 'product-detail' && pageMeta.activeProduct && (
          <ProductDetailPage
            product={pageMeta.activeProduct}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onSelectProduct={handleSelectProduct}
            onSelectCategory={(cat) => navigateTo('/products', cat)}
            currentUser={currentUser}
            onOpenLogin={() => setLoginOpen(true)}
          />
        )}

        {currentRoute.page === 'offers' && (
          <OffersPage
            onAddOfferToCart={handleAddOfferToCart}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentRoute.page === 'projects' && (
          <ProjectsPage
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onAddToCart={(p) => handleAddToCart(p, 1)}
          />
        )}

        {currentRoute.page === 'clients' && (
          <ClientsPage
            onNavigate={navigateTo}
            onOpenMaintenanceModal={() =>
              setMaintenanceModal({ open: true, service: 'حجز موعد صيانة دورية' })
            }
          />
        )}

        {currentRoute.page === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenMaintenanceModal={(srv) =>
              setMaintenanceModal({ open: true, service: srv })
            }
          />
        )}

        {currentRoute.page === 'videos' && (
          <VideosPage onOpenVideo={(vid) => setActiveVideo(vid)} />
        )}

        {currentRoute.page === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={(path) => navigateTo(path)} />

      {/* Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateCartQty}
        onClearCart={() => setCart([])}
        onSelectProduct={handleSelectProduct}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        currentUser={currentUser}
        onLoginSuccess={(u) => {
          setCurrentUser(u);
          showToast(`مرحباً بك يا ${u.name}`);
        }}
        onLogout={() => {
          setCurrentUser(null);
          showToast('تم تسجيل الخروج بنجاح');
        }}
      />

      <MaintenanceBookingModal
        isOpen={maintenanceModal.open}
        defaultService={maintenanceModal.service}
        onClose={() => setMaintenanceModal({ open: false })}
      />

      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        onNavigateToProducts={() => navigateTo('/products')}
      />
    </div>
  );
}
