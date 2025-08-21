function addCart(producto){
    const memoria = JSON.parse(localStorage.getItem("products"));
    console.log(memoria);
    if(!memoria){
        const newProduct = getNewProductMemory(producto);
        newProduct.cantidad = 1;
        localStorage.setItem("products", JSON.stringify([newProduct]));
    } else{
        const startProduct = memoria.findIndex(producto => producto.id ==producto.id)
        console.log(startProduct);
        if(startProduct === -1){
            const newMemoria = memoria;
            newMemoria.push(getNewProductMemory(producto))
            localStorage.setItem("products", JSON.stringify(newMemoria));
        }
        
    }
    
}


function getNewProductMemory(producto){
    const newPoduct = producto;
    newPoduct.cantidad = 1;
    return newPoduct;
}