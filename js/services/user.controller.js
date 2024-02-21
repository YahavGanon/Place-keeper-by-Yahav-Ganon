'use strict'

var gUser = {
    email: '',
    txtColor: '',
    bgColor: '',
    birthDate: '',
    birthTime: '',
}

function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
}

function setBgColor(){
    const elMainBody = document.querySelector('body')
    elMainBody.style.backgroundColor = gUser.bgColor
}




