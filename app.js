/**
 * LA NAVIDAD MÁGICA - TIENDA VIRTUAL DE MUÑEQUERÍA ARTESANAL
 * Lógica en JavaScript puro (Vanilla JS)
 */

// ==========================================
// 1. CONFIGURACIÓN EDITABLE DEL NEGOCIO
// ==========================================
const STORE_CONFIG = {
  businessName: "La Navidad Mágica",
  // Modifica aquí tu número con indicativo internacional (57 para Colombia)
  whatsappNumber: "573203515351",
  currency: "COP",
  currencySymbol: "$",
  location: "Taller Artesanal - Bogotá, Colombia"
};

// ==========================================
// 2. CATÁLOGO DE PRODUCTOS (10 CATEGORÍAS)
// ==========================================
const PRODUCTS = [
  {
    id: "prod-1",
    name: "Papá Noel Clásico Tradicional",
    category: "Papá Noel",
    price: 170000,
    size: "60 cm de alto",
    materials: "Paño lency, terciopelo rojo, barba sintética suave y detalles dorados",
    availability: "En stock (5 unidades)",
    description: "Figura tradicional de Santa Claus con traje de terciopelo bordado a mano, morral de regalos y campana metálica.",
    image: "imagenesnavidad/papanoel.png",
  },
  {
    id: "prod-2",
    name: "Abuelos Navidad",
    category: "Abuelos Navidad",
    price: 100000,
    size: "70 cm de alto",
    materials: "Elaborados en Fliss navideños, Barba en peluche largo, cabello de angel fino",
    availability: "En stock (4 unidades)",
    description: "Abuelos Navideños para decoracion colgante hechos a mano.",
    image: "imagenesnavidad/abuelos.jpg"
  },
  {
    id: "prod-3",
    name: "Pareja Navideña Enamorada",
    category: "Parejas navideñas",
    price: 130000,
    size: "40 cm cada uno",
    materials: "Paño lency, , detalles en fleece y bufandas tejidas a mano",
    availability: "Disponible sobre pedido",
    description: "Set de dos figuras de Papá y Mamá Noel vestidos en tonos rojo y verde pino para sala o chimenea.",
    image: "imagenesnavidad/pareja.jpg"
  },
  {
    id: "prod-4",
    name: "Duende Navideño Travieso",
    category: "Duendes navideños",
    price: 150000,
    size: "50 cm de alto",
    materials: "Velvetin, paño lency, estructura en madera",
    availability: "En stock (8 unidades)",
    description: "Duendecillo  con orejas puntiagudas, botitas en lame y gorro tradicional, para ubicar en un lugar especialde de la casa.",
    image: "imagenesnavidad/duende.jpg"
  },
  {
    id: "prod-5",
    name: "Angel Luminoso",
    category: "Angel Luminoso",
    price: 250000,
    size: "80 cm de alto",
    materials: "Paño lency, suavetina estampada",
    availability: "En stock (6 unidades)",
    description: "Elaborado a mano en su totalidad, mas de 200 plumas en paño y luces llamativas",
    image: "imagenesnavidad/angel.jpg"
  },
  {
    id: "prod-6",
    name: "Trio Navidad",
    category: "Trio Navidad",
    price: 90000,
    size: "35 cm de alto",
    materials: "Peluche de pelo corto blanco, sombrero  en fieltro y nariz de zanahoria moldeada",
    availability: "En stock (10 unidades)",
    description: "Muñeco de nieve alegre con cuchara, Papa Noel con cuchara y Hombre Galleta con cuchara.",
    image: "imagenesnavidad/galletas3.png"
  },
  {
    id: "prod-7",
    name: "Faroles luminosos",
    category: "Faroles",
    price: 40000,
    size: "30 cm de alto",
    materials: "Cartonaje, fliss y luces led",
    availability: "En stock (3 unidades)",
    description: "Farloes luminosos por se parado, elaborados a mano en un estilo artesanal.",
    image: "imagenesnavidad/farol.jpg"
  },
  {
    id: "prod-8",
    name: "Pie de Arbol",
    category: "Pie de Arbol",
    price: 180000,
    size: "1.50 mt. diámetro",
    materials: "Paño lency y micro fibra",
    availability: "En stock (4 unidades)",
    description: "Pie de arbol de 1.50mt para decorar el interior del hogar",
    image: "imagenesnavidad/pie.jpg"
  },
  {
    id: "prod-9",
    name: "Cuadro Papa Noel",
    category: "Cuadro Papa Noel",
    price: 180000,
    size: "40 x 40 cm de diámetro",
    materials: "Paño lency, Recuadro en madera, base",
    availability: "En stock (5 unidades)",
    description: "Cuadro elaborado en una base de madera en paño lency, especial para decoracion de salas",
    image: "imagenesnavidad/cuadropapa.jpg"
  },
  {
    id: "prod-10",
    name: "Ancheta",
    category: "Ancheta",
    price: 60000,
    size: "40 x 40 cm de diámetro",
    materials: "Paño lency, fliss, cordon dorado",
    availability: "En stock (5 unidades)",
    description: "Son anchetas para colocar y llevar vinos y galletas para regalar como un elegante detalle",
    image: "imagenesnavidad/ancheta.jpg"
  },
  {
    id: "prod-11",
    name: "Pesebre",
    category: "Pesebre",
    price: 250000,
    size: "9 figuras: 5 de 25 cm y 4 de 15 cm de diámetro",
    materials: "Paño lency en su totalidad",
    availability: "En stock (5 unidades)",
    description: "9 figuras representativas del pesebre elaboradas en paño lency totalmente a mano, para decorar tu hogar",
    image: "imagenesnavidad/pesebre.jpg"
  },
  {
    id: "prod-12",
    name: "Familia Pesebre",
    category: "Familia Pesebre",
    price: 80000,
    size: "los padres de 30 cm el burrito de 15 cm, las obejas de 4 cm y el bebe",
    materials: "Paño lency,carreta en cartonaje, 6 figuras y una carreta",
    availability: "Bajo encargo (3 a 5 días de elaboración)",
    description: "Es una famila de padre e hojo representativo del pesebre tradicional muy especial para la epoca de novenas",
    image: "imagenesnavidad/famili.jpg"
  }
  
];

