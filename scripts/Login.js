/* JS Login etc */

/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */

if (!(sessionStorage.Logged) || (!(sessionStorage.currentUser))){
    sessionStorage.setItem("Logged", false)
    sessionStorage.setItem('currentUser','None')
}

function defineEventHandlerSair(){
    document.getElementById('aSair').addEventListener('click', Sair)
    document.getElementById('imgSair').addEventListener('click', Sair)
}

window.addEventListener('load', defineEventHandlerSair)

function Login(){
    if (JSON.parse(sessionStorage.getItem("Logged")) === false){
        var userName = document.getElementById("uname").value;
        var userPw = document.getElementById("psw").value
    

        var storedUser = JSON.parse(localStorage.getItem(userName))
        
        if (storedUser != null){
                
                if (storedUser.password == userPw){
                    sessionStorage.setItem("Logged", true)
                    sessionStorage.setItem("currentUser", userName)


                    alert("Bemvindo " + userName)
                    return true
                } else {
                    alert("Password Errada")
                }

        } else {
            alert("Username não existente, Regista-te!")
        }

    }
    else {
        alert("Já estás logado")
    }
    return false
}

function Register(){
    if (JSON.parse(sessionStorage.getItem("Logged")) === false){
        var regUserName = document.getElementById("registerUserName").value
        var regEmail = document.getElementById("registerEmail").value
        var regPassword = document.getElementById("registerPassword").value
        var regConfirmPassword = document.getElementById("registerConfirmPassword").value
        var regBirthday = document.getElementById("birthday").value
        var regGender = document.getElementById("regGender").value
        
        let user = {
            user: regUserName,
            password: regPassword,
            email: regEmail,
            birthday: regBirthday,
            gender: regGender
        }

        if (regPassword != regConfirmPassword){
            alert("As passwords são diferentes")
        }
        else if (localStorage.getItem(regUserName) == null) {

            localStorage.setItem(regUserName,JSON.stringify(user))


            alert("Conta Criada!")

        }
        else {
            alert("Already in DataBase")
        }
    } else {
        alert("Já estás logado")
    } 
}

function Guest(){
    if (JSON.parse(sessionStorage.getItem("Logged")) === false){
        var guestUserName = document.getElementById("guestName").value

        sessionStorage.setItem("Logged", true)

        sessionStorage.setItem("currentUser", "Guest_" + guestUserName)

        alert("Bemvindo " + "Guest_" + guestUserName)

        return true

    } else {
        alert("Já estás logado")
    }
    return false
}

function RecuperarConta(){
    if (JSON.parse(sessionStorage.getItem("Logged")) === false){
        var recoverUsername = document.getElementById("recUsername").value
        var recoverEmail = document.getElementById("recEmail").value
        var newPassword = document.getElementById("recPassword").value

        var storedUser = JSON.parse(localStorage.getItem(recoverUsername))

        if (recoverUsername != null){
            
            if (storedUser.email == recoverEmail){
                storedUser.password = newPassword
                localStorage.setItem(recoverUsername, JSON.stringify(storedUser))
                alert("Password changed")
            } else {
                alert("Wrong Email")
            }
        } else{
            alert("Username not found")
        }
    }else {
        alert("Já estás logado")
    }
}

function Sair(){
    sessionStorage.setItem("Logged", false)

    sessionStorage.setItem("currentUser", "None")

    location.reload()
}
