BrickBreaker, por Miguel Antonio Parrado y Juan David Lara

Objetivo:
El objetivo de este proyecto es replicar el clásico juego Breakout (https://elgoog.im/breakout/ es la versión de google del juego) este es uno de los conocidos juegos de atari que se juega por niveles en donde con una pelota eliminamos bloques dispuestos en un mapa, son 12 niveles y la dificultad varía de acuerdo a los mapas pues estos disponen de bloques de distinto tipo

Solución:
La solución se puede ver más detallada en BrickBreaker.pdf.
Trabajamos el canvas en Motor.js usando la librería p5, usamos archivos adicionales:

-Constantes.js:
Definimos las variables y constantes que usamos en el deesarrollo del juego como lo son los colores de los ladrillos y los mapas de los niveles.

-Ladrillos.js:
Definimos la clase lad que nos representa los ladrillos ubicados en una posición xy que corresponde a la esquina superior izquierda del ladrillo, le definimos un color y un tipo, el tipo representa si es un ladrillo fijo o no y, de no serlo le otorga una propiedad que luego al colisionar con la pelota le proporciona mayor velocidad.

-Base.js:
Definimos la clase base la que cuenta con una forma que corresponde a los mapas definidos en Constantes.js y con este de damos el Nivel que corresponde a la forma pero con ladrillos que luego se imprimen con revelar(). vacio es un método que nos permite verificar si ya acabamos todos los bloques posibles para pasar al siguiente nivel

-Plataforma.js:
Definimos la clase plat que representará la plataforma que el usuario puede mover, la mostramos con revelar() y verificamos su colisión de acuerdo a las dimensiones

-Pelota.js:
Definimos la clase pel que representará la pelota en el juego, ella se moverá con Movimiento() y, con Colisiones(tablero) verificamos las posibles colisiones con los ladrillos verificando si choca con cada uno de los ladrillos restantes del nivel (tablero.Nivel), la verificación se da de acuerdo a las posición de la pelota y la de cada ladrillo viendo si choca de forma horizontal o vertical, por último este método permite conocer el tipo de cada ladrillo con el que colisiona y darle así velocidad a la pelota. Por último podemos ver si la pelota colisiona con la plataforma y mostrar la pelota siendo esta un cuadro pero mostrado como una bola al poner una imágen

-Motor.js:
Cargamos lo elementos que usaremos y definimos unos parámetro iniciales como el volumen de el audio, como la creación de la plataforma, la pelota y el tablero. 

Conclusiones:
Si bien lo consideramos un trabajo completo (Puesto que añade niveles, puntajes, velocidades, sonidos, sprites, etc) También existe bastante espacio para mejorar y trabajar; asi como lo pueden ser añadir más menús y más opciones de customización graficas, al igual que más niveles, o la capacidad de permitirle al usuario crear sus niveles.

Las principalas limitaciones del trabajo fueron principalmente el tiempo de desarrollo, que trajo como consecuencia la menor rigurosidad a la hora de probar el código y por ende una mayor cantidad de errores. Además, esta falta de riempo propició el recorte de algúnas caracteristicas que pudieron haber hecho al juego algo más interesante.

Sin embargo, este proyecto trajo inspiración para desarrollarlo más a futuro, agregando contenido como más sonidos, más posibilidades de juego, e inclusive una expansión para hacer un multijugador. Posibilidades que no solo permiten mejorar la calidad de juego, sino también permiten cultivar una curiosidad por el conocimento. 