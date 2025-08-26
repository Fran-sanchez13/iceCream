function addCart(producto){
    const memoria = JSON.parse(localStorage.getItem("products"));
    console.log(memoria);
    if(!memoria){
        const nuevoProducto = getNewProductMemory(producto);
        localStorage.setItem("products", JSON.stringify([nuevoProducto]));
    } else{
        const indexProduct = memoria.findIndex(products => products.id === producto.id);
        console.log(indexProduct);
        const newMemory = memoria;
        if(indexProduct === -1){
            newMemory.push(getNewProductMemory(producto))
        } else{
            newMemory[indexProduct].cantidad ++;
        }
            localStorage.setItem("products", JSON.stringify(newMemory));
    }
}

// toma el producto, le agrega 1 y lo devuelve
function getNewProductMemory(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}