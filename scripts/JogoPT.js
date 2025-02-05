/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */
/**********************************************************/
let cartasPosicionadas = null
let COR_UTILIZADA = "castanho"
let CARTA_VIRADA = false
let CARTAS_VIRADAS = 0
let cards = {}
let cartaUtilizada = null
let paresCompletos = 0
let jogoFinalizado = null
let reiniciarJogo = true
let nJogadas = 0
let counter = 0
let contraCounter = 45
let StartDate = null
let timer = null
let cartasGanhas = []
let inMap = false
let nivel = 1

let quantidade = 20
let Trios = false
let ContraRelogio = false

let triosCompletos = 0
const velocidadeLenta = 800
const velocidadeNormal = 500
const velocidadeRapida = 300
let velocidade = velocidadeNormal

let multiPlayer = false
let jogador1Pares = 0
let jogador2Pares = 0
let vez = "jogador1"


if (!(localStorage.SingleRankings)){
    localStorage.setItem("SingleRankings", JSON.stringify([]))
}

if (!(sessionStorage.getItem('Audio'))){
    sessionStorage.setItem('Audio', true)
}

if (!(sessionStorage.Mobile)){
    sessionStorage.setItem('Mobile', false)
}





/************************************************************************************************************************************/
const cartasPretas = ["Imagens/FrenteDasCartas/Spongebob/spongebob-1.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-1.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-2.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-2.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-3.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-3.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-4.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-4.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-5.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-5.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-6.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-6.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-7.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-7.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-8.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-8.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-9.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-9.png", 
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-10.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-10.png",
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-11.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-11.png",
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-12.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-12.png",
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-13.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-13.png",
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-14.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-14.png",
                     "Imagens/FrenteDasCartas/Spongebob/spongebob-15.png", "Imagens/FrenteDasCartas/Spongebob/spongebob-15.png"];

const cartasLaranjas = ["Imagens/FrenteDasCartas/Garfield/garfield-1.png","Imagens/FrenteDasCartas/Garfield/garfield-1.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-2.png","Imagens/FrenteDasCartas/Garfield/garfield-2.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-3.png","Imagens/FrenteDasCartas/Garfield/garfield-3.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-4.png","Imagens/FrenteDasCartas/Garfield/garfield-4.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-5.png","Imagens/FrenteDasCartas/Garfield/garfield-5.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-6.png","Imagens/FrenteDasCartas/Garfield/garfield-6.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-7.png","Imagens/FrenteDasCartas/Garfield/garfield-7.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-8.png","Imagens/FrenteDasCartas/Garfield/garfield-8.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-9.png","Imagens/FrenteDasCartas/Garfield/garfield-9.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-10.png","Imagens/FrenteDasCartas/Garfield/garfield-10.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-11.png", "Imagens/FrenteDasCartas/Garfield/garfield-11.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-12.png", "Imagens/FrenteDasCartas/Garfield/garfield-12.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-13.png", "Imagens/FrenteDasCartas/Garfield/garfield-13.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-14.png", "Imagens/FrenteDasCartas/Garfield/garfield-14.png",
                         "Imagens/FrenteDasCartas/Garfield/garfield-15.png", "Imagens/FrenteDasCartas/Garfield/garfield-15.png"]

const cartasVermelhas = ["Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-1.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-1.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-2.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-2.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-3.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-3.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-4.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-4.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-5.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-5.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-6.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-6.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-7.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-7.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-8.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-8.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-9.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-9.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-10.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-10.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-11.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-11.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-12.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-12.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-13.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-13.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-14.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-14.png",
                         "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-15.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-15.png"]

const cartasAzuis = ["Imagens/FrenteDasCartas/Doraemon/doraemon-1.png","Imagens/FrenteDasCartas/Doraemon/doraemon-1.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-2.png","Imagens/FrenteDasCartas/Doraemon/doraemon-2.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-3.png","Imagens/FrenteDasCartas/Doraemon/doraemon-3.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-4.png","Imagens/FrenteDasCartas/Doraemon/doraemon-4.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-5.png","Imagens/FrenteDasCartas/Doraemon/doraemon-5.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-6.png","Imagens/FrenteDasCartas/Doraemon/doraemon-6.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-7.png","Imagens/FrenteDasCartas/Doraemon/doraemon-7.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-8.png","Imagens/FrenteDasCartas/Doraemon/doraemon-8.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-9.png","Imagens/FrenteDasCartas/Doraemon/doraemon-9.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-10.png","Imagens/FrenteDasCartas/Doraemon/doraemon-10.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-11.png","Imagens/FrenteDasCartas/Doraemon/doraemon-11.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-12.png","Imagens/FrenteDasCartas/Doraemon/doraemon-12.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-13.png","Imagens/FrenteDasCartas/Doraemon/doraemon-13.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-14.png","Imagens/FrenteDasCartas/Doraemon/doraemon-14.png",
                         "Imagens/FrenteDasCartas/Doraemon/doraemon-15.png","Imagens/FrenteDasCartas/Doraemon/doraemon-15.png"]

const cartasVerdes = ["Imagens/FrenteDasCartas/TMNT/tmnt-1.png","Imagens/FrenteDasCartas/TMNT/tmnt-1.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-2.png","Imagens/FrenteDasCartas/TMNT/tmnt-2.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-3.png","Imagens/FrenteDasCartas/TMNT/tmnt-3.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-4.png","Imagens/FrenteDasCartas/TMNT/tmnt-4.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-5.png","Imagens/FrenteDasCartas/TMNT/tmnt-5.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-6.png","Imagens/FrenteDasCartas/TMNT/tmnt-6.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-7.png","Imagens/FrenteDasCartas/TMNT/tmnt-7.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-8.png","Imagens/FrenteDasCartas/TMNT/tmnt-8.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-9.png","Imagens/FrenteDasCartas/TMNT/tmnt-9.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-10.png","Imagens/FrenteDasCartas/TMNT/tmnt-10.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-11.png","Imagens/FrenteDasCartas/TMNT/tmnt-11.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-12.png","Imagens/FrenteDasCartas/TMNT/tmnt-12.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-13.png","Imagens/FrenteDasCartas/TMNT/tmnt-13.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-14.png","Imagens/FrenteDasCartas/TMNT/tmnt-14.png",
                         "Imagens/FrenteDasCartas/TMNT/tmnt-15.png","Imagens/FrenteDasCartas/TMNT/tmnt-15.png"]

