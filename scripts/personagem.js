/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */
var Personagem = function(posX, posY, width, height, img){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.img = img; 
}

Personagem.prototype.halfWidth = function(){
    return this.width/2;
}

Personagem.prototype.halfHeight = function(){
    return this.height/2;
}

Personagem.prototype.centerX = function(){
    return this.posX + this.halfWidth();
}

Personagem.prototype.centerY = function(){
    return this.posY + this.halfHeight();
}