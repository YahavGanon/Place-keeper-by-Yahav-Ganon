'use strict'
const USER_DB = 'userDB'

function getUserInfo() {
loadFromStorage(USER_DB) 
if(!USER_DB)return
}

function onSubmit(ev) {
    ev.preventDefault()
    const elMail = document.querySelector('[name="email"]')
    const elBgColor = document.querySelector('[name="color"]')
    const elTxtColor = document.querySelector('[name="colorTxt"]')
    const elDob = document.querySelector('[name="dob"]')
    const elAppt = document.querySelector('[name="appt"]')
    // console.log('ev', ev) 
    // console.log(typeof elAppt.value)
    gUser.email = elMail.value
    gUser.bgColor = elBgColor.value
    gUser.txtColor = elTxtColor.value
    gUser.birthDate = elDob.value
    gUser.birthTime = elAppt.value
    setBgColor()
    _saveUserInfo()
}

function _saveUserInfo() {
    saveToStorage(USER_DB, gUser)
}

