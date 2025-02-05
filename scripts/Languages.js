if (!(sessionStorage.language)){
    sessionStorage.setItem("language", "portuguese")
}


function startLanguage(){
    if (sessionStorage.getItem('language') == "portuguese"){
        document.getElementsByClassName('LangImage1')[0].src = "Imagens/Icones Liguagens/portugal.png"
        document.getElementsByClassName('LangImage2')[0].src = "Imagens/Icones Liguagens/ingles.png"
    } else {
        document.getElementsByClassName('LangImage1')[0].src = "Imagens/Icones Liguagens/ingles.png"
        document.getElementsByClassName('LangImage2')[0].src = "Imagens/Icones Liguagens/portugal.png"
    }
}

function changeLanguageButton(click){


    let langId = click.srcElement.id
    if (sessionStorage.getItem('language') == 'english' && langId == "Lang2"){
        sessionStorage.setItem("language", "portuguese")
    } else if (sessionStorage.getItem('language') == 'portuguese' && langId == "Lang2"){
        sessionStorage.setItem("language", "english")
    }
    
    changeLanguage(sessionStorage.getItem('PAGE'))
    startLanguage()
}

function changeLanguage(page){
    LanguageChangerSiteBase()
    
    if (page == "rules"){
        LanguageChangerRules()
    }
    else if(page == "ranking"){
        LanguageChangerRanking()
    }
    else if(page == "join"){
        LanguageChangerJoin()
    }
    else if(page == "forum"){
        LanguageChangerForum()
    }
    else if(page == "settings"){
        LanguageChangerDefinitions()
    }
    else if(page == "jogo"){
        LanguageChangerGame()
    }
}


// AD + FOOTER 

const LANGUAGE_AD = "Language_AD"

const LANGUAGE_QS = "Language_QS"

const LANGUAGE_QS_ANSWER = "Language_QS_Answer"

const LANGUAGE_RS = "Language_RS"

const LANGUAGE_S = "Language_S"

const LANGUAGE_CA = "Language_CA"

const LANGUAGE_SOUNDERROR = "Language_SoundError"

const LANGUAGE_LOGOALT = "Language_LogoAlt"

const LANGUAGE_BACKALT = "Language_BackALT"

// BUTTONS

const LANGUAGE_J = "Language_J"

const LANGUAGE_REG = "Language_Reg"

const LANGUAGE_RAN = "Language_Ran"

const LANGUAGE_F = "Language_F"

const LANGUAGE_DEF = "Language_Def"

const LANGUAGE_LG = "aSair"

// JOIN PAGE

const LANGUAGE_RG = "Language_RG"

const LANGUAGE_ENT = "Language_ENT"

const LANGUAGE_CON = "Language_CON"

const LANGUAGE_REC = "Language_REC"

const LANGUAGE_OPS = "Language_OPS"

const LANGUAGE_JG = "Language_JG" //VALUE

        // Placeholders
const LANGUAGE_RUN = "registerUserName"

const LANGUAGE_RE = "registerEmail"

const LANGUAGE_RPW = "registerPassword"

const LANGUAGE_RCPW = "registerConfirmPassword"

const LANGUAGE_RSU = "registerSubmition" //value

const LANGUAGE_UN = "uname"

const LANGUAGE_PW = "psw"

const LANGUAGE_SUB = "loginSubmition" //value

const LANGUAGE_GN = "guestName"

const LANGUAGE_RU = "recUsername"

const LANGUAGE_RP = "recPassword"

const LANGUAGE_MP = "Language_MP" //innerhtml

const LANGUAGE_RC = "Language_RC"


const LANGUAGE_JL = "Language_JL"

const LANGUAGE_ALJ = "Language_ALJ"

const LANGUAGE_BBALJ = "Language_BBALJ"


// RULES MultiPlayerBox

const LANGUAGE_RULES_BTN = "BtnRules"

const LANGUAGE_VIDEO_BTN = "BtnVideo"

const LANGUAGE_R1 = "Language_R1" //Tutorial

