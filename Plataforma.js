class plat{
    constructor(
        x = 0, 
        y = 0
        )
    {
        this.x = x
        this.y = y
    }

    Colision_l(){
        let flag = 0
        if(this.x <= dim*1) {
            flag = 1
        } else if(this.x >= dim*28 - dim*5) {
            flag = 2
        }
        return flag
    }

    revelar(){
        rect(this.x, this.y, dim*5, dim)
        noFill()
        noStroke()
        image(paddle, this.x, this.y, dim*5, dim)
        noSmooth()
    }
}