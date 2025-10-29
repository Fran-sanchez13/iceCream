const loginForm = document.getElementById('formStartSesion')
const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const errorMessage = document.getElementById('form_error')

const users = JSON.parse(localStorage.getItem('users')) || []

const isEmpty = (input) => {
    return !input.value.trim().length
}

const showError = (message) => {
    errorMessage.textContent = message
}

const isExistingEmail = (input) => {
   return users.some((user) => user.email === input.value.trim())
}

const isMatchingPass = (input) => {
    const user = users.find((user) => user.email === emailInput.value.trim())
    return user.password === input.value.trim()
}


const isValidACount = () => {
    let valid = false

    if(isEmpty(emailInput)){
    showError('Por favor completa los campos')
    return
    }

    if(isEmpty(passwordInput)){
    showError('Por favor, completa los campos')
    return
    }

    if(!isExistingEmail(emailInput)){
        showError('El email ingresado es invalido')
        return
    }

    if(!isMatchingPass(passwordInput)){
        showError('El mail o la contraseña son incorrectos')
    }
    

    valid = true
    errorMessage.textContent = ''
    return valid

}



const loginHandler = (e) => {
    e.preventDefault()
    if(isValidACount()){
        const user = users.find((user) => user.email === emailInput.value.trim())
        console.log(user);
        
        //guardar en el sesion storage
        //redirigir al home

    }

}

const init = () =>{
    loginForm.addEventListener('submit', loginHandler)
}

init()