/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */
//------------------ DEFENIÇÕES -------------------//
if (!(localStorage.SingleRankings)){
    localStorage.setItem("Audio", true)
}

if (sessionStorage.getItem('Logged') == "false"){
    document.getElementsByClassName('Definitions')[0].style.visibility='hidden'
    document.getElementById("FundoNaoLogado").style.visibility= 'visible'
}

if (!(sessionStorage.Mobile)){
    sessionStorage.setItem('Mobile', false)
}

var ComSom = "Imagens/ComSom.png";
var SemSom = "Imagens/SemSom.png";

var sound = sessionStorage.getItem('Audio');
var MobileChekedBox = sessionStorage.getItem('Mobile')

var Som = document.getElementById('Som');

function iniciaDefs(){
    if (sound == "true"){
        Som.src = ComSom
    } else {
        Som.src = SemSom
    }
    
    if (MobileChekedBox == "true"){
        document.getElementById('MobileCheckBox').checked = true;
    } else {
        document.getElementById('MobileCheckBox')
    }
}

Som.addEventListener('click',VerificaSom);

function VerificaSom(){
    
    if (sound == 'true'){
        Som.src = SemSom
        sound = 'false'
        sessionStorage.setItem("Audio", false)
    } else {
        Som.src = ComSom
        sound = 'true'
        sessionStorage.setItem("Audio", true)
    }

}

function defineEventHandlerChangeButtons(){
    document.getElementById('SubmitNewName').addEventListener('click',changeUsername)
    document.getElementById('SubmitNewPassword').addEventListener('click',changePassword)
    document.getElementById('SubmitNewEmail').addEventListener('click',changeEmail)
    document.getElementById('MobileCheckBox').addEventListener('click', changeMobileMode)
}

function changeMobileMode(){
    checkBox = document.getElementById('MobileCheckBox').checked
    
    sessionStorage.setItem('Mobile', checkBox)
}

function changeUsername(){
    
    newName = document.getElementById('NewName').value
    
    if (localStorage.getItem(newName) == null){

        currentUser = sessionStorage.getItem("currentUser")

        storedUser = JSON.parse(localStorage.getItem(currentUser))
        storedUser.user = newName
        localStorage.setItem(newName, JSON.stringify(storedUser))
        localStorage.removeItem(currentUser)
        sessionStorage.setItem('currentUser', newName)
        alert("Nome mudado")
    } else {
        alert("Nome já existente")
    }
}

function changePassword(){
    newPassword = document.getElementById('NewPassword').value
    
    currentUser = sessionStorage.getItem("currentUser")

    storedUser = JSON.parse(localStorage.getItem(currentUser))
    storedUser.password = newPassword
    localStorage.setItem(currentUser, JSON.stringify(storedUser))
}

function changeEmail(){
    newEmail = document.getElementById('NewEmail').value
    
    currentUser = sessionStorage.getItem("currentUser")

    storedUser = JSON.parse(localStorage.getItem(currentUser))
    storedUser.email = newEmail
    localStorage.setItem(currentUser, JSON.stringify(storedUser))
}


iniciaDefs()
defineEventHandlerChangeButtons()