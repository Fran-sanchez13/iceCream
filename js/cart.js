const containerCards = document.getElementById("product-container");


function createProductStart() {
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
                <button class="btnSection">-</button>
                <span class="cantidad">0</span>
                <button class="btnSection">+</button>
            </div>
            `;
            containerCards.appendChild(newProduct);
            newProduct.querySelector('.btnSection').addEventListener('click', () => addCart(producto))
        });
    }
}



createProductStart();