const LANGUAGE_R2 = "Language_R2" //Tabela de pontuacoes

const LANGUAGE_R3 = "Language_R3" //Queres estar no Top 10?

const LANGUAGE_R4 = "Language_R4" //Regras

const LANGUAGE_R5 = "Language_R5" //nao usar qualquer...

const LANGUAGE_R6 = "Language_R6" //Curiosidades

const LANGUAGE_R7 = "Language_R7" //Sabias que...

const LANGUAGE_R8 = "Language_R8" //origem do Jogo

const LANGUAGE_R9 = "Language_R9" //Nao existe um consenso...

const LANGUAGE_R10 = "Language_R10" //Ficha Tecnica

const LANGUAGE_R11 = "Language_R11" //Feito por

const LANGUAGE_R12 = "Language_R12" //Programas usados

const LANGUAGE_R13 = "Language_R13" //Linguagens de Marcacao

// RULES SinglePlayerBox

const LANGUAGE_R14 = "Language_R14" //Tutorial

const LANGUAGE_R15 = "Language_R15" //Tabela de pontuacoes

const LANGUAGE_R16 = "Language_R16" //Queres estar no Top 10?

const LANGUAGE_R17 = "Language_R17" //Regras

const LANGUAGE_R18 = "Language_R18" //nao usar qualquer...

const LANGUAGE_R19 = "Language_R19" //Curiosidades

const LANGUAGE_R20 = "Language_R20" //Sabias que...

const LANGUAGE_R21 = "Language_R21" //origem do Jogo

const LANGUAGE_R22 = "Language_R22" //Nao existe um consenso...

const LANGUAGE_R23 = "Language_R23" //Ficha Tecnica

const LANGUAGE_R24 = "Language_R24" //Feito por

const LANGUAGE_R25 = "Language_R25" //Programas usados

const LANGUAGE_R26 = "Language_R26" //Linguagens de Marcacao


    //Multiplayer

const LANGUAGE_MJ1 = "Language_MJ1"

const LANGUAGE_MJ2 = "Language_MJ2"

const LANGUAGE_MJ3 = "Language_MJ3" 

const LANGUAGE_MJ4 = "Language_MJ4" 

const LANGUAGE_MJ5 = "Language_MJ5" 


    //Singleplayer

const LANGUAGE_S1 = "Language_S1"

const LANGUAGE_S2 = "Language_S2"

const LANGUAGE_S3 = "Language_S3"

const LANGUAGE_S4 = "Language_S4"


// Ranking

const LANGUAGE_POS = "Language_POS"

const LANGUAGE_PLA = "Language_PLA"

const LANGUAGE_JC = "Language_JC"

const LANGUAGE_TT = "Language_TT"

const LANGUAGE_MT = "Language_MT"


const LANGUAGE_MPOS = "Language_MPOS"

const LANGUAGE_MPLA = "Language_MPLA"

const LANGUAGE_JGS = "Language_JGS"

const LANGUAGE_VIT = "Language_VIT"

const LANGUAGE_TV = "Language_TV"

const LANGUAGE_SP = "Language_SP"

const LANGUAGE_MPL = "Language_MPl"


// Forum

const LANGUAGE_VS = "Language_VS"

const LANGUAGE_O = "Language_O"

const LANGUAGE_CE = "Language_CE"

const LANGUAGE_SC = "Language_SC"

const LANGUAGE_CB = "Language_CB"

const LANGUAGE_EC = "Language_EC"

const LANGUAGE_EAATUO = "Language_EAATUO"




// Definitions

const LANGUAGE_DU = "Language_DU"

const LANGUAGE_AE = "Language_AE"

const LANGUAGE_ANU = "Language_ANU"

const LANGUAGE_AP = "Language_AP"

const LANGUAGE_NP = "NewPassword" //placeholder

const LANGUAGE_NN = "NewName" //placeh

const LANGUAGE_NE = "NewEmail"

const LANGUAGE_SG = "Language_SG"

const LANGUAGE_MOB = "Language_MOB"

const LANGUAGE_NT = "Language_NT"

