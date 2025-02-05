/*Afonso Benedito 54937 
Afonso Teles da Silva 54945
Tomás Ndlate 54970 */

function blockRect(r1,r2){
    //r1 -> personagem
    //r2 -> parede

    //Cat = cateto
    var catX = r1.centerX() - r2.centerX();
    var catY = r1.centerY() - r2.centerY();

    //soma das metades
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

    //objeto colide quando a dist dos centros é menor que a soma da dist entre os 2 centros
    if(Math.abs(catX) <= sumHalfWidth && Math.abs(catY) <= sumHalfHeight){

        var overlapX = sumHalfWidth - Math.abs(catX);
        var overlapY = sumHalfHeight - Math.abs(catY);

        //ver onde foi a colisão
        if(overlapX >= overlapY){ //colisão por cima ou por baixo

            if(catY > 0){//por cima da personagem
                r1.posY += overlapY;
            } else{ //por baixo da personagem
                r1.posY -= overlapY;
            }

        } else{ //colisão por esquerda ou pela direita

            if(catX > 0){//por cima da personagem
                r1.posX += overlapX;
            } else{ //por baixo da personagem
                r1.posX -= overlapX;
            }
        }
    }
}