var nivel = 12
const dim = 24
var dx = 0
var dy = 0
const ancho = 9
const alto = 11
var dx_a = 3 
var dy_a = 3 
var pause = false
var Vida = 5
var Puntaje = 0
var Game_Over = false

const colores = [
    [192, 192, 192],
    [255, 50, 50],
    [255, 128, 64],
    [255, 255, 64],
    [64, 255, 64],
    [64, 255, 255],
    [64, 128, 255],
    [128, 64, 255],
]

const Mapa1 = [
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null,    3,    3,    3,    3,    3,    3,    3, null],
    [null,    2,    2,    2,    2,    2,    2,    2, null],
    [null,    1,    1,    1,    1,    1,    1,    1, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
]

const Mapa2 = [
    [null, null, null, null, null, null, null, null, null],
    [null,    6,    7,    6,    7,    6,    7,    6, null],
    [null,    5,    6,    5,    6,    5,    6,    5, null],
    [null,    4,    5,    4,    5,    4,    5,    4, null],
    [null,    3,    4,    3,    4,    3,    4,    3, null],
    [null,    2,    3,    2,    3,    2,    3,    2, null],
    [null,    1,    2,    1,    2,    1,    2,    1, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
]

const Mapa3 = [
    [   7,    7,    7,    7,    7,    7,    7,    7, null],
    [null,    6,    6,    6,    6,    6,    6,    6,    6],
    [   5,    5,    5,    5,    5,    5,    5,    5, null],
    [null,    4,    4,    4,    4,    4,    4,    4,    4],
    [   3,    3,    3,    3,    3,    3,    3,    3, null],
    [null,    2,    2,    2,    2,    2,    2,    2,    2],
    [   1,    1,    1,    1,    1,    1,    1,    1, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
]

const Mapa4 = [
    [null,    7,    0,    0,    0,    0,    0,    7, null],
    [null,    6,    7,    0,    0,    0,    7,    6, null],
    [null,    5,    6,    7,    0,    7,    6,    5, null],
    [null,    4,    5,    6,    7,    6,    5,    4, null],
    [null,    3,    4,    5,    6,    5,    4,    3, null],
    [null,    2,    3,    4,    5,    4,    3,    2, null],
    [null,    1,    2,    3,    4,    3,    2,    1, null],
    [null, null,    1,    2,    3,    2,    1, null, null],
    [null, null, null,    1,    2,    1, null, null, null],
    [null, null, null, null,    1, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
]

const Mapa5 = [
    [null, null, null, null, null, null, null, null, null],
    [null,    1,    1,    1,    1,    1,    1,    1, null],
    [   1,    1,    2,    2,    2,    2,    2,    1,    1],
    [   1,    2,    2,    3,    3,    3,    2,    2,    1],
    [   1,    2,    3,    3,    4,    3,    3,    2,    1],
    [   1,    2,    3,    4,    0,    4,    3,    2,    1],
    [   1,    2,    3,    3,    4,    3,    3,    2,    1],
    [   1,    2,    2,    3,    3,    3,    2,    2,    1],
    [   1,    1,    2,    2,    2,    2,    2,    1,    1],
    [null,    1,    1,    1,    1,    1,    1,    1, null],
    [null, null, null, null, null, null, null, null, null],
]

const Mapa6 = [
    [null, null,    0, null,    0, null,    0, null, null],
    [   1,    2,    3,    4,    5,    4,    3,    2,    1],
    [   2,    0,    4,    0,    6,    0,    4,    0,    2],
    [   2, null,    4, null,    6, null,    4, null,    2],
    [   3, null,    5, null,    7, null,    5, null,    3],
    [   3, null,    5, null,    7, null,    5, null,    3],
    [   3, null,    5, null,    7, null,    5, null,    3],
    [   2, null,    4, null,    6, null,    4, null,    2],
    [   2,    0,    4,    0,    6,    0,    4,    0,    2],
    [   1,    2,    3,    1,    5,    4,    3,    2,    1],
    [null, null, null, null, null, null, null, null, null],
]

const Mapa7 = [
    [   7,    7,    7,    7,    7,    7,    7,    7,    7],
    [   6,    6,    6,    6,    6,    6,    6,    6,    6],
    [   6,    6,    6,    6,    6,    6,    6,    6,    6],
    [   5,    0,    0,    5,    5,    5,    0,    0,    5],
    [   4,    0,    0,    4,    0 ,   4,    0,    0,    4],
    [   4,    0,    0,    4,    4,    4,    0,    0,    4],
    [   3,    0,    0,    3,    3,    3,    0,    0,    3],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
    [null, null, null, null, null, null, null, null, null],
]

const Mapa8 = [
    [   7,    7,    7,    7,    7,    7,    7,    7,    7],
    [   6,    6,    6,    6,    6,    6,    6,    6,    6],
    [   5,    5,    5,    5,    5,    5,    5,    5,    5],
    [   4,    4,    4,    4,    4,    4,    4,    4,    4],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
]

const Mapa9 = [
    [   7,    7,    7,    7,    7,    7,    7,    7,    7],
    [   6,    6,    6,    6,    6,    6,    6,    6,    6],
    [   5,    5,    5,    5,    5,    5,    5,    5,    5],
    [   4,    4,    4,    4,    4,    4,    4,    4,    4],
    [   3,    0,    3,    3,    3,    3,    3,    0,    3],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   0,    2,    0,    2,    0,    2,    0,    2,    0],
    [   0,    1,    1,    0,    1,    0,    1,    1,    0],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
]

const Mapa10 = [
    [   7,    7,    7,    7,    7,    7,    7,    7,    7],
    [   6,    6,    6,    6,    6,    6,    6,    6,    6],
    [   5,    5,    5,    5,    5,    5,    5,    5,    5],
    [   4,    4,    4,    4,    4,    4,    4,    4,    4],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
    [   0,    1,    1,    1,    1,    1,    1,    1,    0],
]

const Mapa11 = [
    [   0,    7,    7,    7,    7,    7,    7,    7,    0],
    [   6,    6,    6,    6,    6,    6,    6,    6,    6],
    [   5,    5,    5,    5,    5,    5,    5,    5,    5],
    [   4,    4,    4,    4,    4,    4,    4,    4,    4],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   1,    1,    1,    1,    1,    1,    1,    1,    1],
    [   0,    1,    1,    1,    1,    1,    1,    1,    0],
    [   0,    0,    1,    1,    1,    1,    1,    0,    0],
]

const Mapa12 = [
    [   0,    0,    7,    7,    7,    7,    7,    0,    0],
    [   0,    6,    6,    6,    6,    6,    6,    6,    0],
    [   5,    5,    5,    5,    5,    5,    5,    5,    5],
    [   4,    4,    4,    4,    4,    4,    4,    4,    4],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   3,    3,    3,    3,    3,    3,    3,    3,    3],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   2,    2,    2,    2,    2,    2,    2,    2,    2],
    [   0,    1,    1,    1,    1,    1,    1,    1,    0],
    [   0,    0,    1,    1,    1,    1,    1,    0,    0],
    [   0,    0,    0,    1,    1,    1,    0,    0,    0],
]

const Mapas = [
    Mapa1, 
    Mapa2, 
    Mapa3, 
    Mapa4, 
    Mapa5, 
    Mapa6, 
    Mapa7, 
    Mapa8, 
    Mapa9, 
    Mapa10,
    Mapa11,
    Mapa12,
]