const LANGUAGE_PLAY = "Language_PLAY"


// Jogo

const LANGUAGE_NELJOGO = "Language_NELJOGO"

const LANGUAGE_JCE = "Language_JCE"

const LANGUAGE_VAMOSJOGAR = "Language_VAMOSJOGAR"

const LANGUAGE_TELEMOVEL = "Language_TELEMOVEL"

const LANGUAGE_CHOOSEYOURCHAR = "Language_CHOOSEYOURCHAR"
// Language Changer Event Listener

function defineLanguangeEventListener(){
    document.getElementsByClassName('LangImage1')[0].addEventListener('click', changeLanguageButton)
    document.getElementsByClassName('LangImage2')[0].addEventListener('click', changeLanguageButton)
}

// Language Changer Script //

function LanguageChangerSiteBase(){

    if (sessionStorage.getItem("language") == "portuguese"){

        // AD + FOOTER 

        document.getElementById(LANGUAGE_AD).innerHTML = "*ANÚNCIOS*"
        document.getElementById(LANGUAGE_QS).innerHTML = "Quem Somos?"
        document.getElementById(LANGUAGE_QS_ANSWER).innerHTML = "Somos um grupo de 3 alunos de Tecnologias de Informação da Faculdade de Ciências (Afonso Teles, Afonso Benedito e Tomás Ndlate). Este site/jogo foi criado com o intuito de realizar um trabalho de ITW."
        document.getElementById(LANGUAGE_RS).innerHTML = "Redes Sociais &#x1F92A;"
        document.getElementById(LANGUAGE_S).innerHTML = "Suporte"
        document.getElementById(LANGUAGE_CA).innerHTML = "Centro de Ajuda"
        document.getElementById(LANGUAGE_SOUNDERROR).innerHTML = "O teu browser não suporta o áudio do HTML5. Em vez disso entra por <a href='sound.mp3'> este link para o áudio  </a>"
        document.getElementById(LANGUAGE_LOGOALT).alt = "Logotipo que dá som"
        document.getElementById(LANGUAGE_BACKALT).alt = "Montanhas ao fundo da imagem. Zona com árvores e arbustos cobertos por neve. Em cima de um monte de neve, dois ursos com camisolas branca e preta cada uma com o seu nome: Cherry e Berry, respetivamente. No centro deles encontra-se um boneco de neve com uma faixa a dizer Agente B."

        // BUTTONS

        document.getElementById(LANGUAGE_J).innerHTML= "&#x1F601; Jogar "
        document.getElementById(LANGUAGE_REG).innerHTML= "&#x1F6AB; Regras "
        document.getElementById(LANGUAGE_RAN).innerHTML= "&#x1F947; Rankings "
        document.getElementById(LANGUAGE_F).innerHTML= "&#x1F4E9; Fórum "
        document.getElementById(LANGUAGE_DEF).innerHTML= "&#x1F527; Definições "
        document.getElementById(LANGUAGE_LG).innerHTML = "Sair" 
        

    } else {

        // AD + FOOTER

        document.getElementById(LANGUAGE_AD).innerHTML = "*AD*"
        document.getElementById(LANGUAGE_QS).innerHTML = "Who are we?"
        document.getElementById(LANGUAGE_QS_ANSWER).innerHTML = "We are a group of 3 students of 'Tecnologias de Informação' from 'Faculdade de Ciências da Universidade de Lisboa' (Afonso Teles, Afonso Benedito e Tomás Ndlate). This website/game has been created with the intuiton of a work for ITW."
        document.getElementById(LANGUAGE_RS).innerHTML = "Social Networks &#x1F92A;"
        document.getElementById(LANGUAGE_S).innerHTML = "Support"
        document.getElementById(LANGUAGE_CA).innerHTML = "Help Center"
        document.getElementById(LANGUAGE_SOUNDERROR).innerHTML = "Your browser doesn't support HTML5 audio. Here is a <a href='sound.mp3'>link to the audio</a> instead."
        document.getElementById(LANGUAGE_LOGOALT).alt = "Logo that makes sound";
        document.getElementById(LANGUAGE_BACKALT).alt = "Mountains at the bottom of the image. Area with trees and shrubs covered by snow. On top of a pile of snow, two bears in white and black sweaters each with their name: Cherry and Berry, respectively. In the center of them you find a snowman with a banner saying Agent B."
        
        // BUTTONS

        document.getElementById(LANGUAGE_J).innerHTML= "&#x1F601; Join "
        document.getElementById(LANGUAGE_REG).innerHTML= "&#x1F6AB; Rules "
        document.getElementById(LANGUAGE_RAN).innerHTML= "&#x1F947; Rankings "
        document.getElementById(LANGUAGE_F).innerHTML= "&#x1F4E9; Forum "
        document.getElementById(LANGUAGE_DEF).innerHTML= "&#x1F527; Definitions "
        document.getElementById(LANGUAGE_LG).innerHTML = "Log Out" 
    }
}


