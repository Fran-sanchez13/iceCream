const products = [
  // TORTAS
  {
    id: 1,
    name: 'Torta Matilda',
    price: 10000,
    image: 'assets/img/torta matilda.jpg',
    category: 'tortas',
    description: '🍰 Esta famosa torta de la icónica película Matilda (1996)',
    ingredients: [
      'Bizcochuelo de chocolate húmedo (doble capa)',
      'Ganache de chocolate negro suave y brillante',
      'Cacao amargo para un sabor profundo',
      'Toques de café o esencia de vainilla para realzar el sabor'
    ],
    category: "cakes"
  },
  {
    id: 2,
    name: 'Torta Red Velvet',
    price: 9000,
    image: 'assets/img/RedVelvet.jpg',
    category: 'tortas',
    description: '🍰 Una torta de color rojo intenso, suave y con un sabor único a cacao y vainilla.',
    ingredients: [
      'Bizcochuelo rojo aterciopelado con un toque de cacao',
      'Buttermilk (leche cortada) que le da humedad y suavidad',
      'Relleno y cobertura de crema de queso',
      'Un leve toque ácido que equilibra lo dulce'
    ],
    category: "cakes"
  },
  {
    id: 3,
    name: 'Torta Marquise',
    price: 8000,
    image: 'assets/img/marquise.jpg',
    category: 'tortas',
    description: '🍰 Una torta chocolatera, cremosa y sin harinas, ideal para quienes aman los postres intensos.',
    ingredients: [
      'Base cremosa de chocolate semi amargo',
      'Sin harina (textura densa y sedosa)',
      'Base crocante de galletitas o frutos secos (opcional)',
      'Cobertura de ganache o baño espejo de chocolate'
    ],
    category: "cakes"
  },
  {
    id: 4,
    name: 'Torta Rogel',
    price: 8900,
    image: 'assets/img/rogel.jpg',
    category: 'tortas',
    description: '🍰 Un clásico argentino, finísimo y crocante, lleno de capas y dulce de leche.',
    ingredients: [
      'Varias capas finas de masa crocante tipo hojaldre',
      'Relleno abundante de dulce de leche tradicional',
      'Cobertura de merengue italiano',
      'Toque de licor o esencia para perfumar (opcional)'
    ],
    category: "cakes"
  },

  // BATIDOS
  {
    id: 5,
    name: 'Batido de Frutilla',
    price: 1000,
    image: 'assets/img/batido-Frutilla.jpg',
    category: 'batidos',
    description: '🥤 Este famoso batido de frutilla contiene frutillas frescas.',
    ingredients: [
      'Frutillas frescas',
      'Leche (vaca o vegetal)',
      'Azúcar, miel, stevia u otro endulzante',
      'Hielo (si se desea frío)'
    ],
    category: "cakes"
  },
  {
    id: 6,
    name: 'Batido de Kiwi',
    price: 900,
    image: 'assets/img/batido-Kiwi.jpg',
    category: 'batidos',
    description: '🥤 Este famoso batido de kiwi contiene kiwis frescos.',
    ingredients: [
      'Kiwis frescos',
      'Leche (puede ser vegetal)',
      'Azúcar, miel, stevia u otro endulzante',
      'Hielo (si se desea frío)'
    ],
    category: "cakes"
  },
  {
    id: 7,
    name: 'Batido de Durazno',
    price: 800,
    image: 'assets/img/batido-Durazno.jpg',
    category: 'batidos',
    description: '🥤 Este famoso batido de durazno contiene duraznos frescos.',
    ingredients: [
      'Duraznos frescos',
      'Leche',
      'Azúcar, stevia u otro endulzante',
      'Hielo (si se desea frío)'
    ],
    category: "cakes"
  },

  // HELADOS
  {
    id: 8,
    name: 'Helado de Vainilla a la crema',
    price: 890,
    image: 'assets/img/helado-Vainilla.jpg',
    category: 'helados',
    description: '🍦 Cremoso y con un sabor auténtico a vainilla.',
    ingredients: [
      'Base de leche y crema',
      'Toques de vainilla'
    ],
    category: "cakes"
  },
  {
    id: 9,
    name: 'Helado de Chocolate',
    price: 1150,
    image: 'assets/img/helado-Chocolate.jpg',
    category: 'helados',
    description: '🍦 Cremoso y con un sabor auténtico a chocolate.',
    ingredients: [
      'Base de leche y crema',
      'Con chips de chocolate'
    ],
    category: "cakes"
  },
  {
    id: 10,
    name: 'Helado de Café',
    price: 1150,
    image: 'assets/img/helado-Cafe.jpg',
    category: 'helados',
    description: '🍦 Cremoso y con un sabor auténtico a café.',
    ingredients: [
      'Base de leche y crema',
      'Con café'
    ],
    category: "cakes"
  },
  {
    id: 11,
    name: 'Helado de Coco',
    price: 1150,
    image: 'assets/img/helado-Coco.jpg',
    category: 'helados',
    description: '🍦 Cremoso y con un sabor auténtico a coco.',
    ingredients: [
      'Base de leche y crema',
      'Con pedacitos de coco'
    ],
    category: "cakes"
  }
];