// ==========================================
// 3. ESTADO DE LA APLICACIÓN (CARRITO)
// ==========================================
let cart = JSON.parse(localStorage.getItem("navidad_magica_cart") || "[]");
let activeCategory = "Todas";
let currentSearch = "";

// Elementos DOM
const productsGrid = document.getElementById("products-grid");
const categoryFilters = document.getElementById("category-filters");
const searchInput = document.getElementById("search-input");
const cartBtn = document.getElementById("cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartCounter = document.getElementById("cart-counter");
const drawerItemCount = document.getElementById("drawer-item-count");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalPrice = document.getElementById("cart-total-price");
const startCheckoutBtn = document.getElementById("start-checkout-btn");
const checkoutSection = document.getElementById("checkout-section");
const cartFooter = document.getElementById("cart-footer");
const backToCartItemsBtn = document.getElementById("back-to-cart-items-btn");
const orderForm = document.getElementById("order-form");
const productModal = document.getElementById("product-modal");
const modalClose = document.getElementById("modal-close");
const modalProductContent = document.getElementById("modal-product-content");
const customDollForm = document.getElementById("custom-doll-form");
const floatingWhatsapp = document.getElementById("floating-whatsapp");
const toast = document.getElementById("toast");

// Formateo de moneda colombiana
function formatCurrency(amount) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(amount);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function saveCart() {
  localStorage.setItem("navidad_magica_cart", JSON.stringify(cart));
  updateCartUI();
}

// Renderizado de Categorías
function renderCategories() {
  const categories = ["Todas", ...new Set(PRODUCTS.map(p => p.category))];
  categoryFilters.innerHTML = categories
    .map(cat => `
      <button class="filter-btn ${cat === activeCategory ? "active" : ""}" data-category="${cat}">
        ${cat}
      </button>
    `).join("");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts();
    });
  });
}