function LanguageChangerGame(){
    if (sessionStorage.getItem("language") == "portuguese"){
        document.getElementById(LANGUAGE_NELJOGO).innerHTML = "Não estás Logado!"
        document.getElementById(LANGUAGE_JCE).innerHTML = "&#x1F601; Jogar "
        document.getElementById(LANGUAGE_VAMOSJOGAR).innerHTML = "Vamos Jogar"
        document.getElementById(LANGUAGE_TELEMOVEL).innerHTML = "(Se estiveres no telemovél muda nas Definições)"
        document.getElementById(LANGUAGE_CHOOSEYOURCHAR).innerHTML = "Escolhe a tua personagem"
    }
    else{
        document.getElementById(LANGUAGE_NELJOGO).innerHTML = "You're not Logged!"
        document.getElementById(LANGUAGE_JCE).innerHTML = "&#x1F601; Play "
        document.getElementById(LANGUAGE_VAMOSJOGAR).innerHTML = "Let's Play"
        document.getElementById(LANGUAGE_TELEMOVEL).innerHTML = "(If you are on your mobile phone, go to Definitions)"
        document.getElementById(LANGUAGE_CHOOSEYOURCHAR).innerHTML = "CHOOSE YOUR CHARACTER"
    }

}


function LanguageChangerRules(){

    if (sessionStorage.getItem("language") == "portuguese"){

        // Rules General

        document.getElementById(LANGUAGE_RULES_BTN).innerHTML = "Regras"
        document.getElementById(LANGUAGE_VIDEO_BTN).innerHTML = "Cartas &amp; Temas"

        document.getElementById(LANGUAGE_R1).innerHTML = "Tutorial"
        document.getElementById(LANGUAGE_R2).innerHTML = "Tabela de pontuações"
        document.getElementById(LANGUAGE_R3).innerHTML = "Queres estar no TOP 10? Queres saber como atingir a melhor pontuação?"
        document.getElementById(LANGUAGE_R4).innerHTML = "Regras"
        document.getElementById(LANGUAGE_R5).innerHTML = "Não usar qualquer tipo de ajuda externa. (Printscreen, Scripts, etc..)"
        document.getElementById(LANGUAGE_R6).innerHTML = "Curiosidades"
        document.getElementById(LANGUAGE_R7).innerHTML = "Sabias que, o jogo da memória ajuda a construir uma ideia de competição e saber o que é GANHAR/PERDER!"
        document.getElementById(LANGUAGE_R8).innerHTML = "Origem do Jogo"
        document.getElementById(LANGUAGE_R9).innerHTML = "Não existe um consenso sobre a invenção do jogo da memória, mas acredita-se que tenha surgido na China, no século XV, ou seja, há MUITO TEMPO!"
        document.getElementById(LANGUAGE_R10).innerHTML = "Ficha Técnica"
        document.getElementById(LANGUAGE_R11).innerHTML = "Feito por"
        document.getElementById(LANGUAGE_R12).innerHTML = "Programas usados"
        document.getElementById(LANGUAGE_R13).innerHTML = "Linguagens de marcação"
        document.getElementById(LANGUAGE_R14).innerHTML = "Tutorial"
        document.getElementById(LANGUAGE_R15).innerHTML = "Tabela de pontuações"
        document.getElementById(LANGUAGE_R16).innerHTML = "Queres estar no TOP 10? Queres saber como atingir a melhor pontuação?"
        document.getElementById(LANGUAGE_R17).innerHTML = "Regras"
        document.getElementById(LANGUAGE_R18).innerHTML = "Não usar qualquer tipo de ajuda externa. (Printscreen, Scripts, etc..)"
        document.getElementById(LANGUAGE_R19).innerHTML = "Curiosidades"
        document.getElementById(LANGUAGE_R20).innerHTML = "Sabias que, o jogo da memória ajuda a construir uma ideia de competição e saber o que é GANHAR/PERDER!"
        document.getElementById(LANGUAGE_R21).innerHTML = "Origem do Jogo"
        document.getElementById(LANGUAGE_R22).innerHTML = "Não existe um consenso sobre a invenção do jogo da memória, mas acredita-se que tenha surgido na China, no século XV, ou seja, há MUITO TEMPO!"
        document.getElementById(LANGUAGE_R23).innerHTML = "Ficha Técnica"
        document.getElementById(LANGUAGE_R24).innerHTML = "Feito por"
        document.getElementById(LANGUAGE_R25).innerHTML = "Programas usados"
        document.getElementById(LANGUAGE_R26).innerHTML = "Linguagens de marcação"

        // SinglePlayer

        document.getElementById(LANGUAGE_S1).innerHTML = "ÍNDIVIDUAL"
        document.getElementById(LANGUAGE_S2).innerHTML = "No modo ÍNDIVIDUAL, o objetivo do jogador é passar o maior número de níveis, demorando o menor tempo possível."
        document.getElementById(LANGUAGE_S3).innerHTML = "O jogador deverá escolher 2 cartas de cada vez, se as cartas formarem um PAR então as cartas saiem do tabuleiro. O jogo acaba quando o tabuleiro estiver vazio. Consegues completar TODOS os NÍVEIS?"
        document.getElementById(LANGUAGE_S4).innerHTML = "O melhor jogador, ou seja, TOP 1, é aquele que, no modo ÍNDIVIDUAL, tiver mais níveis completos. Em caso de empate, o que tiver um menor tempo total. Agora que já sabes estás pronto. Desafia-te. Sê o MELHOR!"

        // Multiplayer

        document.getElementById(LANGUAGE_MJ1).innerHTML = "MULTI-JOGADOR"
        document.getElementById(LANGUAGE_MJ2).innerHTML = "O objetivo do jogo achar o maior número de pares de cartas possível. Desta forma quando já não houver mais cartas no tabuleiro, o jogador com o maior número de pares GANHA."
        document.getElementById(LANGUAGE_MJ3).innerHTML = "Cada jogador na sua vez tem a oportunidade de achar o maior número de pares que conseguir. Cada par de cartas vale 1 PONTO! Se o jogador não achar o par na jogada perde a vez e passa a vez para o jogador seguinte."
        document.getElementById(LANGUAGE_MJ4).innerHTML = "No fim o jogador com mais pontos, ou seja, mais pares achados, ganha o jogo, obtendo 1 VITÓRIA!"
        document.getElementById(LANGUAGE_MJ5).innerHTML = "Cada VITÓRIA vale 1 PONTO, assim o jogador com mais pontos estará no topo da tabela. Tenta a TUA SORTE!"
    } else {
        
        // Rules General

        document.getElementById(LANGUAGE_RULES_BTN).innerHTML = "Rules"
        document.getElementById(LANGUAGE_VIDEO_BTN).innerHTML = "Cards &amp; Themes"

        document.getElementById(LANGUAGE_R1).innerHTML = "Tutorial"
        document.getElementById(LANGUAGE_R2).innerHTML = "Rankings"
        document.getElementById(LANGUAGE_R3).innerHTML = "Do you want to be at the TOP 10? Wanna know how to obtain the best score?"
        document.getElementById(LANGUAGE_R4).innerHTML = "Rules"
        document.getElementById(LANGUAGE_R5).innerHTML = "Don't use any kind of external help. (Printscreen, Scripts, etc..)"
        document.getElementById(LANGUAGE_R6).innerHTML = "Curiosities"
        document.getElementById(LANGUAGE_R7).innerHTML = "Did you know, that the Memory Game helps building an ideia of competion, and learning how to WIN/LOSE!"
        document.getElementById(LANGUAGE_R8).innerHTML = "Game's Origins"
        document.getElementById(LANGUAGE_R9).innerHTML = "There is no concessual that to the invention of the Memory Game, but it is believed to be made in Chyna, in the century XV, therefore, A LONG TIME AGO!"
        document.getElementById(LANGUAGE_R10).innerHTML = "Technicalities"
        document.getElementById(LANGUAGE_R11).innerHTML = "Made by"
        document.getElementById(LANGUAGE_R12).innerHTML = "Programs used"
        document.getElementById(LANGUAGE_R13).innerHTML = "Programming Languages"

        document.getElementById(LANGUAGE_R14).innerHTML = "Tutorial"
        document.getElementById(LANGUAGE_R15).innerHTML = "Rankings"
        document.getElementById(LANGUAGE_R16).innerHTML = "Do you want to be at the TOP 10? Wanna know how to obtain the best score?"
        document.getElementById(LANGUAGE_R17).innerHTML = "Rules"
        document.getElementById(LANGUAGE_R18).innerHTML = "Don't use any kind of external help. (Printscreen, Scripts, etc..)"
        document.getElementById(LANGUAGE_R19).innerHTML = "Curiosities"
        document.getElementById(LANGUAGE_R20).innerHTML = "Did you know, that the Memory Game helps building an ideia of competion, and learning how to WIN/LOSE!"
        document.getElementById(LANGUAGE_R21).innerHTML = "Game's Origins"
        document.getElementById(LANGUAGE_R22).innerHTML = "There is no concessual that to the invention of the Memory Game, but it is believed to be made in Chyna, in the century XV, therefore, A LONG TIME AGO!"
        document.getElementById(LANGUAGE_R23).innerHTML = "Technicalities"
        document.getElementById(LANGUAGE_R24).innerHTML = "Made by"
        document.getElementById(LANGUAGE_R25).innerHTML = "Programs used"
        document.getElementById(LANGUAGE_R26).innerHTML = "Programming Languages"

        // SinglePlayer

        document.getElementById(LANGUAGE_S1).innerHTML = "Singleplayer"
        document.getElementById(LANGUAGE_S2).innerHTML = "In the SINGLEPLAYER mode, the objective of the game is to win as many levels as capable, while doing the least time possible."
        document.getElementById(LANGUAGE_S3).innerHTML = "The player must choose 2 card each time, if the cards form a pair, then the cards disapear from the table. The game ends when the table is completely empty. Can you complete EVERY LEVEL?"
        document.getElementById(LANGUAGE_S4).innerHTML = "The best player, TOP 1, is the one that in the SINGLEPLAYER mode, has the most completed levels. In case of TIE, the one who has the least TIME wins. Now that you know, you are ready! Challenge yourself! Be the very BEST ONE!"

        // Multiplayer

        document.getElementById(LANGUAGE_MJ1).innerHTML = "Multiplayer"
        document.getElementById(LANGUAGE_MJ2).innerHTML = "The objective of this game is to find the most pairs of cards as possible. This way when there no more cards on the table, the player with most pairs WINS."
        document.getElementById(LANGUAGE_MJ3).innerHTML = "Every player has the opportunity to find the most pairs as he can. Each pair equals 1 POINT! If the player doesn't find a pair, its his opponent's turn."
        document.getElementById(LANGUAGE_MJ4).innerHTML = "At the of the game the player with the most points, most pairs found, wins the game, obtaining 1 VICTORY!"
        document.getElementById(LANGUAGE_MJ5).innerHTML = "Each VICTORY equal to 1 RANKING POINT, that way the player with the most RANKING POINTS will be at the top of the Rankings. Try your Luck!"
    }
}

