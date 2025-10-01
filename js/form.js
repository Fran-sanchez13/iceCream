//funcion de validacion
function validarFormulario(event){
    //evitar el envio del formulario si hay un error
    event.preventDefault();

    //limpiar los msj de error
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("ApellidoInput").innerHTML = "";
    document.getElementById("EmailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";

    //obtener los valores de los campos
    let nombre = document.getElementById("nameInput").ariaValueMax.trim();
    let apellido = document.getElementById("apellidoInput").ariaValueMax.trim();
    let email = document.getElementById("emailInput").ariaValueMax.trim();
    let telefono = document.getElementById("phoneInput").ariaValueMax.trim();

    let validado = true;

    //validacion de campo nombre
    if(nombre === ""){
        document.getElementById("nameError").innerHTML = "El nombre es obligatorio"
        validado = false;
    }
    //validacion de apellido
    if(apellido === ""){
        document.getElementById("lastNameError").innerHTML = "El apellido es obligatorio"
        validado = false;
    }
    if(email === ""){
        document.getElementById()
    }

}