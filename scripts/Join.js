/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */
/**********************************************************/

if (sessionStorage.getItem('Logged') == "true"){
    
    document.getElementsByClassName('carac')[4].style.visibility='visible'
    for (let i = 0; i<3; i++){
        
        document.getElementsByClassName('carac')[i].style.visibility='hidden'
    }
    
} else {
    document.getElementsByClassName('carac')[4].style.visibility='hidden'
    for (let i = 0; i<3; i++){
        document.getElementsByClassName('carac')[i].style.visibility='visible'
    }
}