function addCart(producto){
    const memoria = JSON.parse(localStorage.getItem("products"));
    console.log(memoria);
    let count = 0;

    if(!memoria){
        const nuevoProducto = getNewProductMemory(producto);
        localStorage.setItem("products", JSON.stringify([nuevoProducto]));
        count = 1;
    } else{
        const indexProduct = memoria.findIndex(products => products.id === producto.id);
        console.log(indexProduct);
        const newMemory = memoria;
        if(indexProduct === -1){
            newMemory.push(getNewProductMemory(producto))
            count = 1;
        } else{
            newMemory[indexProduct].cantidad ++;
            count = newMemory[indexProduct].cantidad;
        }
            localStorage.setItem("products", JSON.stringify(newMemory));
            updateCartNumber();
            return count;
    }
            updateCartNumber();

}


function restarCart(producto){
    const memoria = JSON.parse(localStorage.getItem("products"));
    const indexProduct = memoria.findIndex(products => products.id === producto.id);
    if(memoria[indexProduct].cantidad > 1){
        memoria[indexProduct].cantidad--;
    }else{
        memoria.splice(indexProduct,1);
    }
    localStorage.setItem("products", JSON.stringify(memoria));
    createProductStart();

}

function getNewProductMemory(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarritoElement = document.getElementById("cuentaCarrito");
function updateCartNumber(){
    const memoria = JSON.parse(localStorage.getItem("products"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0 );
    cuentaCarritoElement.innerText = cuenta;
}

updateCartNumber();

