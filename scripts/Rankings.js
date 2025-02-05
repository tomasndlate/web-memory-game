/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */
/****************************************************/
if (!(localStorage.SingleRankings)){
    localStorage.setItem("SingleRankings", JSON.stringify([]))
}

function createSingleTable(){
    storedSingleRanks =  JSON.parse(localStorage.getItem('SingleRankings'))
    storedSingleRanks.sort(function(a,b){return a[1] - b[1]})
    for (var k = 0; k<10; k++){
        
        if (!(storedSingleRanks[k])){
            document.getElementById('Name'+(k+1)).innerHTML = "----"
            document.getElementById('Plays'+(k+1)).innerHTML = "----"
            document.getElementById('Time'+(k+1)).innerHTML = "----"
        } else {
            document.getElementById('Name'+(k+1)).innerHTML = storedSingleRanks[k][0]
            document.getElementById('Plays'+(k+1)).innerHTML = storedSingleRanks[k][1]
            document.getElementById('Time'+(k+1)).innerHTML = storedSingleRanks[k][2]
        }
        
    }
    
    if (storedSingleRanks.length > 10){
        storedSingleRanks = storedSingleRanks.slice(0,10)
    }
    localStorage.setItem('SingleRankings', JSON.stringify(storedSingleRanks))
}