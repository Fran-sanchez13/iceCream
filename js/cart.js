const containerCards = document.getElementById("product-container");


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
                <span class="cantidad">0</span>
                <button class="btnSection btnSumar">+</button>
            </div>
            `;
            containerCards.appendChild(newProduct);
            const btnRestar = newProduct.querySelector('.btnRestar');
            const btnSumar = newProduct.querySelector('.btnSumar');

            btnSumar.addEventListener('click', (e) => {
            addCart(producto);
                const countElement = e.target.parentElement.getElementsByTagName("span")[0];
                countElement.innerText = 2;
            });

            btnRestar.addEventListener('click', (e) => restarCart(producto));


        });
    }
}



createProductStart();