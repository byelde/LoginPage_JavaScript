let admin = {
    name: 'admin',
    password: 'admin'
}

localStorage.setItem('logins', JSON.stringify(admin))

const login = () => {
    let name = document.querySelector('.name').value
    let email = document.querySelector('.email').value
    let password = document.querySelector('.password').value

    dataBase = JSON.parse(localStorage.getItem('logins'))
    for (data of dataBase) {

    }
}