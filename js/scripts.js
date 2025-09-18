const containerCards = document.getElementById("product-container");


function createProductStart (productos) {
    productos.forEach(producto => {
        const newProduct = document.createElement("div");
        newProduct.classList = "cardProduct";
        newProduct.innerHTML = `
        <h3 class="titleInfo">${producto.nombre}</h3>
        <img class="imgCardsInfo" src="./assets/img/${producto.id}.jpg">
        <p class="price">$${producto.precio}</p>
        <button class="btnSection">Comprar</button>
        `;
        containerCards.appendChild(newProduct);
        newProduct.querySelector('.btnSection').addEventListener('click', () => addCart(producto));
    });
}



createProductStart(products);