const cart = JSON.parse(localStorage.getItem("cart")) || [];

const renderProducts = (products, containerId, categoryTitle) => {
  const container = document.getElementById(containerId);
  const category = containerId.replace("products", "").toLowerCase();

  const filteredProducts = products.filter(p => p.category === category);

  container.innerHTML = `<h1><span>${categoryTitle}</span></h1>`;

  filteredProducts.forEach(product => {
    container.innerHTML += `
      <h2>${product.name}</h2>
      <div class="cakes">
        <div class="ingredientsList">
          <p>${product.description}</p><br>
          ${product.ingredients.map(i => `<li>${i}</li><br>`).join("")}
          <a href="#" class="btnCart" data-id="${product.id}">Comprar</a>
        </div>
        <img src="${product.image}" alt="${product.name}" class="imgCakes">
      </div>
    `;
  });
};

// Renderizamos todas las secciones
renderProducts(products, "productsCakes", "TORTAS!");
renderProducts(products, "productsBat", "BATIDOS!");
renderProducts(products, "productsIce", "HELADOS!");

// Lógica del carrito
const cartContainer = document.querySelector(".cart");
const updateLocalStorage = () => localStorage.setItem("cart", JSON.stringify(cart));

const renderCart = () => {
  const itemsContainer = cartContainer.querySelector(".cart-items") || document.createElement("div");
  itemsContainer.className = "cart-items";
  itemsContainer.innerHTML = "";

  cart.forEach(item => {
    itemsContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="item-info">
          <h3 class="item-title">${item.name}</h3>
          <p class="item-bid">Precio:</p>
          <span class="item-price">$${item.price}</span>
        </div>
        <div class="item-handler">
          <span class="quantity-handler down" data-id="${item.id}">-</span>
          <span class="item-quantity">${item.quantity}</span>
          <span class="quantity-handler up" data-id="${item.id}">+</span>
        </div>
      </div>
    `;
  });

  const clearBtn = document.createElement("button");
  clearBtn.textContent = "Vaciar Carrito";
  clearBtn.classList.add("clear-cart");
  clearBtn.addEventListener("click", () => {
    cart.length = 0;
    updateLocalStorage();
    renderCart();
  });

  itemsContainer.appendChild(clearBtn);
  if (!cartContainer.querySelector(".cart-items")) {
    cartContainer.appendChild(itemsContainer);
  }

  const totalContainer = document.querySelector(".cart-total span");
  totalContainer.textContent = `$${calcularTotal().toLocaleString()}`;
};

// Evento para agregar al carrito
document.addEventListener("click", e => {
  if (e.target.classList.contains("btnCart")) {
    e.preventDefault();
    const id = Number(e.target.dataset.id);
    const product = products.find(p => p.id === id);
    const itemInCart = cart.find(i => i.id === id);

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    updateLocalStorage();
    renderCart();
  }

  // Sumar / restar
  if (e.target.classList.contains("quantity-handler")) {
    const id = Number(e.target.dataset.id);
    const item = cart.find(p => p.id === id);
    if (!item) return;

    if (e.target.classList.contains("up")) {
      item.quantity++;
    } else if (e.target.classList.contains("down")) {
      item.quantity--;
      if (item.quantity <= 0) {
        const index = cart.findIndex(p => p.id === id);
        cart.splice(index, 1);
      }
    }

    updateLocalStorage();
    renderCart();
  }
});

// Inicializar el carrito
renderCart();


function calTotal(){
  return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
}