function LanguageChangerRanking(){
    if (sessionStorage.getItem("language") == "portuguese"){
        document.getElementById(LANGUAGE_POS).innerHTML = "Posição"
        document.getElementById(LANGUAGE_PLA).innerHTML = "Jogador"
        document.getElementById(LANGUAGE_JC).innerHTML = "Jogadas"
        document.getElementById(LANGUAGE_TT).innerHTML = "Tempo"
    } else{
        document.getElementById(LANGUAGE_POS).innerHTML = "Position"
        document.getElementById(LANGUAGE_PLA).innerHTML = "Player"
        document.getElementById(LANGUAGE_JC).innerHTML = "Plays"
        document.getElementById(LANGUAGE_TT).innerHTML = "Total time"
    }
}

function LanguageChangerJoin(){
    if (sessionStorage.getItem("language") == "portuguese"){
        document.getElementById(LANGUAGE_RG).innerHTML = "Registar"
        document.getElementById(LANGUAGE_ENT).innerHTML = "Entrar"
        document.getElementById(LANGUAGE_CON).innerHTML = "Convidado"
        document.getElementById(LANGUAGE_JG).value = "Jogar"
        document.getElementById(LANGUAGE_RUN).placeholder = "Nome de Utilizador"
        document.getElementById(LANGUAGE_RE).placeholder = "Email"
        document.getElementById(LANGUAGE_RPW).placeholder = "Palavra Passe"
        document.getElementById(LANGUAGE_RCPW).placeholder = "Confirmar Palavra Passe"
        document.getElementById(LANGUAGE_RSU).value = "Registar"
        document.getElementById(LANGUAGE_UN).placeholder = "Nome de Utilizador"
        document.getElementById(LANGUAGE_PW).placeholder = "Palavra Passe"
        document.getElementById(LANGUAGE_SUB).value = "Sign in"
        document.getElementById(LANGUAGE_GN).placeholder = "Nome de Jogador"
        document.getElementById(LANGUAGE_RU).placeholder = "Nome de utilizador"
        document.getElementById(LANGUAGE_RP).placeholder = "Nova Palavra Passe"
        document.getElementById(LANGUAGE_MP).innerHTML = "Mudar Palavra Passe"
        document.getElementById(LANGUAGE_OPS).innerHTML = "Oops! Perdeste a CONTA!?"
        document.getElementById(LANGUAGE_RC).innerHTML = "Recuperar Conta"
        document.getElementById(LANGUAGE_JL).innerHTML = "Já estás Logado!"
        document.getElementById(LANGUAGE_ALJ).innerHTML = "Jogar"
        document.getElementById(LANGUAGE_BBALJ).alt = "Berry, o Urso azul"
    } else{
        document.getElementById(LANGUAGE_RG).innerHTML = "Register"
        document.getElementById(LANGUAGE_ENT).innerHTML = "Login"
        document.getElementById(LANGUAGE_CON).innerHTML = "Guest"
        document.getElementById(LANGUAGE_JG).value = "Join"
        document.getElementById(LANGUAGE_RUN).placeholder = "Username"
        document.getElementById(LANGUAGE_RE).placeholder = "Email"
        document.getElementById(LANGUAGE_RPW).placeholder = "Password"
        document.getElementById(LANGUAGE_RCPW).placeholder = "Confirm Password"
        document.getElementById(LANGUAGE_RSU).value = "Register"
        document.getElementById(LANGUAGE_UN).placeholder = "Username"
        document.getElementById(LANGUAGE_PW).placeholder = "Password"
        document.getElementById(LANGUAGE_SUB).value = "Sign in"
        document.getElementById(LANGUAGE_GN).placeholder = "Username"
        document.getElementById(LANGUAGE_RU).placeholder = "Username"
        document.getElementById(LANGUAGE_RP).placeholder = "New Password"
        document.getElementById(LANGUAGE_MP).innerHTML = "Change Password"
        document.getElementById(LANGUAGE_OPS).innerHTML = "Oops! Have you LOST your ACCOUNT!?"
        document.getElementById(LANGUAGE_RC).innerHTML = "Recover Account"
        document.getElementById(LANGUAGE_JL).innerHTML = "You're already logged!"
        document.getElementById(LANGUAGE_ALJ).innerHTML = "Play"
        document.getElementById(LANGUAGE_BBALJ).alt = "Berry, The Blue Bear"
    }
}

