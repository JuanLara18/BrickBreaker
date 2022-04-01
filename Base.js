class base{
    constructor(
      forma = [[]]
      )
    {
      this.forma = forma
      this.Nivel = this.formar()
    }

    formar () {
        return Array.from(new Array(11), (col,y) => 
        Array.from(new Array(9), (fil,x) =>  
        this.forma[y][x] != null ? (
            new lad(x*3*dim + dim, y*dim + dim, colores[this.forma[y][x]], this.forma[y][x]) 
        )
        : null
        )
    )
    }
    
    vacio() {
        let n = 0;
        for (let i = 0; i < alto; i++) {
            for (let j = 0; j < ancho; j++) {
                if(this.forma[i][j] != 0 && this.forma[i][j] != null){
                    n++
                }
            }
        }
        if(n==0){
            return true;
        }
        return false
    }

    revelar() {
        this.Nivel.forEach(
            x => x.filter(
                j => j != null).forEach(
                    Ladrillo => Ladrillo.revelar()))
    }
}  