const formRegister = document.getElementById("formRegister")
const nameInput = document.getElementById("nombreInput")
const lastNameInput = document.getElementById("apellidoInput")
const emailInput = document.getElementById('emailInput')
const paswordInput = document.getElementById('passwordInput')
const phoneInput = document.getElementById('telefonoInput')

const users = [
    {
        Nombre: 'nombre',
        lastName: 'apellido',
        Email: 'pepito@gmail.com',
        Password: 'contraseñas',
        Teléfono: 'telefono'
    }
]



/*Funcioones Auxiliares */
const isEmpty = (input) => {
    return !input.value.trim().length
}

const isBetween = (input, min, max) => {
    return input.value.length >= min && input.value.length < max
}

const isEmailValid = (input) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    return regex.test(input.value.trim())
}

const isExistingEmail = (input) => {
   return users.some((user) => user.Email === input.value.trim())
}


const showError = (input, message) => {
    const formGroup = input.parentElement
    formGroup.classList.remove('success')
    formGroup.classList.add('error')
    const error = formGroup.querySelector('small')
    error.style.display = 'block'
    error.textContent = message
}

const showSuccess = (input) => {
    const formGroup = input.parentElement
    formGroup.classList.remove('error')
    formGroup.classList.add('success')
    const error = formGroup.querySelector('small')
    error.textContent = ''
    error.style.display = 'none'

}

/*Funciones de validacion de inputs */

const chackTextInput = (input) => {
    let valid = false
    const maxCharacter = 16
    const minCharacter = 3
    if(isEmpty(input)){
        showError(input, 'El campo es obligatorio')
        return
    }

    if( !isBetween(input, minCharacter, maxCharacter)){
        showError(input, `Este campo debe tener entre ${minCharacter} y ${maxCharacter} caracteres`)
        return
    }

    showSuccess(input)
    valid = true
    return valid
}

const checkEmail = (input) => {
    let valid = false

    if(isEmpty(input)){
        showError(input, 'El campo es obligatorio')
        return
    }


    if(!isEmailValid(input)){
        showError(input, 'Este email es invalido')
        return
    }

    if(isExistingEmail(input)){
        showError(input, 'Este email ya esta registrado')
        return
    }

    showSuccess(input)
    valid = true
    return valid
}



/*Validacion general y almacenamiento de datos */
const submitHandler = (e) => {
    //prevenimos comportamiento por defecto
    e.preventDefault()
    //validar los inputs
    //agregar al usuario
    //guardar en el localStorage
    //informar al usuario(con un alert)
    //redirigir al login
}


const init = () => {
    formRegister.addEventListener('submit', submitHandler)
    nameInput.addEventListener('input', () => chackTextInput(nameInput))
    lastNameInput.addEventListener('input', () => chackTextInput(lastNameInput))
    emailInput.addEventListener('input', () => checkEmail(emailInput))
}

init()
