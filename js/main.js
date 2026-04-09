/* =========================================================
   MAISON MODE – main.js
   ========================================================= */

/* ── Product catalogue data ─────────────────────────────────── */
const PRODUCTS = [
  {
    id: 1,
    name: 'Robe Midi Fleurie',
    category: 'femme',
    price: 89,
    oldPrice: null,
    badge: 'new',
    sizes: ['XS','S','M','L','XL'],
    image: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80',
    alt: 'Robe midi à motif floral',
  },
  {
    id: 2,
    name: 'Blazer Structuré',
    category: 'femme',
    price: 129,
    oldPrice: 189,
    badge: 'sale',
    sizes: ['XS','S','M','L'],
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
    alt: 'Blazer noir structuré pour femme',
  },
  {
    id: 3,
    name: 'Jean Slim Brut',
    category: 'homme',
    price: 79,
    oldPrice: null,
    badge: 'new',
    sizes: ['28','30','32','34','36'],
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
    alt: 'Jean slim brut pour homme',
  },
  {
    id: 4,
    name: 'Chemise Lin Blanc',
    category: 'homme',
    price: 65,
    oldPrice: 95,
    badge: 'sale',
    sizes: ['S','M','L','XL','XXL'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80',
    alt: 'Chemise en lin blanc',
  },
  {
    id: 5,
    name: 'Sac Cuir Caramel',
    category: 'accessoires',
    price: 149,
    oldPrice: null,
    badge: 'new',
    sizes: ['Unique'],
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    alt: 'Sac en cuir caramel',
  },
  {
    id: 6,
    name: 'Manteau Cachemire',
    category: 'femme',
    price: 249,
    oldPrice: 349,
    badge: 'sale',
    sizes: ['XS','S','M','L','XL'],
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80',
    alt: 'Manteau en cachemire beige',
  },
  {
    id: 7,
    name: 'Pull Merinos Navy',
    category: 'homme',
    price: 95,
    oldPrice: null,
    badge: 'new',
    sizes: ['S','M','L','XL'],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80',
    alt: 'Pull en laine mérinos bleu marine',
  },
  {
    id: 8,
    name: 'Ceinture Tressée',
    category: 'accessoires',
    price: 39,
    oldPrice: 59,
    badge: 'sale',
    sizes: ['S/M','L/XL'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    alt: 'Ceinture tressée en cuir',
  },
  {
    id: 9,
    name: 'Blouse Soie Ivoire',
    category: 'femme',
    price: 109,
    oldPrice: null,
    badge: null,
    sizes: ['XS','S','M','L'],
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&q=80',
    alt: 'Blouse en soie ivoire',
  },
  {
    id: 10,
    name: 'Chino Sable',
    category: 'homme',
    price: 69,
    oldPrice: null,
    badge: null,
    sizes: ['28','30','32','34','36','38'],
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80',
    alt: 'Pantalon chino sable',
  },
  {
    id: 11,
    name: 'Lunettes Tortoise',
    category: 'accessoires',
    price: 49,
    oldPrice: null,
    badge: 'new',
    sizes: ['Unique'],
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    alt: 'Lunettes de soleil écaille de tortue',
  },
  {
    id: 12,
    name: 'Jupe Plissée Terracotta',
    category: 'femme',
    price: 74,
    oldPrice: 99,
    badge: 'sale',
    sizes: ['XS','S','M','L','XL'],
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80',
    alt: 'Jupe plissée couleur terracotta',
  },
];

/* Number of cards to show initially */
const INITIAL_COUNT = 8;
let visibleCount = INITIAL_COUNT;
let activeFilter = 'all';

/* ── Cart state ────────────────────────────────────────────── */
const cart = [];

/* ── DOM helpers ────────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Notification bar ─────────────────────────────────────── */
function initNotifBar() {
  const bar   = $('#notifBar');
  const close = $('#notifClose');
  if (!bar || !close) return;
  close.addEventListener('click', () => bar.classList.add('hidden'));
}

/* ── Header scroll behaviour ──────────────────────────────── */
function initHeaderScroll() {
  const header = $('#mainHeader');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    const btn = $('#backToTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Back to top ──────────────────────────────────────────── */
function initBackToTop() {
  const btn = $('#backToTop');
  if (!btn) return;
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── Mobile hamburger ─────────────────────────────────────── */
function initHamburger() {
  const burger = $('#hamburger');
  const nav    = $('#mainNav');
  if (!burger || !nav) return;

  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open', !expanded);
    document.body.style.overflow = expanded ? '' : 'hidden';
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !nav.contains(e.target)) {
      burger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* ── Search bar ───────────────────────────────────────────── */
function initSearch() {
  const toggle = $('#searchToggle');
  const bar    = $('#searchBar');
  const close  = $('#searchClose');
  const input  = $('#searchInput');
  if (!toggle || !bar) return;

  const openSearch = () => {
    bar.classList.add('open');
    bar.setAttribute('aria-hidden', 'false');
    if (input) input.focus();
  };
  const closeSearch = () => {
    bar.classList.remove('open');
    bar.setAttribute('aria-hidden', 'true');
  };

  toggle.addEventListener('click', openSearch);
  if (close) close.addEventListener('click', closeSearch);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });
}

/* ── Hero Slideshow ───────────────────────────────────────── */
function initSlideshow() {
  const slides    = $$('.hero-slide');
  const dotsWrap  = $('#slideDots');
  const prevBtn   = $('#slidePrev');
  const nextBtn   = $('#slideNext');
  if (!slides.length || !dotsWrap) return;

  let current = 0;
  let timer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Aller à la diapositive ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const dots = $$('.slide-dot', dotsWrap);

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5500);
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  resetTimer();
}

/* ── Products ─────────────────────────────────────────────── */
function formatPrice(cents) {
  return cents.toFixed(2).replace('.', ',') + ' €';
}

function buildProductCard(product) {
  const badgeHtml = product.badge
    ? `<span class="product-badge badge-${product.badge}">${product.badge === 'new' ? 'Nouveau' : 'Solde'}</span>`
    : '';

  const priceHtml = product.oldPrice
    ? `<span class="product-price product-price-sale">${formatPrice(product.price)}</span>
       <span class="product-price-old">${formatPrice(product.oldPrice)}</span>`
    : `<span class="product-price">${formatPrice(product.price)}</span>`;

  const sizeBtns = product.sizes.map(s =>
    `<button class="size-btn" data-size="${s}" aria-label="Taille ${s}">${s}</button>`
  ).join('');

  const card = document.createElement('article');
  card.className = 'product-card';
  card.dataset.category = product.category;
  card.innerHTML = `
    <div class="product-card-img">
      <img src="${product.image}" alt="${product.alt}" loading="lazy" />
      ${badgeHtml}
      <button class="product-wish" data-id="${product.id}" aria-label="Ajouter aux favoris">♡</button>
      <div class="product-quick-add">
        <div class="size-options">${sizeBtns}</div>
      </div>
    </div>
    <div class="product-card-body">
      <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-prices">${priceHtml}</div>
      <button class="product-add-btn" data-id="${product.id}" aria-label="Ajouter ${product.name} au panier">
        Ajouter au panier
      </button>
    </div>
  `;

  // Wishlist toggle
  const wishBtn = card.querySelector('.product-wish');
  wishBtn.addEventListener('click', () => {
    const isActive = wishBtn.classList.toggle('active');
    wishBtn.textContent = isActive ? '♥' : '♡';
    showToast(isActive ? `${product.name} ajouté aux favoris` : `${product.name} retiré des favoris`);
  });

  // Size selection inside quick-add panel
  card.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  // Add to cart button
  const addBtn = card.querySelector('.product-add-btn');
  addBtn.addEventListener('click', () => {
    const selectedSize = card.querySelector('.size-btn.selected')?.dataset.size
      || product.sizes[0];
    addToCart(product, selectedSize);
  });

  return card;
}

function renderProducts() {
  const grid = $('#productsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  const toShow = filtered.slice(0, visibleCount);
  toShow.forEach(p => grid.appendChild(buildProductCard(p)));

  const loadMore = $('#loadMore');
  if (loadMore) {
    loadMore.style.display = visibleCount >= filtered.length ? 'none' : 'inline-flex';
  }
}

function initFilters() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      visibleCount = INITIAL_COUNT;
      renderProducts();
    });
  });

  const loadMore = $('#loadMore');
  if (loadMore) {
    loadMore.addEventListener('click', () => {
      visibleCount += 4;
      renderProducts();
    });
  }
}

