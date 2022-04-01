function preload() {
  pixel = loadFont("Recursos/Minecraft.ttf")
  retro = loadFont("Recursos/Retro Gaming.ttf")
  pared = loadImage("Recursos/Wall.png")
  paddle = loadImage("Recursos/Paddle.png")
  ball = loadImage("Recursos/Ball.png")
  brick = loadImage("Recursos/Bricks.png")
  metal = loadImage("Recursos/Metal.png")
  conta = loadImage("Recursos/Counter.png")
  contal = loadImage("Recursos/CounterLarge.png")

  audio = loadSound('Sonidos/Sonido.mp3')
}

function setup() {

  frameRate(60)

  createCanvas(dim*40, dim*20)
  plataforma = new plat(12*dim,17*dim)
  pelota = new pel(14*dim,15*dim)
  tablero = new base(Mapas[nivel-1]) 

  audio.loop()
  audio.setVolume(0.1)
  if (getAudioContext().state !== 'running') {          // Solucionesmos getAudioContext problema usual del navegador
    getAudioContext().resume();
  }

}

function draw() {
    background(24,24,24)
    CHECKS()
}

let Bordes = () => {
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 20; j++) {
      if ((j > 18 || j < 1) || (i > 27 || i < 1)){
          image(pared, i*dim, j*dim, dim, dim)
          noSmooth()
      } 
    }  
  }
}

function keyPressed() {
  if (keyCode === 32) {
    pausado()
  }
}

function keyTyped() {
  if (key == 'm') {
      audio.pause();
  } else if(key == 'u'){
    audio.play();
  }
}

let pausado = () => {
  if (pause == true) {
    dx_a = dx
    dy_a = dy
    dx = 0
    dy = 0
    pause = false
  }else if (pause == false) {
    dy = dy_a
    dx = dx_a
    pause = true
  }
}

let P_reinicio = () => {
  plataforma.x = 12*dim
  plataforma.y = 17*dim
  pelota.x = 14*dim
  pelota.y = 15*dim
}

let Perder = () => {
  if(Vida == 0) {
    Game_Over = true
    pause = true
    pausado()
  }
}

let N_nivel = () => {
  if (tablero.vacio() == true) {
    if(nivel < 12){
      nivel++
    } else {
      nivel = 12
    }
  tablero = new base(Mapas[nivel-1])
  pausado()
  P_reinicio()
  }
}

let pmenu = () => {
    fill(16,16,16)
    rect(29*dim,1*dim,10*dim,18*dim)
    fill(16,64,16)
    rect(30*dim,6*dim,3*dim,3*dim)
    fill(16,64,16)
    rect(35*dim,6*dim,3*dim,3*dim)
    fill(16,64,16)
    rect(30*dim,11*dim,8*dim,3*dim)
    image(conta,30*dim,6*dim,3*dim,3*dim)
    image(conta,35*dim,6*dim,3*dim,3*dim)
    image(contal,30*dim,11*dim,8*dim,3*dim)
    noStroke()
    noSmooth()
}

let texto = () => {
  strokeWeight(dim/2)
  textFont(retro)
  textSize(dim*2)
  fill(220,220,255)
  stroke(112,112,255) 
  text(" Brick", dim*30, dim*3)
  textSize(dim)
  text(" Breaker", dim*31, dim*4)

  noStroke()
  fill(255,200,255)
  text("Nivel", dim*30, dim*6)
  fill(255,255,255)
  text(" "+ nivel, dim*30, dim*8)

  fill(200,255,255)
  text("Vida", dim*35, dim*6)
  fill(255,255,255)
  text(" "+ Vida, dim*35, dim*8)

  fill(255,255,200 )
  text("Puntaje", dim*30, dim*11)
  fill(255,255,255)
  text(" "+ Puntaje, dim*30, dim*13)

  text('(m) Mute', dim*30, dim*16)
  text('(u) Unmute', dim*30, dim*17)
  noStroke()

  if (pause == false && Game_Over == false) {
    textFont(retro)
    textSize(4*dim)
    fill(198,16,16)
    stroke(255,255,255)
    strokeWeight(dim)
    text("EN PAUSA", dim*3, dim*10)
    textSize(1*dim)
    fill(255,255,255)
    stroke(198,16,16)
    strokeWeight(2)
    text("  [Espacio] para reanudar o pausar", dim*3, dim*14)
    stroke(16,198,16)
    text("[<-] Mover a la", dim*2, dim*17)
    text("       Izquierda", dim*2, dim*18)
    stroke(16,16,198)
    text("Mover a la [->]", dim*18, dim*17)
    text("Derecha", dim*18, dim*18)
    noStroke()
  } else if (Game_Over == true) {
    textFont(retro)
    textSize(4*dim)
    fill(198,16,16)
    stroke(255,255,255)
    strokeWeight(dim/2)
    text("GAME OVER", dim*1, dim*10)
    noStroke()
  }
}

let controles = () => {
  if (keyIsDown(LEFT_ARROW) && plataforma.Colision_l() != 1 && pause == true) {
      plataforma.x -= 8
  }
  if (keyIsDown(RIGHT_ARROW) && plataforma.Colision_l() != 2 && pause == true) {
      plataforma.x += 8
  }     
}

let CHECKS = () => {
  tablero.Nivel = tablero.formar()
  tablero.revelar()
  pelota.revelar(tablero)
  plataforma.revelar()
  plataforma.Colision_l()
  pelota.Colision_p(plataforma)

  Bordes()
  pmenu()
  controles()
  texto()
  N_nivel() 
  Perder()
}
