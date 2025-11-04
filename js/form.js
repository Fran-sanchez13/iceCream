const formRegister = document.getElementById("formRegister")
const nameInput = document.getElementById("nombreInput")
const lastNameInput = document.getElementById("apellidoInput")
const emailInput = document.getElementById('emailInput')
const passwordInput = document.getElementById('passwordInput')
const phoneInput = document.getElementById('telefonoInput')
const users = JSON.parse(localStorage.getItem('users')) || []



/*Funcioones Auxiliares */
const saveLocalStorage = () => {
    localStorage.setItem('users', JSON.stringify(users))
} 
    

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
   return users.some((user) => user.email === input.value.trim())
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

const isPassSecure = (input) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

   return regex.test(input.value.trim())
}

const isPhoneValid = (input) => {
    const regex = /^[0-9]{10}$/

    return regex.test(input.value.trim())
}

/*Funciones de validacion de inputs */

const checkTextInput = (input) => {
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

 const chekpassWord = (input) => {
    let valid = false

    if(isEmpty(input)){
        showError(input, 'El campo esta vacio')
        return
    }

    if(!isPassSecure(input)){
        showError(input, 'La contraseña debe tener al menos mayuscula, miniscula, un numero y un caracter especial y 8 caracteres ')
        return
    }
    

    showSuccess(input)
    valid = true
    return valid
}

const checkPhone = (input) => {
    let valid = false

    if(isEmpty(input)){
        showError(input, 'Este campo es obligatorio')
        return
    }

    if(!isPhoneValid(input)){
        showError(input, 'El campo solo debe tener 10 caracteres numericos')
        return
    }


    showSuccess(input)
    valid = true
    return valid

}


/*Validacion general y almacenamiento de datos */
const submitHandler = (e) => {
    e.preventDefault()
    let isNameValid = checkTextInput(nameInput)
    let islastNameValid = checkTextInput(lastNameInput)
    let isEmailValid = checkEmail(emailInput)
    let isPassValid = chekpassWord(passwordInput)
    let isPhoneValid = checkPhone(phoneInput)

    let isValidForm =
        isNameValid &&
        islastNameValid &&
        isEmailValid &&
        isPassValid &&
        isPhoneValid

    if(isValidForm){
        
        users.push({
            name: nameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            password: passwordInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim()
        })
        saveLocalStorage()
        alert('Te registraste con exito!!')
        window.location.href = 'sesion.html'

    }
        

}


const init = () => {
    formRegister.addEventListener('submit', submitHandler)
    nameInput.addEventListener('input', () => checkTextInput(nameInput))
    lastNameInput.addEventListener('input', () => checkTextInput(lastNameInput))
    emailInput.addEventListener('input', () => checkEmail(emailInput))
    passwordInput.addEventListener('input', () => chekpassWord(passwordInput))
    phoneInput.addEventListener('input', () => checkPhone(phoneInput))
}

init()