function LanguageChangerForum(){
    if (sessionStorage.getItem("language") == "portuguese"){
        document.getElementById(LANGUAGE_VS).innerHTML = "Os vossos comentários:"
        document.getElementById(LANGUAGE_O).innerHTML = "Dá nos a tua opinião!"
        document.getElementById(LANGUAGE_CE).innerHTML = "Comentário Enviado"
        document.getElementById(LANGUAGE_CB).innerHTML = "Comentários"
        document.getElementById(LANGUAGE_EC).innerHTML = "Escreve um Comentário"
        document.getElementById(LANGUAGE_SC).value = "Enviar Comentário"
        document.getElementById(LANGUAGE_EAATUO).value = "Escreve aqui a tua opinião!"
    } else{
        document.getElementById(LANGUAGE_VS).innerHTML = "Your Comments:"
        document.getElementById(LANGUAGE_O).innerHTML = "Give us your opinion!"
        document.getElementById(LANGUAGE_CE).innerHTML = "Comment Sent!"
        document.getElementById(LANGUAGE_CB).innerHTML = "Comments"
        document.getElementById(LANGUAGE_EC).innerHTML = "Write a Comment"
        document.getElementById(LANGUAGE_SC).value = "Send Comment!"
        document.getElementById(LANGUAGE_EAATUO).value = "Write your opinion here!"
    }    
}