const cartasCastanhas = ["Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-1.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-1.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-2.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-2.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-3.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-3.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-4.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-4.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-5.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-5.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-6.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-6.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-7.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-7.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-8.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-8.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-9.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-9.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-10.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-10.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-11.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-11.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-12.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-12.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-13.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-13.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-14.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-14.png",
                         "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-15.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-15.png"]

const cartasRosa = ["Imagens/FrenteDasCartas/Winx/winx-1.png","Imagens/FrenteDasCartas/Winx/winx-1.png",
                         "Imagens/FrenteDasCartas/Winx/winx-2.png","Imagens/FrenteDasCartas/Winx/winx-2.png",
                         "Imagens/FrenteDasCartas/Winx/winx-3.png","Imagens/FrenteDasCartas/Winx/winx-3.png",
                         "Imagens/FrenteDasCartas/Winx/winx-4.png","Imagens/FrenteDasCartas/Winx/winx-4.png",
                         "Imagens/FrenteDasCartas/Winx/winx-5.png","Imagens/FrenteDasCartas/Winx/winx-5.png",
                         "Imagens/FrenteDasCartas/Winx/winx-6.png","Imagens/FrenteDasCartas/Winx/winx-6.png",
                         "Imagens/FrenteDasCartas/Winx/winx-7.png","Imagens/FrenteDasCartas/Winx/winx-7.png",
                         "Imagens/FrenteDasCartas/Winx/winx-8.png","Imagens/FrenteDasCartas/Winx/winx-8.png",
                         "Imagens/FrenteDasCartas/Winx/winx-9.png","Imagens/FrenteDasCartas/Winx/winx-9.png",
                         "Imagens/FrenteDasCartas/Winx/winx-10.png","Imagens/FrenteDasCartas/Winx/winx-10.png",
                         "Imagens/FrenteDasCartas/Winx/winx-11.png","Imagens/FrenteDasCartas/Winx/winx-11.png",
                         "Imagens/FrenteDasCartas/Winx/winx-12.png","Imagens/FrenteDasCartas/Winx/winx-12.png",
                         "Imagens/FrenteDasCartas/Winx/winx-13.png","Imagens/FrenteDasCartas/Winx/winx-13.png",
                         "Imagens/FrenteDasCartas/Winx/winx-14.png","Imagens/FrenteDasCartas/Winx/winx-14.png",
                         "Imagens/FrenteDasCartas/Winx/winx-15.png","Imagens/FrenteDasCartas/Winx/winx-15.png"]

const cartasPretasTrios = ["Imagens/FrenteDasCartas/Spongebob/spongebob-1.png","Imagens/FrenteDasCartas/Spongebob/spongebob-1.png","Imagens/FrenteDasCartas/Spongebob/spongebob-1.png",
                           "Imagens/FrenteDasCartas/Spongebob/spongebob-2.png","Imagens/FrenteDasCartas/Spongebob/spongebob-2.png","Imagens/FrenteDasCartas/Spongebob/spongebob-2.png",
                           "Imagens/FrenteDasCartas/Spongebob/spongebob-3.png","Imagens/FrenteDasCartas/Spongebob/spongebob-3.png","Imagens/FrenteDasCartas/Spongebob/spongebob-3.png",
                           "Imagens/FrenteDasCartas/Spongebob/spongebob-4.png","Imagens/FrenteDasCartas/Spongebob/spongebob-4.png","Imagens/FrenteDasCartas/Spongebob/spongebob-4.png",
                           "Imagens/FrenteDasCartas/Spongebob/spongebob-5.png","Imagens/FrenteDasCartas/Spongebob/spongebob-5.png","Imagens/FrenteDasCartas/Spongebob/spongebob-5.png"]

const cartasLaranjasTrios = ["Imagens/FrenteDasCartas/Garfield/garfield-1.png","Imagens/FrenteDasCartas/Garfield/garfield-1.png","Imagens/FrenteDasCartas/Garfield/garfield-1.png",
                             "Imagens/FrenteDasCartas/Garfield/garfield-2.png","Imagens/FrenteDasCartas/Garfield/garfield-2.png","Imagens/FrenteDasCartas/Garfield/garfield-2.png",~
                             "Imagens/FrenteDasCartas/Garfield/garfield-3.png","Imagens/FrenteDasCartas/Garfield/garfield-3.png","Imagens/FrenteDasCartas/Garfield/garfield-3.png",
                             "Imagens/FrenteDasCartas/Garfield/garfield-4.png","Imagens/FrenteDasCartas/Garfield/garfield-4.png","Imagens/FrenteDasCartas/Garfield/garfield-4.png",
                             "Imagens/FrenteDasCartas/Garfield/garfield-5.png","Imagens/FrenteDasCartas/Garfield/garfield-5.png","Imagens/FrenteDasCartas/Garfield/garfield-5.png"]

const cartasVermelhasTrios = ["Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-1.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-1.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-1.png",
                              "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-2.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-2.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-2.png",
                              "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-3.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-3.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-3.png",
                              "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-4.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-4.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-4.png",
                              "Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-5.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-5.png","Imagens/FrenteDasCartas/Phineas and Ferb/phineasAndFerb-5.png"]

