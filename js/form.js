const formRegister = document.getElementById("formRegister")
const nameInput = document.getElementById("nombreInput")
const lastNameInput = document.getElementById("apellidoInput")

/*Funcioones Auxiliares */
const isEmpty = (input) => {
    return !input.value.trim().length
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

    if(isEmpty(input)){
        showError(input, 'el campo es obligatorio')
        return
    }

    if('si no esta entre'){
        'mostrar error'
        'retornamos'
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
}

init()

'4401NUcba'