function LanguageChangerDefinitions(){
    if (sessionStorage.getItem("language") == "portuguese"){
        document.getElementById(LANGUAGE_DU).innerHTML = "Definições do Utilizador"
        document.getElementById(LANGUAGE_AE).innerHTML = "Alterar Email:"
        document.getElementById(LANGUAGE_ANU).innerHTML = "Alterar Nome de utilizador:"
        document.getElementById(LANGUAGE_AP).innerHTML = "Alterar Password:"
        document.getElementById(LANGUAGE_NE).placeholder = "Novo Email"
        document.getElementById(LANGUAGE_NN).placeholder = "Novo Nome"
        document.getElementById(LANGUAGE_NP).placeholder = "Nova Palavra-Passe"
        document.getElementById(LANGUAGE_SG).innerHTML = "Som do Jogo"
        document.getElementById(LANGUAGE_MOB).innerHTML = "Telemóvel"
        document.getElementById(LANGUAGE_NT).innerHTML = "Não estás Logado!"
        document.getElementById(LANGUAGE_PLAY).innerHTML = "&#x1F601; Jogar "
    } else{
        document.getElementById(LANGUAGE_DU).innerHTML = "User Preferences"
        document.getElementById(LANGUAGE_AE).innerHTML = "Change Email:"
        document.getElementById(LANGUAGE_ANU).innerHTML = "Change Username:"
        document.getElementById(LANGUAGE_AP).innerHTML = "Change Password:"
        document.getElementById(LANGUAGE_NE).placeholder = "New Email"
        document.getElementById(LANGUAGE_NN).placeholder = "New Name"
        document.getElementById(LANGUAGE_NP).placeholder = "New Password"
        document.getElementById(LANGUAGE_SG).innerHTML = "Game Sound"
        document.getElementById(LANGUAGE_MOB).innerHTML = "Mobile"
        document.getElementById(LANGUAGE_NT).innerHTML = "You're not Logged!"
        document.getElementById(LANGUAGE_PLAY).innerHTML = "&#x1F601; Play "
    }
}

defineLanguangeEventListener()
startLanguage()