const cartasAzuisTrios = ["Imagens/FrenteDasCartas/Doraemon/doraemon-1.png","Imagens/FrenteDasCartas/Doraemon/doraemon-1.png","Imagens/FrenteDasCartas/Doraemon/doraemon-1.png",
                          "Imagens/FrenteDasCartas/Doraemon/doraemon-2.png","Imagens/FrenteDasCartas/Doraemon/doraemon-2.png","Imagens/FrenteDasCartas/Doraemon/doraemon-2.png",
                          "Imagens/FrenteDasCartas/Doraemon/doraemon-3.png","Imagens/FrenteDasCartas/Doraemon/doraemon-3.png","Imagens/FrenteDasCartas/Doraemon/doraemon-3.png",
                          "Imagens/FrenteDasCartas/Doraemon/doraemon-4.png","Imagens/FrenteDasCartas/Doraemon/doraemon-4.png","Imagens/FrenteDasCartas/Doraemon/doraemon-4.png",
                          "Imagens/FrenteDasCartas/Doraemon/doraemon-5.png","Imagens/FrenteDasCartas/Doraemon/doraemon-5.png","Imagens/FrenteDasCartas/Doraemon/doraemon-5.png"]

const cartasVerdesTrios = ["Imagens/FrenteDasCartas/TMNT/tmnt-1.png","Imagens/FrenteDasCartas/TMNT/tmnt-1.png","Imagens/FrenteDasCartas/TMNT/tmnt-1.png",
                           "Imagens/FrenteDasCartas/TMNT/tmnt-2.png","Imagens/FrenteDasCartas/TMNT/tmnt-2.png","Imagens/FrenteDasCartas/TMNT/tmnt-2.png",
                           "Imagens/FrenteDasCartas/TMNT/tmnt-3.png","Imagens/FrenteDasCartas/TMNT/tmnt-3.png","Imagens/FrenteDasCartas/TMNT/tmnt-3.png",
                           "Imagens/FrenteDasCartas/TMNT/tmnt-4.png","Imagens/FrenteDasCartas/TMNT/tmnt-4.png","Imagens/FrenteDasCartas/TMNT/tmnt-4.png",
                           "Imagens/FrenteDasCartas/TMNT/tmnt-5.png","Imagens/FrenteDasCartas/TMNT/tmnt-5.png","Imagens/FrenteDasCartas/TMNT/tmnt-5.png"]

const cartasCastanhasTrios = ["Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-1.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-1.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-1.png",
                              "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-2.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-2.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-2.png",
                              "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-3.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-3.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-3.png",
                              "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-4.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-4.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-4.png",
                              "Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-5.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-5.png","Imagens/FrenteDasCartas/Tom and Jerry/tomandjerry-5.png"]

const cartasRosaTrios = ["Imagens/FrenteDasCartas/Winx/winx-1.png","Imagens/FrenteDasCartas/Winx/winx-1.png","Imagens/FrenteDasCartas/Winx/winx-1.png",
                         "Imagens/FrenteDasCartas/Winx/winx-2.png","Imagens/FrenteDasCartas/Winx/winx-2.png","Imagens/FrenteDasCartas/Winx/winx-2.png",
                         "Imagens/FrenteDasCartas/Winx/winx-3.png","Imagens/FrenteDasCartas/Winx/winx-3.png","Imagens/FrenteDasCartas/Winx/winx-3.png",
                         "Imagens/FrenteDasCartas/Winx/winx-4.png","Imagens/FrenteDasCartas/Winx/winx-4.png","Imagens/FrenteDasCartas/Winx/winx-4.png",
                         "Imagens/FrenteDasCartas/Winx/winx-5.png","Imagens/FrenteDasCartas/Winx/winx-5.png","Imagens/FrenteDasCartas/Winx/winx-5.png"]

/************************************************************************************************************************************/

//var BTN_CASTANHO = document.getElementById('BtnCastanho');
var IMG_CASTANHO = 'Imagens/BerrysFinais/Berry,%20The%20Bear%20Castanho.png';
var IMG2_CASTANHO = 'Imagens/FundoDasCartas/Carta%20Castanha.png';

//var BTN_VERDE = document.getElementById('BtnVerde');
var IMG_VERDE = 'Imagens/BerrysFinais/Berry,%20The%20Bear%20Verde.png';
var IMG2_VERDE = 'Imagens/FundoDasCartas/Carta%20Verde.png';

//var BTN_ROSA = document.getElementById('BtnRosa');
var IMG_ROSA = 'Imagens/BerrysFinais/Berry,%20The%20Bear%20Rosa.png';
var IMG2_ROSA = 'Imagens/FundoDasCartas/Carta%20Rosa.png';

//var BTN_VERMELHO = document.getElementById('BtnVermelho');
var IMG_VERMELHO = 'Imagens/BerrysFinais/Berry,%20The%20Bear%20Vermelho.png';
var IMG2_VERMELHO = 'Imagens/FundoDasCartas/Carta%20Vermelha.png';

var BTN_LARANJA = document.getElementById('BtnLaranja');
var IMG_LARANJA = 'Imagens/BerrysFinais/Berry,%20The%20Bear%20Laranja.png';
var IMG2_LARANJA = 'Imagens/FundoDasCartas/Carta%20Laranja.png';

var BTN_AZUL = document.getElementById('BtnAzul');
var IMG_AZUL = 'Imagens/BerrysFinais/Berry,%20The%20Bear%20Base.png';
var IMG2_AZUL = 'Imagens/FundoDasCartas/Carta%20Azul.png';

var BTN_BRANCO = document.getElementById('BtnBranco');
var IMG_BRANCO = 'Imagens/BerrysFinais/Berry,%20The%20Bear%20Branco.png';
var IMG2_BRANCO = 'Imagens/FundoDasCartas/Carta%20Preta.png';


var IMG_BERRY = document.getElementById('CorBerry');