// Renderizado de Productos
function renderProducts() {
  const filtered = PRODUCTS.filter(prod => {
    const matchesCat = activeCategory === "Todas" || prod.category === activeCategory;
    const matchesSearch = prod.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          prod.description.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--color-text-muted);">
        <p style="font-size: 2rem;">❄️</p>
        <p>No encontramos muñecos que coincidan con tu búsqueda.</p>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(prod => `
    <article class="product-card" data-id="${prod.id}">
      <div class="product-image-wrap" onclick="openProductModal('${prod.id}')">
        <span class="product-tag">Artesanal</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
      </div>
      <div class="product-info">
        <span class="product-category">${prod.category}</span>
        <h3 class="product-title" onclick="openProductModal('${prod.id}')">${prod.name}</h3>
        <p class="product-desc">${prod.description}</p>
        <div class="product-bottom">
          <span class="product-price">${formatCurrency(prod.price)}</span>
          <button class="add-cart-btn" onclick="addToCart('${prod.id}', 1)" title="Agregar al carrito">
            🛒
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Carrito
function addToCart(productId, quantity = 1, customization = "") {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId && item.customization === customization);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      customization: customization
    });
  }

  saveCart();
  showToast(`¡${product.name} agregado al carrito! 🎄`);
}

function updateCartQuantity(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalMoney = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCounter.textContent = totalItems;
  drawerItemCount.textContent = `${totalItems} ${totalItems === 1 ? "artículo" : "artículos"}`;
  cartTotalPrice.textContent = formatCurrency(totalMoney);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-msg">
        <div class="empty-cart-icon">🧺</div>
        <p>Tu carrito está vacío.</p>
        <p><small>¡Elige tus muñecos navideños favoritos y agrégalos aquí!</small></p>
      </div>
    `;
    startCheckoutBtn.disabled = true;
    startCheckoutBtn.style.opacity = "0.5";
  } else {
    startCheckoutBtn.disabled = false;
    startCheckoutBtn.style.opacity = "1";
    cartItemsContainer.innerHTML = cart.map((item, idx) => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          ${item.customization ? `<small style="color:var(--color-gold-hover); display:block;">Nota: ${item.customization}</small>` : ""}
          <div class="cart-item-price">${formatCurrency(item.price)}</div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQuantity(${idx}, -1)">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity(${idx}, 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${idx})" title="Eliminar">🗑️</button>
      </div>
    `).join("");
  }
}

// Modal Detalle
function openProductModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  modalProductContent.innerHTML = `
    <div class="modal-detail-grid">
      <div class="modal-gallery">
        <img src="${prod.image}" alt="${prod.name}">
      </div>
      <div>
        <span class="product-category">${prod.category}</span>
        <h2 style="font-family: var(--font-serif); color: var(--color-pine); font-size: 1.6rem; margin-bottom: 8px;">
          ${prod.name}
        </h2>
        <div style="font-size: 1.5rem; font-weight: 700; color: var(--color-red-dark); margin-bottom: 12px;">
          ${formatCurrency(prod.price)}
        </div>
        <p style="font-size: 0.95rem; color: var(--color-text-muted); margin-bottom: 16px;">
          ${prod.description}
        </p>

        <ul class="modal-meta-list">
          <li><strong>📏 Tamaño:</strong> ${prod.size}</li>
          <li><strong>🧵 Materiales:</strong> ${prod.materials}</li>
          <li><strong>📦 Disponibilidad:</strong> ${prod.availability}</li>
        </ul>

        <div class="form-group" style="margin-top: 14px;">
          <label for="modal-customization">Personalización especial (opcional):</label>
          <input type="text" id="modal-customization" placeholder="Ej: Cambiar color de bufanda a dorado...">
        </div>

        <div style="display: flex; gap: 10px; align-items: center; margin-top: 20px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <label for="modal-qty" style="font-weight: 600; font-size: 0.9rem;">Cantidad:</label>
            <input type="number" id="modal-qty" value="1" min="1" max="10" style="width: 60px; padding: 6px; text-align: center; border-radius: 6px; border: 1px solid var(--color-border);">
          </div>
          <button id="modal-add-btn" class="btn btn-primary" style="flex: 1;">
            AGREGAR AL CARRITO 🛒
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("modal-add-btn").addEventListener("click", () => {
    const qty = parseInt(document.getElementById("modal-qty").value) || 1;
    const customText = document.getElementById("modal-customization").value.trim();
    addToCart(prod.id, qty, customText);
    closeProductModal();
    cartDrawer.classList.add("open");
  });

  productModal.classList.add("active");
}

function closeProductModal() {
  productModal.classList.remove("active");
}

// Pedido WhatsApp
function generateOrderNumber() {
  const random = Math.floor(1000 + Math.random() * 9000);
  return `NAV-${new Date().getFullYear()}-${random}`;
}

function sendOrderToWhatsApp(e) {
  e.preventDefault();

  if (cart.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }

  const orderNumber = generateOrderNumber();
  const name = document.getElementById("order-name").value.trim();
  const phone = document.getElementById("order-phone").value.trim();
  const city = document.getElementById("order-city").value.trim();
  const address = document.getElementById("order-address").value.trim();
  const deliveryMethod = document.getElementById("order-delivery-method").value;
  const deliveryDate = document.getElementById("order-date").value || "Lo antes posible";
  const notes = document.getElementById("order-notes").value.trim();

  const totalMoney = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  let message = `🎅 *¡NUEVO PEDIDO EN NOHORA CREACIONES!* 🎄\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `📌 *Pedido:* ${orderNumber}\n`;
  message += `👤 *Cliente:* ${name}\n`;
  message += `📞 *Teléfono:* ${phone}\n`;
  message += `📍 *Ciudad:* ${city}\n`;
  message += `🏠 *Dirección:* ${address}\n`;
  message += `🚚 *Entrega:* ${deliveryMethod}\n`;
  message += `📅 *Fecha deseada:* ${deliveryDate}\n`;
  if (notes) {
    message += `📝 *Observaciones:* ${notes}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🛒 *PRODUCTOS SOLICITADOS:*\n`;

  cart.forEach((item, index) => {
    message += `${index + 1}. *${item.name}* x${item.quantity}\n`;
    if (item.customization) {
      message += `   ↳ _Nota: ${item.customization}_\n`;
    }
    message += `   ↳ Subtotal: ${formatCurrency(item.price * item.quantity)}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *TOTAL A PAGAR:* ${formatCurrency(totalMoney)}\n\n`;
  message += `_¡Quedo atento a la confirmación de disponibilidad y datos de pago!_`;

  const encodedUrl = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;

  cart = [];
  saveCart();
  cartDrawer.classList.remove("open");
  orderForm.reset();
  showCartView();

  window.open(encodedUrl, "_blank");
  showToast(`¡Pedido ${orderNumber} preparado con éxito! Redirigiendo a WhatsApp...`);
}

function showCheckoutView() {
  cartItemsContainer.style.display = "none";
  cartFooter.style.display = "none";
  checkoutSection.classList.remove("hidden");
}

function showCartView() {
  cartItemsContainer.style.display = "flex";
  cartFooter.style.display = "block";
  checkoutSection.classList.add("hidden");
}

// Nieve animada
function initSnowfall() {
  const container = document.getElementById("snow-container");
  const snowflakeChars = ["❄", "❅", "❆", "•"];
  const flakeCount = 35;

  for (let i = 0; i < flakeCount; i++) {
    const flake = document.createElement("div");
    flake.className = "snowflake";
    flake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.animationDuration = `${5 + Math.random() * 7}s`;
    flake.style.animationDelay = `${Math.random() * 5}s`;
    flake.style.fontSize = `${10 + Math.random() * 16}px`;
    flake.style.opacity = `${0.3 + Math.random() * 0.7}`;
    container.appendChild(flake);
  }
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initSnowfall();
  renderCategories();
  renderProducts();
  updateCartUI();

  floatingWhatsapp.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent("¡Hola! Me gustaría consultar sobre sus muñecos navideños artesanales.")}`;

  searchInput.addEventListener("input", e => {
    currentSearch = e.target.value;
    renderProducts();
  });

  cartBtn.addEventListener("click", () => {
    showCartView();
    cartDrawer.classList.add("open");
  });

  cartCloseBtn.addEventListener("click", () => {
    cartDrawer.classList.remove("open");
  });

  startCheckoutBtn.addEventListener("click", () => {
    if (cart.length > 0) showCheckoutView();
  });

  backToCartItemsBtn.addEventListener("click", showCartView);
  orderForm.addEventListener("submit", sendOrderToWhatsApp);

  modalClose.addEventListener("click", closeProductModal);
  productModal.addEventListener("click", e => {
    if (e.target === productModal) closeProductModal();
  });

  customDollForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("custom-name").value.trim();
    const phone = document.getElementById("custom-phone").value.trim();
    const desc = document.getElementById("custom-description").value.trim();

    let msg = `✨ *SOLICITUD DE DISEÑO PERSONALIZADO* ✨\n\n`;
    msg += `👤 *Cliente:* ${name}\n`;
    msg += `📞 *Teléfono:* ${phone}\n`;
    msg += `🎨 *Idea del muñeco:* ${desc}\n\n`;
    msg += `_Hola, me gustaría cotizar este muñeco personalizado artesanalmente._`;

    const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    customDollForm.reset();
    showToast("¡Solicitud enviada a WhatsApp! 🎅");
  });
});