/* ── Cart ─────────────────────────────────────────────────── */
function addToCart(product, size) {
  const existing = cart.find(i => i.id === product.id && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, size, qty: 1 });
  }
  updateCartUI();
  openCart();
  showToast(`${product.name} (${size}) ajouté au panier`);
}

function removeFromCart(id, size) {
  const idx = cart.findIndex(i => i.id === id && i.size === size);
  if (idx > -1) cart.splice(idx, 1);
  updateCartUI();
}

function changeQty(id, size, delta) {
  const item = cart.find(i => i.id === id && i.size === size);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id, size);
  else updateCartUI();
}

function updateCartUI() {
  const countEl = $('#cartCount');
  const totalEl = $('#cartTotal');
  const itemsEl = $('#cartItems');

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const totalAmt = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (countEl) {
    countEl.textContent = totalQty;
    countEl.classList.remove('bump');
    // Force reflow to restart animation
    void countEl.offsetWidth;
    if (totalQty > 0) countEl.classList.add('bump');
    setTimeout(() => countEl.classList.remove('bump'), 400);
  }

  if (totalEl) totalEl.textContent = formatPrice(totalAmt);

  if (itemsEl) {
    if (cart.length === 0) {
      itemsEl.innerHTML = '<p class="cart-empty">Votre panier est vide.</p>';
    } else {
      itemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.image}" alt="${item.alt}" loading="lazy" />
          <div class="cart-item-info">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-meta">Taille : ${item.size}</p>
            <div class="cart-item-actions">
              <button class="qty-btn" data-id="${item.id}" data-size="${item.size}" data-delta="-1" aria-label="Diminuer la quantité">−</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" data-id="${item.id}" data-size="${item.size}" data-delta="1" aria-label="Augmenter la quantité">+</button>
              <span class="cart-item-price">${formatPrice(item.price * item.qty)}</span>
              <button class="cart-item-remove" data-id="${item.id}" data-size="${item.size}" aria-label="Supprimer ${item.name} du panier">✕ Supprimer</button>
            </div>
          </div>
        </div>
      `).join('');

      // Bind cart item events
      itemsEl.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          changeQty(Number(btn.dataset.id), btn.dataset.size, Number(btn.dataset.delta));
        });
      });
      itemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
          removeFromCart(Number(btn.dataset.id), btn.dataset.size);
        });
      });
    }
  }
}

function openCart() {
  const drawer  = $('#cartDrawer');
  const overlay = $('#cartOverlay');
  if (!drawer || !overlay) return;
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const drawer  = $('#cartDrawer');
  const overlay = $('#cartOverlay');
  if (!drawer || !overlay) return;
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function initCart() {
  $('#cartBtn')?.addEventListener('click', openCart);
  $('#cartClose')?.addEventListener('click', closeCart);
  $('#cartOverlay')?.addEventListener('click', closeCart);
  $('#checkoutBtn')?.addEventListener('click', () => {
    showToast('Commande en cours de traitement…');
    closeCart();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCart(); });
  updateCartUI();
}

/* ── Newsletter ───────────────────────────────────────────── */
function initNewsletter() {
  const form = $('#newsletterForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      showToast('✓ Inscription réussie ! Votre code -10 % arrive dans votre boîte mail.');
      input.value = '';
    }
  });
}

/* ── Toast ────────────────────────────────────────────────── */
let toastTimeout;
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ── Active nav link on scroll ────────────────────────────── */
function initScrollSpy() {
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNotifBar();
  initHeaderScroll();
  initBackToTop();
  initHamburger();
  initSearch();
  initSlideshow();
  renderProducts();
  initFilters();
  initCart();
  initNewsletter();
  initScrollSpy();
});
