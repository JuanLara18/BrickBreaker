class pel{
    constructor(
        x = 0, 
        y = 0
        )
    {
        this.x = x
        this.y = y
    }

    Movimiento() {
        this.x += dx
        this.y += dy 
    }


    Colisiones(tablero) {
        
        if(this.x <= dim*1 || this.x >= dim*27) {
            dx = dx*-1
        }

        if(this.y < dim*1) {
            dy = dy*-1
        } else if(this.y >= dim*18) {
            pausado()
            P_reinicio()
            this.y = 15*dim
            this.x = 14*dim
            Vida--
            this.revelar
        }

        let choque = 0;
        let p=1;
        for (let i = 0; i < alto ; i++) { // Filas 
            for (let j = 0; j < ancho ; j++) { // Columnas
                if(tablero.forma[i][j] != null){
                    
                    // let ddx = -this.x + 3*dim + j*dim*3
                    // let ddy = -this.y + 2*dim + i*dim
                    
                    let ddx = this.x - tablero.Nivel[i][j].x
                    let ddy = -this.y + tablero.Nivel[i][j].y
                    
                    
                    if( ddy == dim || ddy == -dim){ // De techo o piso
                        if( ddx <= 3*dim && ddx >= 0){
                            if(tablero.Nivel[i][j].tipo != 0){
                                tablero.forma[i][j] = null
                                Puntaje++
                            }
                            choque = 1
                       }
                    }
                    
                    
                    if( ddx == -dim || ddx == 3*dim){ // De pared
                        if( ddy <= dim-3 && ddy >= -dim+ 3){
                            if(tablero.Nivel[i][j].tipo != 0){
                                tablero.forma[i][j] = null
                                Puntaje++
                            }
                            choque = 2
                        }
                    }

                    let a = tablero.forma[i][j]

                    switch (a) {
                        case 1:
                            p = 3;
                            break;
                        case 2:
                            p = 3;
                            break;
                        case 3:
                            p = 4;
                            break;
                        case 4:
                            p = 4;
                            break;
                        case 5:
                            p = 5;
                            break;
                        case 6:
                            p = 5;
                            break;
                        case 7:
                            p = 6;
                            break;
                
                        default:
                            p = 3
                            break;
                    }

                }   
            }
        }
        

        if(choque == 1){ // De techo
            dy = -1*p * Math.abs(dy)/dy
        } else if(choque ==2){ // De pared
            dx = -1*p * Math.abs(dx)/dx
        }

        

    }

    Colision_p(paddle) {
        if(this.y == 16*dim && (this.x > paddle.x - dim && this.x < paddle.x + 5*dim)) {
            dy = dy*-1
        } 
    }

    revelar(tablero) {
        this.Colisiones(tablero)
        this.Movimiento()
        fill("rgba(255,255,255,0)")
        rect(this.x, this.y, dim, dim)
        noStroke()
        image(ball, this.x, this.y, dim, dim)
        noSmooth()
    }
}