var IMG2_BERRY = document.getElementById('CartaCorBerry');



/************************************************************************************************************************************/
/**********************************************************/
function defineEventHandlerButtonsCores(){
    for (var i = 0; i<7; i++){
        document.getElementsByClassName('BtnCores')[i].addEventListener('click',mudarCor)
    }
    // for (var k = 0; k < 7; k++){
    //     document.getElementsByClassName('btnCores')[k].addEventListener('click', coresCartas)
    // }
}

function defineEventHandlerButtonsSingleMultiPlayer(){
    
    if (sessionStorage.getItem('Mobile') == "false"){
        document.getElementsByClassName('BtnPlayBox')[0].addEventListener('click',singlePlayerMapa)
        document.getElementsByClassName('BtnPlayBox')[0].removeEventListener('click',singlePlayerMobile)
    } else {
        document.getElementsByClassName('BtnPlayBox')[0].addEventListener('click',singlePlayerMobile)
        document.getElementsByClassName('BtnPlayBox')[0].removeEventListener('click',singlePlayerMapa)
    }
    
    document.getElementsByClassName('BtnPlayBox')[1].addEventListener('click',ClicarMultiPlayer)
}

function onLoad(){
    defineEventHandlerButtonsSingleMultiPlayer()
    defineEventHandlerButtonsCores()
    defineEventHandlerOptions()
    if (sessionStorage.getItem('Logged') == "false"){
        desaparecerPreGame()
        document.getElementById("FundoNaoLogado_Jogo").style.visibility= 'visible'
    }
}

function defineEventHandlerButtonsMapa(){
    document.getElementById('SairMapa').addEventListener('click',location.reload.bind(location))
}

function defineEventHandlersButtonsMiniMenu(){
    document.getElementById('BtnRecomeçar').addEventListener('click', jogar)
    document.getElementById('Multi_BtnRecomeçar').addEventListener('click', jogarMultiplayer)
    document.getElementById('BtnSair').addEventListener('click',location.reload.bind(location))
    document.getElementById('Multi_BtnSair').addEventListener('click',location.reload.bind(location))
    if (quantidade == 15){
        document.getElementById('BtnSubmeter').addEventListener('click', clicarCartasTrios)
    } else {
        document.getElementById('BtnSubmeter').addEventListener('click', clicarCartas)
        document.getElementById('Multi_BtnSubmeter').addEventListener('click', clicarCartas)
    }
    
}

function defineEventHandlersParaCartas(){
    if (quantidade == 15 && Trios == true){
        for (var k = 0; k<15; k++){
            document.getElementsByClassName('handlers')[k].addEventListener('click', clicarCartasTrios)
        }
    }
    else if (quantidade == 20){
        for (var k = 0; k<20; k++){
            document.getElementsByClassName('handlers')[k].addEventListener('click', clicarCartas)
        }
    } else if (quantidade == 30){
        for (var k = 0; k<30; k++){
            document.getElementsByClassName('handlers')[k].addEventListener('click', clicarCartas)
        }
    }
}

function removeEventHandlersParaCartas(){
    if (quantidade == 15){
        for (var k = 0; k<15; k++){
            document.getElementsByClassName('handlers')[k].removeEventListener('click', clicarCartasTrios)
        }
    }
    else if (quantidade == 20){
        for (var k = 0; k<20; k++){
            document.getElementsByClassName('handlers')[k].removeEventListener('click', clicarCartas)
        }
    } else if (quantidade == 30){
        for (var k = 0; k<30; k++){
            document.getElementsByClassName('handlers')[k].removeEventListener('click', clicarCartas)
        }
    }
}

function defineEventHandlerOptions(){
    document.getElementById('OptJogar').addEventListener('click', entrarNivel)
    document.getElementById('OptVoltar').addEventListener('click', voltarMapa)
}

function nCardSubmit(key){
    if (key.keyCode == 13){
        clicarCartas('Enter')
    }
}


window.addEventListener("load", onLoad)

/**********************************************************/

var audioClick = document.getElementById('audioClick');

var audioAcertar = document.getElementById('audioAcertar');

/**********************************************************/

function mudarCor(click){
    cor = click.srcElement.id
    switch (cor){
        case 'BtnBranco':
            COR_UTILIZADA = 'preto';
            document.getElementById('CorBerry').src = IMG_BRANCO;
            document.getElementById('CartaCorBerry').src = IMG2_BRANCO;
            break;
        case 'BtnVerde':
            COR_UTILIZADA = 'verde';
            document.getElementById('CorBerry').src = IMG_VERDE;
            document.getElementById('CartaCorBerry').src = IMG2_VERDE;
            break;
        case 'BtnVermelho':
            COR_UTILIZADA = 'vermelho';
            document.getElementById('CorBerry').src = IMG_VERMELHO;
            document.getElementById('CartaCorBerry').src = IMG2_VERMELHO;
            break;
        case 'BtnAzul':
            COR_UTILIZADA = 'azul';
            document.getElementById('CorBerry').src = IMG_AZUL;
            document.getElementById('CartaCorBerry').src = IMG2_AZUL;
            break;
        case 'BtnLaranja':
            COR_UTILIZADA = 'laranja';
            document.getElementById('CorBerry').src = IMG_LARANJA;
            document.getElementById('CartaCorBerry').src = IMG2_LARANJA;
            break;
        case 'BtnRosa':
            COR_UTILIZADA = 'rosa';
            document.getElementById('CorBerry').src = IMG_ROSA;
            document.getElementById('CartaCorBerry').src = IMG2_ROSA;
            break;
        case 'BtnCastanho':
            COR_UTILIZADA = 'castanho';
            document.getElementById('CorBerry').src = IMG_CASTANHO;
            document.getElementById('CartaCorBerry').src = IMG2_CASTANHO;
            break;
    }
}

