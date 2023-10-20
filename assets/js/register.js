let page = document.querySelector('body')

let inputEmail = document.querySelector('.email')
let emailValid = false

let inputUser = document.querySelector('.user')
let userValid = false

let inputPassword = document.querySelector('.password')
let passwordParent = document.querySelector('.passwordParent')
let passwordValid = false

let eyePassword = document.querySelector('span.material-symbols-outlined.eye1')

let inputRepeatPassword = document.querySelector('.repeatPassword')
let repeatPasswordParent = document.querySelector('.repeatPasswordParent')
let repeatPasswordValid = false

let eyeRepeatPassword = document.querySelector('span.material-symbols-outlined.eye2')

let registerButtom = document.querySelector('.register') 

// EMAIL
inputEmail.addEventListener('keyup', () => {
    if (inputEmail.value == '' || inputEmail.value == undefined || inputEmail.value == undefined) {
        inputEmail.style.border = '2px solid white'
        emailValid = false

    } else if (inputEmail.value.search(' ') != -1 || inputEmail.value.search('@') == -1) {
        inputEmail.style.border = '2px solid red'
        emailValid = false

    } else {
        inputEmail.style.border = '2px solid green'
        emailValid = true
    }
})

// USER
inputUser.addEventListener('keyup', () => {
    if (inputUser.value == '' || inputUser.value == undefined || inputUser.value == undefined) {
        inputUser.style.border = '2px solid white'
        userValid = false

    } else if (inputUser.value.search(' ') != -1 || inputUser.value.length < 4) {
        inputUser.style.border = '2px solid red'
        userValid = false

    } else {
        inputUser.style.border = '2px solid green'
        userValid = true
    }
})

// PASSWORD
inputPassword.addEventListener('keyup', () => {
    if (inputPassword.value == '' || inputPassword.value == undefined || inputPassword.value == undefined) {
        passwordParent.style.border = '2px solid white'

    } else if (inputPassword.value.search(' ') != -1 || inputPassword.value.length < 6) {
        passwordParent.style.border = '2px solid red'
        passwordValid = false

    } else {
        passwordParent.style.border = '2px solid green'
        passwordValid = true
    }
})

// PASSWORD IMAGE
eyePassword.addEventListener('click', ()=>{
    if (inputPassword.type == 'password') {
        inputPassword.type = 'text'
        eyePassword.innerHTML = 'visibility_off'

    } else {
        inputPassword.type = 'password'
        eyePassword.innerHTML = 'visibility'

    }
})

//  REPEAT PASSWORD
inputRepeatPassword.addEventListener('keyup', () => {
    if (inputRepeatPassword.value == '' || inputRepeatPassword.value == undefined || inputPassword.value == undefined) {
        repeatPasswordParent.style.border = '2px solid white'

    } else if (inputRepeatPassword.value.search(' ') != -1 || inputRepeatPassword.value.length < 6) {
        repeatPasswordParent.style.border = '2px solid red'
        repeatPasswordValid = false

    } else if(inputPassword.value !== inputRepeatPassword.value){
        repeatPasswordParent.style.border = '2px solid red'
        repeatPasswordValid = false

    } else{
        repeatPasswordParent.style.border = '2px solid green'
        repeatPasswordValid = true

    }
})

// REPEATE PASSWORD IMAGE
eyeRepeatPassword.addEventListener('click', ()=>{
    if (inputRepeatPassword.type == 'password') {
        inputRepeatPassword.type = 'text'
        eyeRepeatPassword.innerHTML = 'visibility_off'

    } else {
        inputRepeatPassword.type = 'password'
        eyeRepeatPassword.innerHTML = 'visibility'
    }
})

// ENABLE/DISABLE REGISTER BUTTOM
page.addEventListener('keyup', () => {
    if (emailValid && userValid && passwordValid && repeatPasswordValid) {
        registerButtom.disabled = false
    } else {
        registerButtom.disabled = true
    }
})

// REGISTER
registerButtom.addEventListener('click', () => {
    let duplicateUser = false
    let duplicateEmail = false


    let data = {
        user: inputUser.value,
        email: inputEmail.value,
        password: inputPassword.value,
    }

    registerList = JSON.parse(localStorage.getItem('logins'))

    if (!registerList) {
        registerList = []

    } 
    
    for (const index in registerList) {
        if (registerList[index].user === inputUser.value) {
            duplicateUser = true
        } else if (registerList[index].email === inputEmail.value) {
            duplicateEmail = true
        }

    }

    if (duplicateUser) {
        alert('User is already registered')

    } if (duplicateEmail) {
        alert('Email is already registered')

    } else {
        registerList.push(data)
        localStorage.setItem('logins', JSON.stringify(registerList))
    
        inputEmail.value = ''
        inputUser.value = ''
        inputPassword.value = ''
        inputRepeatPassword.value = ''
    
        alert('Registered!')
    
        window.location = 'http://127.0.0.1:5500/assets/pages/login.html'

    }


})