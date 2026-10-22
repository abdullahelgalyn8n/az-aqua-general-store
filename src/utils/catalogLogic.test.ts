import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseRoute,
  calculateDiscountPercent,
  filterAndSortProducts,
  addOrIncrementCartItem,
  updateCartItemQuantity,
  calculateCartSummary,
  recommendSystemByWaterProfile,
} from './catalogLogic';
import { PRODUCTS } from '../data/siteData';

test('parseRoute resolves all dedicated page URLs accurately', () => {
  assert.deepEqual(parseRoute('/'), { page: 'home', path: '/' });
  assert.deepEqual(parseRoute('/about'), { page: 'about', path: '/about' });
  assert.deepEqual(parseRoute('/products/'), { page: 'products', path: '/products' });
  assert.deepEqual(parseRoute('/offers'), { page: 'offers', path: '/offers' });
  assert.deepEqual(parseRoute('/projects'), { page: 'projects', path: '/projects' });
  assert.deepEqual(parseRoute('/clients'), { page: 'clients', path: '/clients' });
  assert.deepEqual(parseRoute('/services'), { page: 'services', path: '/services' });
  assert.deepEqual(parseRoute('/videos'), { page: 'videos', path: '/videos' });
  assert.deepEqual(parseRoute('/contact'), { page: 'contact', path: '/contact' });

  const prodRoute = parseRoute('/product/d31a8a14-f104-4219-aeb9-07016d8807da');
  assert.equal(prodRoute.page, 'product-detail');
  if (prodRoute.page === 'product-detail') {
    assert.equal(prodRoute.productId, 'd31a8a14-f104-4219-aeb9-07016d8807da');
  }
});

test('calculateDiscountPercent computes exact discount percentage', () => {
  assert.equal(calculateDiscountPercent(499, 750), 33);
  assert.equal(calculateDiscountPercent(9240, 11999), 23);
  assert.equal(calculateDiscountPercent(500, 500), 0);
});

test('filterAndSortProducts filters by category and search query and sorts', () => {
  const spareParts = filterAndSortProducts(PRODUCTS, { category: 'قطع غيار' });
  assert.ok(spareParts.length >= 6, 'Should have at least 6 spare parts');
  assert.ok(spareParts.every((p) => p.category === 'قطع غيار'));

  const centralSystems = filterAndSortProducts(PRODUCTS, { category: 'مركزي' });
  assert.ok(centralSystems.length >= 3, 'Should have central systems');

  const industrialSystems = filterAndSortProducts(PRODUCTS, { category: 'صناعي' });
  assert.ok(industrialSystems.length >= 3, 'Should have industrial systems');

  const tanklessSearch = filterAndSortProducts(PRODUCTS, { searchQuery: 'Tankless' });
  assert.equal(tanklessSearch.length, 1);
  assert.equal(tanklessSearch[0].id, 'zeno-tankless-400g');

  const priceSorted = filterAndSortProducts(PRODUCTS, {
    category: 'منزلي ومكاتب',
    sortBy: 'price-asc',
  });
  assert.ok(priceSorted[0].price <= priceSorted[priceSorted.length - 1].price);
});

test('cart operations and coupon calculations work accurately', () => {
  const item1 = PRODUCTS[0]; // 499 EGP
  let cart = addOrIncrementCartItem([], item1, 2);
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 2);

  cart = addOrIncrementCartItem(cart, item1, 1);
  assert.equal(cart[0].quantity, 3);

  const summaryWithAqu10 = calculateCartSummary(cart, 'AQUA10');
  assert.equal(summaryWithAqu10.totalItems, 3);
  assert.equal(summaryWithAqu10.subtotal, 499 * 3); // 1497
  assert.equal(summaryWithAqu10.couponDiscount, 150); // 10% rounded
  assert.equal(summaryWithAqu10.shippingFee, 0); // Free shipping >= 1000

  cart = updateCartItemQuantity(cart, item1.id, 0);
  assert.equal(cart.length, 0);
});

test('recommendSystemByWaterProfile returns appropriate system for TDS and usage', () => {
  const recHighTds = recommendSystemByWaterProfile(950, 'home', 'normal');
  assert.equal(recHighTds.recommendedProductId, 'titan-ro-7-heavy-duty');

  const recTightSpace = recommendSystemByWaterProfile(450, 'home', 'tight');
  assert.equal(recTightSpace.recommendedProductId, 'zeno-tankless-400g');

  const recIndustrial = recommendSystemByWaterProfile(3500, 'industrial');
  assert.equal(recIndustrial.recommendedProductId, 'industrial-well-20m3-day');
});