function singlePlayer(){
    desaparecerPreGame()

    let IMG_SRC_MM = null;

    switch (COR_UTILIZADA){

        case "preto":
            IMG_SRC_MM = 'Imagens/BerrysFinais/Berry, The Bear Branco.png';
            break;
        case "laranja":
            IMG_SRC_MM = 'Imagens/BerrysFinais/Berry, The Bear Laranja.png';
            break;
        case "vermelho":
            IMG_SRC_MM = 'Imagens/BerrysFinais/Berry, The Bear Vermelho.png';
            break;
        case "azul":
            IMG_SRC_MM = 'Imagens/BerrysFinais/Berry, The Bear Base.png';
            break;
        case "verde":
            IMG_SRC_MM = 'Imagens/BerrysFinais/Berry, The Bear Verde.png';
            break;
        case "castanho":
            IMG_SRC_MM = 'Imagens/BerrysFinais/Berry, The Bear Castanho.png';
            break;
        case "rosa":
            IMG_SRC_MM = 'Imagens/BerrysFinais/Berry, The Bear Rosa.png';
            break;
    }
    document.getElementById("MM_IMG").src=IMG_SRC_MM;
    document.getElementsByClassName('miniMenu')[0].style.visibility='visible';
    jogar()
}

function singlePlayerMobile(){
    nivel = 1
    desaparecerMapa(1)
    singlePlayer()
}

function singlePlayerMapa(){
    console.log("aaaa")
    desaparecerPreGame() 
    defineEventHandlerButtonsMapa()

    document.getElementById('Mapa').style.visibility='visible'
}

function ClicarMultiPlayer(){
    nivel = 11
    desaparecerPreGame()
    desaparecerMapa(11)
    document.getElementsByClassName('Multi_miniMenu')[0].style.visibility='visible'
    jogarMultiplayer()

}

function showOption(){
    inMap = false
    document.getElementById('OptionsGame').style.visibility = 'visible'
}

function chooseOption(){
    let Cartas20Pares = document.getElementById('Cartas20Pares').checked
    let Cartas30Pares = document.getElementById('Cartas30Pares').checked
    let Cartas15Trios = document.getElementById('Cartas15Trios').checked
    let ContraRelogioChecker = document.getElementById('ContraRelogioChecker').checked
    if (Cartas20Pares == true){
        quantidade = 20
        Trios = false
        
    } else if (Cartas30Pares == true){
        quantidade = 30
        Trios = false
        
    } else if (Cartas15Trios == true){
        quantidade = 15
        Trios = true
        
    }

    if (ContraRelogioChecker == true){
        ContraRelogio = true
        
    } else {
        ContraRelogio = false
    }
}

function entrarNivel(){
    chooseOption()
    singlePlayer()
    desaparecerOptions()
    desaparecerMapa(nivel)
}

function voltarMapa(){
    inMap = true
    desaparecerOptions()
    singlePlayerMapa()

    
}

function desaparecerOptions(){
    document.getElementById('OptionsGame').style.visibility='hidden'
}

function lostGame(){
    jogoFinalizado = true
    desaparecerCartas()
    document.getElementsByClassName('endGame')[0].style.visibility='visible'
    document.getElementById("endPerdeste").innerHTML = "Perdeste, o tempo esgotou-se"
}

function endGame(){
    document.getElementsByClassName('endGame')[0].style.visibility='visible'
    document.getElementById('endTempo').innerHTML= counter + "s demorados"
    document.getElementById('endJogadas').innerHTML= nJogadas + " jogadas"

    clearInterval(timer)

    if (Trios == true){
        modo = "Trios"
    } else {
        modo = "Pares"
    }

    let finishedGame = [sessionStorage.currentUser, nJogadas, counter, modo, quantidade]
    storedSingleRanks = JSON.parse(localStorage.getItem('SingleRankings'))
    storedSingleRanks.push(finishedGame)
    localStorage.setItem('SingleRankings', JSON.stringify(storedSingleRanks))

    currentUser = sessionStorage.getItem("currentUser")
    storedUser = JSON.parse(localStorage.getItem(currentUser))
    if (storedUser.bestGames != null){
        storedUser.bestGames.push(finishedGame.slice(1,5))
    } else {
        storedUser.bestGames = [finishedGame.slice(1,5)]
    }

    let bestGames = storedUser.bestGames.sort(function(a,b){return a[1] - b[1]})

    for (var k = 1; k<11; k++){

        if (!(bestGames[k-1])){
            document.getElementById('Plays'+(k)).innerHTML = "----"
            document.getElementById('Time'+(k)).innerHTML = "----"
            document.getElementById('Modo'+(k)).innerHTML = "----"
            document.getElementById('Quantidade'+(k)).innerHTML = "----"
            
        } else {
            document.getElementById('Plays'+(k)).innerHTML = bestGames[k-1][0]
            document.getElementById('Time'+(k)).innerHTML = bestGames[k-1][1]
            document.getElementById('Modo'+(k)).innerHTML = bestGames[k-1][2]
            document.getElementById('Quantidade'+(k)).innerHTML = bestGames[k-1][3]
            
        }
        
    }
    toStoreBestaGames = bestGames
    if (bestGames.length > 10){
        toStoreBestGames = bestGames.slice(0,10)
    }

    storedUser.bestGames = toStoreBestGames

    localStorage.setItem(currentUser, JSON.stringify(storedUser))


}

function MultiEndGame(){
    document.getElementsByClassName('Multi_endGame')[0].style.visibility='visible'
    document.getElementById('MultiEnd_PlayerName').innerHTML = sessionStorage.getItem('currentUser')
    document.getElementById('MultiEnd_PlayerPairs').innerHTML = jogador1Pares
    document.getElementById('MultiEnd_GuestName').innerHTML = "Oponent"
    document.getElementById('MultiEnd_GuestPairs').innerHTML = jogador2Pares
}

