//variables
const cakesContainer = document.getElementById("cakes");
const smoothiesContainer = document.getElementById("smoothies");
const iceCreamContainer = document.getElementById("iceCream")

//array
const cakes = [
    {
        nombre: "Red Velvet",
        imagen: "assets/img/RedVelvet.jpg",
        alt: "Red Velvet"
    },
    {
        nombre: "Marquise",
        imagen: "assets/img/marquise.jpg",
        alt: "Marquise"
    },
    {
        nombre: "Rogel",
        imagen: "assets/img/rogel.jpg",
        alt: "Rogel"
    },
    {
        nombre: "Matilda",
        imagen: "assets/img/torta matilda.jpg",
        alt: "Matilda"
    }
];


const smothies = [
    {
        nombre: "Batido de durazno",
        imagen: "assets/img/batido-Durazno.jpg",
        alt: "Batido de durazno"
    },
    {
        nombre: "Batido de frutilla",
        imagen: "assets/img/batido-Frutilla.jpg",
        alt: "Batido de frutilla"
    },
    {
        nombre: "batido de kiwi",
        imagen: "assets/img/batido-Kiwi.jpg",
        alt: "Batido de kiwi"
    },
    {
        nombre:"Batido de sandia",
        imagen: "assets/img/batido-Sandia.jpg",
        alt: "Batido de sandia"
    }
];

const iceCream = [
    {
        nombre: "Helado de Cafe",
        imagen: "assets/img/helado-Cafe.jpg",
        alt: "Helado de cafe"
    },
    {
        nombre: "Helado de chocolate",
        imagen: "assets/img/helado-Chocolate.jpg",
        alt: "Helado de Chocolate"
    },
    {
        nombre: "Helado de coco",
        imagen: "assets/img/helado-Coco.jpg",
        alt: "Helado de coco"
    },
    {
        nombre: "Helado de vainilla",
        imagen: "assets/img/helado-Vainilla.jpg",
        alt: "Helado de vainilla"
    }
];

let carrito = [];

function renderProducts(lista, containerId) {
    const container = document.getElementById(containerId);
    lista.forEach(product => {
        container.innerHTML +=`
        <div class="cardInfo">
          <h3 class="titleInfo">${product.nombre}</h3>
          <img class="imgCardsInfo" src="${product.imagen}" alt="${product.alt}">
          <button class="btnSection">Comprar</button>
          </div>
        `;
    });
    const botons = container.querySelectorAll(".btnSection");
    botons.forEach(boton => {
        boton.addEventListener("click", () => {
            const nameProduct = boton.getAttribute("data-nombre");
            const product = lista.find(p => p.nombre === nameProduct);
            agregarAlCarrito(product);
        });
    });
}


function agregarAlCarrito(product){
    carrito.push(product);
    console.log("Carrito:", carrito);
    
}

renderProducts(cakes, "cakes");
renderProducts(smothies, "smoothies");
renderProducts(iceCream, "iceCream");
