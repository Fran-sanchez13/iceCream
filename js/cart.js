const containerCards = document.getElementById("product-container");
const unidadesElement = document.getElementById("unidades");
const priceElement = document.getElementById("precio");



function createProductStart() {
    containerCards.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("products"));
    console.log(productos);
    if (productos && productos.length > 0) {

        productos.forEach(producto => {
            const newProduct = document.createElement("div");
            newProduct.classList = "cardProduct";
            newProduct.innerHTML = `
            <h3 class="titleInfo">${producto.nombre}</h3>
            <img class="imgCardsInfo" src="./assets/img/${producto.id}.jpg">
            <p class="price">$${producto.precio}</p>
            <div>
                <button class="btnSection btnRestar">-</button>
                <span class="cantidad">${producto.cantidad}</span>
                <button class="btnSection btnSumar">+</button>
            </div>
            `;
            containerCards.appendChild(newProduct);
            const btnRestar = newProduct.querySelector('.btnRestar');
            const btnSumar = newProduct.querySelector('.btnSumar');

            btnSumar.addEventListener('click', (e) => {
                const countElement = e.target.parentElement.getElementsByTagName("span")[0];
                countElement.innerText = addCart(producto);
                updateTotals();
            });
            btnRestar.addEventListener('click', (e) => {
                const countElement = e.target.parentElement.getElementsByTagName("span")[0];
                countElement.innerText = restarCart(producto);
                updateTotals();
            });


        });
    }
}



createProductStart();
updateTotals();

function updateTotals(){
    const productos = JSON.parse(localStorage.getItem("products"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length>0){
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        priceElement.innerText = precio;
    }
}