function desaparecerCartas(){
    for (var p = 0; p<quantidade; p++){
        document.getElementsByClassName('handlers')[p].style.visibility='hidden'
        document.getElementById('n'+(p+1)).style.visibility='hidden'
    }
}

function desaparecerEndGame(){
    document.getElementsByClassName('endGame')[0].style.visibility='hidden'
}

function despararecerEndGameMulti(){
    document.getElementsByClassName('Multi_endGame')[0].visibility='hidden'
}

function desaparecerPreGame(){
    document.getElementById('PreGame').style.visibility='hidden'
    // for (var i= 0; i<14; i++){
    //     document.getElementsByClassName('PreGame_IMG')[i].style.visibility='hidden'
    // }
    inMap = true
}

function desaparecerMapa(nivel){

    switch (nivel){
        case 1:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro1.png'
            break
        case 2:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro2.png'
            break
        case 3:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro3.png'
            break
        case 4:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro4.png'
            break
        case 5:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro5.png'
            break
        case 6:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro6.png'
            break
        case 7:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro7.png'
            break
        case 8:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro8.png'
            break
        case 9:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro9.png'
            break
        case 10:
            document.getElementById('imgTabuleiro').src = 'Imagens/Tabuleiro/Tabuleiro10.png'
            break
        case 11:
            document.getElementById('imgTabuleiro').src= 'Imagens/Tabuleiro/TabuleiroM.png'
    }
    
    document.getElementById('Mapa').style.visibility ='hidden'
    inMap = false

    document.getElementById('imgTabuleiro').style.visibility = 'visible'
}

function jogar(){
    multiPlayer = false
    cartasPosicionadas = null;
    paresCompletos = 0
    vez = "jogador1"
    jogador1Pares = 0
    jogador2Pares = 0
    Trios = false
    CARTA_VIRADA = false
    CARTAS_VIRADAS = 0
    reiniciarJogo = true
    jogoFinalizado = false
    cartasGanhas = []
    StartDate = new Date().getTime()

    //if se o jogo for 20 ou 30 cartas, normal
    taparCartas()
    atribuirCartas();
    displayName()
    jogadas()
    desaparecerEndGame()
    defineEventHandlersParaCartas();
    defineEventHandlersButtonsMiniMenu()


    if (ContraRelogio == true){
        displayTempoContra()
        timer = setInterval(CounterContra, 1000)
    } else {
        displayTempo()
        timer = setInterval(Counter,1000)
    }
    
}

function jogarMultiplayer(){
    multiPlayer = true
    cartasPosicionadas = null
    paresCompletos = 0
    CARTA_VIRADA = false
    reiniciarJogo = true
    jogoFinalizado = false
    cartasGanhas = []
    jogador1Pares = 0
    jogador2Pares = 0
    vez = "jogador1"

    taparCartas()
    atribuirCartas()
    despararecerEndGameMulti()
    displayName()
    jogadas()
    displayPares()
    defineEventHandlersParaCartas()
    defineEventHandlersButtonsMiniMenu()
}


function atribuirCartas(){
    var cartasPos = []
    reiniciarJogo = false
    nJogadas = 0
    if (quantidade == 15){
        switch (COR_UTILIZADA){
            case "preto":
                cartas = Array.from(cartasPretasTrios.slice(0,15));
                break;
            case "laranja":
                cartas = Array.from(cartasLaranjasTrios.slice(0,15));
                break;
            case "vermelho":
                cartas = Array.from(cartasVermelhasTrios.slice(0,15));
                break;
            case "azul":
                cartas = Array.from(cartasAzuisTrios.slice(0,15));
                break;
            case "verde":
                cartas = Array.from(cartasVerdesTrios.slice(0,15));
                break;
            case "castanho":
                cartas = Array.from(cartasCastanhasTrios.slice(0,15));
                break;
            case "rosa":
                cartas = Array.from(cartasRosaTrios.slice(0,15));
                break;
        }

        
        
        for (var i = 0; i<15; i++){

            let pos = Math.floor(Math.random()*(cartas.length));
            
            cartasPos.push(cartas[pos]);

            cards['c' + String(i + 1)] = cartas[pos]
            
            cartas.splice(pos,1);

        }
    } else if (quantidade == 20){
        switch (COR_UTILIZADA){
            case "preto":
                cartas = Array.from(cartasPretas.slice(0,20));
                break;
            case "laranja":
                cartas = Array.from(cartasLaranjas.slice(0,20));
                break;
            case "vermelho":
                cartas = Array.from(cartasVermelhas.slice(0,20));
                break;
            case "azul":
                cartas = Array.from(cartasAzuis.slice(0,20));
                break;
            case "verde":
                cartas = Array.from(cartasVerdes.slice(0,20));
                break;
            case "castanho":
                cartas = Array.from(cartasCastanhas.slice(0,20));
                break;
            case "rosa":
                cartas = Array.from(cartasRosa.slice(0,20));
                break;
        }

        
        
        for (var i = 0; i<20; i++){

            let pos = Math.floor(Math.random()*(cartas.length));
            
            cartasPos.push(cartas[pos]);

            cards['c' + String(i + 1)] = cartas[pos]
            
            cartas.splice(pos,1);

        }

    } else if(quantidade == 30){
        switch (COR_UTILIZADA){
            case "preto":
                cartas = Array.from(cartasPretas.slice(0,30));
                break;
            case "laranja":
                cartas = Array.from(cartasLaranjas.slice(0,30));
                break;
            case "vermelho":
                cartas = Array.from(cartasVermelhas.slice(0,30));
                break;
            case "azul":
                cartas = Array.from(cartasAzuis.slice(0,30));
                break;
            case "verde":
                cartas = Array.from(cartasVerdes.slice(0,30));
                break;
            case "castanho":
                cartas = Array.from(cartasCastanhas.slice(0,30));
                break;
            case "rosa":
                cartas = Array.from(cartasRosa.slice(0,30));
                break;
        }
    
        
        
        for (var i = 0; i<30; i++){
    
            let pos = Math.floor(Math.random()*(cartas.length));
            
            cartasPos.push(cartas[pos]);
    
            cards['c' + String(i + 1)] = cartas[pos]
            
            cartas.splice(pos,1);
    
        }
    }

    cartasPosicionadas = cartasPos
}



