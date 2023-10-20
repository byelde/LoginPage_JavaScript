let page = document.querySelector('body')

let emailOrUserParent = document.querySelector('.emailOrUserParent')
let emailOrUser = document.querySelector('.emailOrUser')
let eOrU_valid = false

let passwordParent = document.querySelector('.passwordParent')
let password = document.querySelector('.password')
let eye = document.querySelector('.material-symbols-outlined.eye')
let pass_valid = false

let loginButtom = document.querySelector('.login')

const login = () => {
    let eOrU = emailOrUser.value
    let pass = password.value
    let valid = false

    dataBase = JSON.parse(localStorage.getItem('logins'))

    for (const data in dataBase) {
        if ((dataBase[data].user === eOrU || dataBase[data].email === eOrU)&&( dataBase[data].password === pass)) {

            valid = true
            emailOrUser.style.border = '2px solid white'
            emailOrUser.value=''
            passwordParent.style.border = '2px solid white'
            password.value =''
        }
    }

    if (valid) {
        alert('WORKED')
    } else {
        alert('ERROR')
    }

}

const lostPassword = () => {
    alert('You lost the password')
}

eye.addEventListener('click', () => {
    if (password.type == 'password'){
        password.type = 'text'
        eye.innerHTML = 'visibility_off'

    } else {
        password.type = 'password'
        eye.innerHTML = 'visibility'
    }
})

emailOrUser.addEventListener('keyup', () => {
    if (emailOrUser.value == '' || emailOrUser.value == undefined) {
        emailOrUser.style.border = '2px solid white'
        eOrU_valid = false

    } else if (emailOrUser.value.length <= 3 || emailOrUser.value.search(' ') != -1) {
        emailOrUser.style.border = '2px solid red'
        eOrU_valid = false

    } else {
        emailOrUser.style.border = '2px solid green'
        eOrU_valid = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value == '' || emailOrUser.value == undefined) {
        passwordParent.style.border = '2px solid white'
        pass_valid = false


    } else if (password.value.length < 6 || password.value.search(' ') != -1) {
        passwordParent.style.border = '2px solid red'
        pass_valid = false

    } else {
        passwordParent.style.border = '2px solid green'
        pass_valid = true

    }
})

page.addEventListener('keyup', () => {
    if (eOrU_valid && pass_valid) {
        loginButtom.disabled = false
    } else {
        loginButtom.disabled = true
    }
})