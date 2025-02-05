/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */

(function(){
    //testeSpr();
    
    //Variaveis
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");

    var cenario = new Image();
    cenario.src = "Imagens/MapaImgs/Mapa.jpg";

    //Arvores

    var arvoImg = new Image();
    arvoImg.src = "Imagens/MapaImgs/Arvore.png";

    var folhasImg = new Image();
    folhasImg.src = "Imagens/MapaImgs/ArvoreFolhas.png";

    var arvore1 = new Personagem(443,137, 70, 80, arvoImg);
    var arvore2 = new Personagem(454,88, 70, 80, arvoImg);
    var arvore3 = new Personagem(454,44, 70, 80, arvoImg);
    var arvore4 = new Personagem(521,120, 70, 80, folhasImg);

    var TemploImg = new Image();
    TemploImg.src = "Imagens/MapaImgs/Templo.png";

    var templo = new Personagem(363,49, 100, 100, TemploImg);

  

    cnv.fillStyle

    //alert(ctx);

    //Teclas (Left - A; Right - D; Up - W; Down - S)
    var LEFT = 65;
    var RIGHT = 68;
    var UP = 87;
    var DOWN = 83;

    var ENTER = 13;

    //Movimentos
    var movLeft = movRight = movUp = movDown = false;

    //Enter
    var enter= false;

    //Vetores - "Coleções" - Array
    var sprites = [];
    var blocks = [];

    //Objetos
    var perImg = new Image();

    function perSrc(){
        switch (COR_UTILIZADA){
            case "preto":
                perImg.src = "Imagens/MapaImgs/Berry_Branco.png"
                break;
            case "laranja":
                perImg.src = "Imagens/MapaImgs/Berry_Laranja.png"
                break;
            case "vermelho":
                perImg.src = "Imagens/MapaImgs/Berry_Vermelho.png"
                break;
            case "azul":
                perImg.src = "Imagens/MapaImgs/Berry_Azul.png"
                break;
            case "verde":
                perImg.src = "Imagens/MapaImgs/Berry_Verde.png"
                break;
            case "castanho":
                perImg.src = "Imagens/MapaImgs/Berry_Castanho.png"
                break;
            case "rosa":
                perImg.src = "Imagens/MapaImgs/Berry_Rosa.png"
                break;
        }
    
    }
    //perImg.src = "Imagens/MapaImgs/Berry.png";

    


    //var personagem = new Sprite(173, 80, 20, 40, "#00f", true);
    //var personagem = new Personagem(173,80, 20, 40, perImg);
    var personagem = new Personagem(173,80, 20, 40, perImg);
    personagem.velocidade = 2;

    //alert(personagem);
    //Chamar a cor
    //alert(personagem.color);

    //------------------------------
    //Barreiras - 'rgba(255, 255, 255, 0)' - Transparente
    var Lim1 = new Sprite(163, 70, 40, 10, 'rgba(255, 255, 255, 0)' , true);
    var Lim2 = new Sprite(163, 80, 10, 190, 'rgba(255, 255, 255, 0)', true); 
    var Lim3 = new Sprite(193, 80, 77, 140, 'rgba(255, 255, 255, 0)', true);
    var Lim4 = new Sprite(173, 260, 77, 70, 'rgba(255, 255, 255, 0)', true);
    var Lim5 = new Sprite(270, 210, 90, 74, 'rgba(255, 255, 255, 0)', true);
    var Lim6 = new Sprite(250, 324, 130, 74, 'rgba(255, 255, 255, 0)', true);
    var Lim7 = new Sprite(380, 283, 122, 136, 'rgba(255, 255, 255, 0)', true); 
    var Lim8 = new Sprite(360, 80, 142, 164, 'rgba(255, 255, 255, 0)', true);
    var Lim9 = new Sprite(502, 130, 80, 42, 'rgba(255, 255, 255, 0)n', true);
    var Lim10 = new Sprite(502, 419, 65, 70, 'rgba(255, 255, 255, 0)', true);
    var Lim11 = new Sprite(567, 489, 107, 70, 'rgba(255, 255, 255, 0)', true);
    var Lim12 = new Sprite(674, 530, 21, 20, 'rgba(255, 255, 255, 0)', true); 
    var Lim13 = new Sprite(693, 450, 21, 90, 'rgba(255, 255, 255, 0)', true);
    var Lim14 = new Sprite(587, 341, 125, 109, 'rgba(255, 255, 255, 0)', true);
    var Lim15 = new Sprite(522, 212, 45, 167, 'rgba(255, 255, 255, 0)', true);
    var Lim16 = new Sprite(567, 212, 75, 90, 'rgba(255, 255, 255, 0)', true);
    var Lim17 = new Sprite(642, 275, 127, 27, 'rgba(255, 255, 255, 0)', true); 
    var Lim18 = new Sprite(673, 302, 40, 39, 'rgba(255, 255, 255, 0)', true);
    var Lim19 = new Sprite(662, 212, 87, 24, 'rgba(255, 255, 255, 0)', true);
    var Lim20 = new Sprite(603, 80, 72, 92, 'rgba(255, 255, 255, 0)', true); 
    var Lim21 = new Sprite(662, 171, 13, 42, 'rgba(255, 255, 255, 0)', true);
    var Lim22 = new Sprite(769, 212, 75, 90, 'rgba(255, 255, 255, 0)', true);
    var Lim23 = new Sprite(695, 80, 151, 92, 'rgba(255, 255, 255, 0)', true);
    var Lim24 = new Sprite(820, 171, 24, 42, 'rgba(255, 255, 255, 0)', true);
    var Lim25 = new Sprite(673, 80, 20, 27, 'rgba(255, 255, 255, 0)', true);
    var Lim26 = new Sprite(603, 40, 10, 40, 'rgba(255, 255, 255, 0)', true);
    var Lim27 = new Sprite(400, 30, 213, 10, 'rgba(255, 255, 255, 0)', true);
    var Lim28 = new Sprite(400, 40, 10, 40, 'rgba(255, 255, 255, 0)', true);


    //------------------------------ Meme ------------------------------//

    var andaX;
    var posX;
    var vel;
    //var meme;
    //var audio;
    var tempoLoop;

    var cor;

    var cores = ["#FF00E9","#F4FF00","cyan","#BC00FF","#FF1600","#002CFF"];
    cor = document.getElementById("mudaCor");

    audio = document.getElementById('audioMeme');
    audio.volume=0.1;

    meme = document.getElementById("Meme");

    function iniciarMeme(){

        posX=-150;
        vel=2;
        andaX=1;

        audio.play()
        meme.style.visibility="visible";
        cor.style.visibility="visible";
        tempoLoop=setInterval(enterFrame,20); 
    }

    function mudaCor(){
        var proximoIndex = Math.floor(Math.random() * cores.length);
        if (cor.style.backgroundColor == cores[proximoIndex]){
            if (proximoIndex == cores.length){
            cor.style.backgroundColor = cores[proximoIndex-1];
            }
            else{
                cor.style.backgroundColor = cores[proximoIndex+1];
            }
        }
        else{
            cor.style.backgroundColor = cores[proximoIndex];
        }
    }

    function pararMeme(){
        andaX=0;
        posX=-150;
        meme.style.visibility="hidden";
        cor.style.visibility="hidden";

    }

    function enterFrame(){

        posX += andaX * vel;

        meme.style.marginLeft = posX + "px";

        var memePx= Number(meme.style.marginLeft.replace("px",""));

        if (memePx == 100){mudaCor()}
        else if (memePx == 150){mudaCor()}
        else if (memePx == 200){mudaCor()}
        else if (memePx == 250){mudaCor()}
        else if (memePx == 300){mudaCor()}
        else if (memePx == 350){mudaCor()}
        else if (memePx == 400){mudaCor()}
        else if (memePx == 450){mudaCor()}
        else if (memePx == 500){mudaCor()}
        else if (memePx == 550){mudaCor()}
        else if (memePx == 600){mudaCor()}
        else if (memePx == 650){mudaCor()}
        else if (memePx == 700){mudaCor()}
        else if (memePx == 750){mudaCor()}
        else if (memePx == 800){mudaCor()}
        else if (memePx == 850){mudaCor()}
        else if (memePx == 900){mudaCor()}
        else if (memePx == 950){mudaCor()}
        else if (memePx == 1000){mudaCor()}
        else if (memePx == 1100){mudaCor()}
        else if (memePx == 1200){mudaCor()}
        else if (memePx == 1300){mudaCor()}

        if (memePx> 1920){
            pararMeme()
            meme.style.marginLeft="-150px";
        }
    }
    //------------------------------------------------------------------//

    //Juntar ao dicionário (push = "append()")
    //Sprites
    //sprites.push(personagem);
    //------------------------
    sprites.push(Lim1,Lim2,Lim3,Lim4,Lim5,
        Lim6,Lim7,Lim8,Lim9,Lim10,
        Lim11,Lim12,Lim13,Lim14,Lim15,
        Lim16,Lim17,Lim18,Lim19,Lim20,
        Lim21,Lim22,Lim23,Lim24,Lim25,
        Lim26,Lim27,Lim28);

    //Blocks
    blocks.push(Lim1,Lim2,Lim3,Lim4,Lim5,
        Lim6,Lim7,Lim8,Lim9,Lim10,
        Lim11,Lim12,Lim13,Lim14,Lim15,
        Lim16,Lim17,Lim18,Lim19,Lim20,
        Lim21,Lim22,Lim23,Lim24,Lim25,
        Lim26,Lim27,Lim28);

    //------------------------------

    //Entradas
    window.addEventListener("keydown", function(e){
        var key = e.keyCode

        switch(key){
            case LEFT:
                movLeft = true;
                break;
            case RIGHT:
                movRight = true;
                break;
            case UP:
                movUp = true;
                break;
            case DOWN:
                movDown = true;
                break;
            case ENTER:
                enter = true;
                break;

        }
        //alert(key)
    },false); //Dispara um função qnd tecla é precionada


    window.addEventListener("keyup", function(e){
        var key = e.keyCode

        switch(key){
            case LEFT:
                movLeft = false;
                break;
            case RIGHT:
                movRight = false;
                break;
            case UP:
                movUp = false;
                break;
            case DOWN:
                movDown = false;
                break;
            case ENTER:
                enter = false;
                break;
        }
        //alert(key)
    },false); //Dispara um função qnd tecla é precionada




    //funções
    function loop(){
        perSrc()
        window.requestAnimationFrame(loop,cnv);
        if (inMap == true){
            update();
            render();
        }
    }

    function update(){
        if(movLeft && !movRight){ //movLeft (true) && !movRight(!false = true), (!=negação)
            personagem.posX -= personagem.velocidade;
        }

        if(movRight && !movLeft){ //movRight (true) && !movLeft(!false = true), (!=negação)
            personagem.posX += personagem.velocidade;
        }

        if(movUp && !movDown){ //movUp (true) && !movDown(!false = true), (!=negação)
            personagem.posY -= personagem.velocidade;
        }

        if(movDown && !movUp){ //movDown (true) && !movUp(!false = true), (!=negação)
            personagem.posY += personagem.velocidade;
        }

        //Primeiro nível
        if (enter){
            if(personagem.posX > 170 && personagem.posX < 190 && personagem.posY > 205 && personagem.posY < 225){
                //#ir para 1º nível
                enter=false;
                nivel = 1
                showOption()
            }

            //Segundo nível x360 y243
            if(personagem.posX > 350 && personagem.posX < 370 && personagem.posY > 235 && personagem.posY < 255){
                //#ir para 2º nível
                
                enter=false;
                nivel = 2
                showOption()
            }

            //Terceiro nível x502 y290
            if(personagem.posX > 490 && personagem.posX < 510 && personagem.posY > 290 && personagem.posY < 325){
                //#ir para 3º nível
                
                enter=false;
                nivel = 3
                showOption()
            }

            //Quarto nível x567 y415
            if(personagem.posX > 560 && personagem.posX < 580 && personagem.posY > 410 && personagem.posY < 443){
                
                enter=false;
                nivel = 4
                showOption()
            }

            //Quinto nível x674 y490
            if(personagem.posX > 670 && personagem.posX < 680 && personagem.posY > 470 && personagem.posY < 500){
                
                enter=false;
                nivel = 5
                showOption()
            }

            //Sexto nível x640 y302
            if(personagem.posX > 635 && personagem.posX < 670 && personagem.posY > 290 && personagem.posY < 310){
                
                enter=false;
                nivel = 6
                showOption()
            }

            //Sétimo nível x502 y183
            if(personagem.posX > 490 && personagem.posX < 520 && personagem.posY > 170 && personagem.posY < 195){
                
                enter=false;
                nivel = 7
                showOption()
            }

            //Oitavo nível x640 y250
            if(personagem.posX > 640 && personagem.posX < 665 && personagem.posY > 220 && personagem.posY < 270){

                enter=false;
                nivel = 8
                showOption()
            }

            //Nono nível x800 y170
            if(personagem.posX > 785 && personagem.posX < 810 && personagem.posY > 160 && personagem.posY < 180){
                
                enter=false;
                nivel = 9
                showOption()
            }

            //Décimo x675 y175
            if(personagem.posX > 660 && personagem.posX < 680 && personagem.posY > 100 && personagem.posY < 135){
                
                enter=false;
                nivel = 10
                showOption()
            }

            //EasterEgg x410 y40
            if(personagem.posX > 400 && personagem.posX < 430 && personagem.posY > 30 && personagem.posY < 50){
                iniciarMeme();
                enter=false;
                //#ir para EasterEgg
            }

        }   

        //Math.max - devolve o maior valor (comparação)
        //Definir os limites do mapa X
        personagem.posX = Math.max(0,personagem.posX);
        personagem.posX = Math.min(cnv.width-personagem.width, personagem.posX);

        //Definir os limites do mapa Y
        personagem.posY = Math.max(0,personagem.posY);
        personagem.posY = Math.min(cnv.height-personagem.height, personagem.posY);
            

        //Colisões
        for(var i in blocks){
            var blk = blocks[i];
            blockRect(personagem,blk);
        }

    }

    //Função para desenhar os elementos na tela
    function render(){
        ctx.clearRect(0,0,cnv.width, cnv.height);

        ctx.drawImage(cenario,0,0,cenario.width,cenario.height,0,0,cnv.width,cnv.height);

        ctx.drawImage(personagem.img, personagem.posX, personagem.posY, personagem.width, personagem.height);


        ctx.drawImage(templo.img, templo.posX, templo.posY, templo.width, templo.height);

        ctx.drawImage(arvore4.img, arvore4.posX, arvore4.posY, arvore4.width, arvore4.height);

        ctx.drawImage(arvore3.img, arvore3.posX, arvore3.posY, arvore3.width, arvore3.height);
        
        ctx.drawImage(arvore2.img, arvore2.posX, arvore2.posY, arvore2.width, arvore2.height);
        
        ctx.drawImage(arvore1.img, arvore1.posX, arvore1.posY, arvore1.width, arvore1.height);
        

        //corre o dicionário
        for(var i in sprites){

            var spr = sprites[i];

            ctx.fillStyle = spr.color;

            //guardados no método construtor
            ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
            
        }
    }
    
    loop();
    
}())