function clicarCartasTrios(click){
    if (sessionStorage.getItem('Audio') == "true"){
        document.getElementById('audioClick').play()
    }

    if (click == "Enter"){
        pos = document.getElementById('nCard').value - 1
        cardId = 'c' + document.getElementById('nCard').value
        document.getElementById('nCard').value = ""
    } else if(click.srcElement.id != 'BtnSubmeter'){
        pos = click.srcElement.id.slice(1)-1
        cardId = click.srcElement.id
    } else {
        pos = document.getElementById('nCard').value - 1
        cardId = 'c' + document.getElementById('nCard').value
        document.getElementById('nCard').value = ""
    }
    if (!(cartasGanhas.includes(cardId))){
        document.getElementById(cardId).src=cartasPosicionadas[pos];
        
        
        removeEventHandlersParaCartas()
        
        setTimeout(function(){
            if (CARTAS_VIRADAS == 0){
                
                
                cartaUtilizada1 = (' ' + cardId).slice(1)
                numeroUtilizado1 = ('n' + (' ' + cardId).slice(2))
                CARTAS_VIRADAS = 1
            } else if (CARTAS_VIRADAS == 1 && cardId != cartaUtilizada1) {
                
                cartaUtilizada2 = (' ' + cardId).slice(1)
                numeroUtilizado2 = ('n' + (' ' + cardId).slice(2))
                CARTAS_VIRADAS = 2

            } else if (CARTAS_VIRADAS == 2 && cardId != cartaUtilizada1 && cardId != cartaUtilizada2) {
                
                
                
                if ((cards[cardId] === cards[cartaUtilizada1] && cards[cardId] === cards[cartaUtilizada2])){
                    

                    document.getElementById(cartaUtilizada1).style.visibility='hidden'
                    document.getElementById(cartaUtilizada2).style.visibility='hidden'
                    document.getElementById(cardId).style.visibility='hidden'

                    document.getElementById(('n' + (' ' + cardId).slice(2))).style.visibility='hidden'
                    document.getElementById(numeroUtilizado1).style.visibility='hidden'
                    document.getElementById(numeroUtilizado2).style.visibility='hidden'

                    cartasGanhas.push(cartaUtilizada2)
                    cartasGanhas.push(cartaUtilizada1)
                    cartasGanhas.push(cardId)

                    

                    CARTAS_VIRADAS = 0
                    nJogadas += 1
                    jogadas()
                    triosCompletos += 1

                    if (sessionStorage.getItem('Audio') == "true"){
                        document.getElementById('audioAcertar').play()
                    }

                } else {
                    
                    nJogadas += 1
                    CARTAS_VIRADAS = 0

                    jogadas()
                    taparCartas()
                }
               
                if (triosCompletos == 5){
                    
                    clearInterval(timer)
                    jogoFinalizado = true
                    endGame()
                }
            }
            defineEventHandlersParaCartas()
        }, velocidade);
    }
}

function clicarCartas(click){
    if (sessionStorage.getItem('Audio') == "true"){
        document.getElementById('audioClick').play()
    }
    if (multiPlayer == false){
        if (click == "Enter"){
            pos = document.getElementById('nCard').value - 1
            cardId = 'c' + document.getElementById('nCard').value
            document.getElementById('nCard').value = ""
        } else if(click.srcElement.id != 'BtnSubmeter'){
            pos = click.srcElement.id.slice(1)-1
            cardId = click.srcElement.id
        } else {
            pos = document.getElementById('nCard').value - 1
            cardId = 'c' + document.getElementById('nCard').value
            document.getElementById('nCard').value = ""
        }
    } else if (multiPlayer == true){
        if (click == "Enter"){
            pos = document.getElementById('Multi_nCard').value - 1
            cardId = 'c' + document.getElementById('Multi_nCard').value
            document.getElementById('Multi_nCard').value = ""
        } else if(click.srcElement.id != 'Multi_BtnSubmeter'){
            pos = click.srcElement.id.slice(1)-1
            cardId = click.srcElement.id
            
        } else {
            pos = document.getElementById('Multi_nCard').value - 1
            cardId = 'c' + document.getElementById('Multi_nCard').value
            document.getElementById('Multi_nCard').value = ""
        }
    }
    

    

    if (!(cartasGanhas.includes(cardId))){
        document.getElementById(cardId).src=cartasPosicionadas[pos];


        removeEventHandlersParaCartas()
        setTimeout(function(){ 
            if (CARTA_VIRADA === false){

                cartaUtilizada = (' ' + cardId).slice(1)
                numeroUtilizado = ('n' + (' ' + cardId).slice(2))
                CARTA_VIRADA = true

            } else {
                
                
                if (cardId == cartaUtilizada){
                } else if ((cards[cardId] === cards[cartaUtilizada]) && (cardId != cartaUtilizada)) {

                    document.getElementById(cartaUtilizada).style.visibility='hidden'
                    document.getElementById(cardId).style.visibility='hidden'

                    document.getElementById(('n' + (' ' + cardId).slice(2))).style.visibility='hidden'
                    document.getElementById(numeroUtilizado).style.visibility='hidden'

                    cartasGanhas.push(cartaUtilizada)
                    cartasGanhas.push(cardId)


                    CARTA_VIRADA = false
                    nJogadas += 1
                    jogadas()

                    paresCompletos += 1
                    if (multiPlayer == true) {
                        if (vez == "jogador1"){
                            jogador1Pares += 1
                        } else if (vez == "jogador2"){
                            jogador2Pares += 1
                        }
                    }
                    displayPares()
                    

                    if (sessionStorage.getItem('Audio') == "true"){
                        document.getElementById('audioAcertar').play()
                    }
                } else {

                    nJogadas += 1
                    CARTA_VIRADA = false
                    
                    if (multiPlayer == true){
                        if (vez == "jogador1"){
                            vez = "jogador2"
                        } else if (vez == "jogador2"){
                            vez = "jogador1"
                        }
                    }
                    

                    jogadas()
                    taparCartas()
                }
                if (quantidade === 30 && paresCompletos === 15){
                    clearInterval(timer)
                    jogoFinalizado = true
                    endGame()
                }

                if (quantidade === 20 && paresCompletos === 10){
                    clearInterval(timer)
                    jogoFinalizado = true
                    if (multiPlayer == false){
                        endGame()
                    } else {
                        MultiEndGame()
                    }
                    
                }
            }
            defineEventHandlersParaCartas()
        }, velocidade);
    }
}

