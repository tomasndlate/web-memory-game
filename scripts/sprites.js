/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */

//função construtora ( this= self._ )
var Sprite = function(posX, posY, width, height, color, T_or_F){
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.visible = T_or_F;
}

Sprite.prototype.halfWidth = function(){
    return this.width/2;
}

Sprite.prototype.halfHeight = function(){
    return this.height/2;
}

Sprite.prototype.centerX = function(){
    return this.posX + this.halfWidth();
}

Sprite.prototype.centerY = function(){
    return this.posY + this.halfHeight();
}