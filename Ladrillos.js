class lad{
    constructor(
        x = 0, 
        y = 0,
        color = [],
        tipo = 0
        )
    {
        this.x = x
        this.y = y
        this.color = color
        this.tipo = tipo
    }

    revelar(){
        fill(this.color)
        rect(this.x, this.y, dim*3, dim)
        noStroke()
        if(this.tipo !=0){
            image(brick, this.x, this.y, dim*3, dim)
            noSmooth()
        } else {
            image(metal, this.x, this.y, dim*3, dim)
            noSmooth()
        }
    }
}