function taparCartas(){
    if (quantidade == 15){
        switch (COR_UTILIZADA){
            case "preto":
                for (var k = 0; k<15; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Preta.png"
                }
                break;
            case "laranja":
                for (var k = 0; k<15; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Laranja.png"   
                }
                break;
            case "vermelho":
                for (var k = 0; k<15; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Vermelha.png"   
                }
                break;
            case "azul":
                for (var k = 0; k<15; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Azul.png"   
                }
                break;
            case "verde":
                for (var k = 0; k<15; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Verde.png"   
                }
                break;
            case "castanho":
                for (var k = 0; k<15; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Castanha.png"   
                }
                break;
            case "rosa":
                for (var k = 0; k<15; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Rosa.png"   
                }
                break;
        }

        if (reiniciarJogo === true){
            for (var k = 0; k<15; k++){
                document.getElementsByClassName('handlers')[k].style.visibility='visible'
                document.getElementById('n'+(k+1)).style.visibility='visible'
            }
        }
    } else if (quantidade == 20){
        switch (COR_UTILIZADA){
            case "preto":
                for (var k = 0; k<20; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Preta.png"
                }
                break;
            case "laranja":
                for (var k = 0; k<20; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Laranja.png"   
                }
                break;
            case "vermelho":
                for (var k = 0; k<20; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Vermelha.png"   
                }
                break;
            case "azul":
                for (var k = 0; k<20; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Azul.png"   
                }
                break;
            case "verde":
                for (var k = 0; k<20; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Verde.png"   
                }
                break;
            case "castanho":
                for (var k = 0; k<20; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Castanha.png"   
                }
                break;
            case "rosa":
                for (var k = 0; k<20; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Rosa.png"   
                }
                break;
        }

        if (reiniciarJogo === true){
            for (var k = 0; k<20; k++){
                document.getElementsByClassName('handlers')[k].style.visibility='visible'
                document.getElementById('n'+(k+1)).style.visibility='visible'
            }
        }
    } else if (quantidade == 30){
        switch (COR_UTILIZADA){
            case "preto":
                for (var k = 0; k<30; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Preta.png"
                }
                break;
            case "laranja":
                for (var k = 0; k<30; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Laranja.png"   
                }
                break;
            case "vermelho":
                for (var k = 0; k<30; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Vermelha.png"   
                }
                break;
            case "azul":
                for (var k = 0; k<30; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Azul.png"   
                }
                break;
            case "verde":
                for (var k = 0; k<30; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Verde.png"   
                }
                break;
            case "castanho":
                for (var k = 0; k<30; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Castanha.png"   
                }
                break;
            case "rosa":
                for (var k = 0; k<30; k++){
                    document.getElementsByClassName('handlers')[k].src="Imagens/FundoDasCartas/Carta Rosa.png"   
                }
                break;
        }

        if (reiniciarJogo === true){
            for (var k = 0; k<30; k++){
                document.getElementsByClassName('handlers')[k].style.visibility='visible'
                document.getElementById('n'+(k+1)).style.visibility='visible'
            }
        }
    }
}


function CounterContra(){
    let currentTime = new Date().getTime()

    counter = Math.round((currentTime - StartDate) /1000 , 0)

    contraCounter = 45 - counter

    displayTempoContra()

    if (contraCounter == 0){
        clearInterval(timer)
        lostGame()
    }
}


function Counter(){

    let currentTime = new Date().getTime()
    
    counter = Math.round((currentTime - StartDate) /1000 , 0)

    displayTempo()
}

function jogadas(){
    document.getElementById('aJogadas').innerHTML= "Jogadas: " + nJogadas;
    document.getElementById('Multi_totalJogadas').innerHTML= "Jogadas: " + nJogadas;
}

function displayTempo(){
    document.getElementById('aTempo').innerHTML = "Tempo: " + counter + "s"
}

function displayTempoContra(){
    document.getElementById('aTempo').innerHTML = "Tempo: " + contraCounter + "s"
}

function displayName(){
    document.getElementById('NamePlayer').innerHTML = sessionStorage.getItem('currentUser')
    document.getElementById('Multi_NamePlayer').innerHTML = sessionStorage.getItem('currentUser')
    document.getElementById('Multi_NamePlayer_Guest').innerHTML = "Oponent"
}

function displayPares(){
    document.getElementById('Multi_Player_Pairs').innerHTML = sessionStorage.getItem('currentUser') + ": " + jogador1Pares + " Pares"
    document.getElementById('Multi_Guest_Pairs').innerHTML = "Oponent: " + jogador2Pares + " Pares"
}

//----------------------------------------------------//



