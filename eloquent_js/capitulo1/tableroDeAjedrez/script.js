/*
    Escribe un programa que cree un string que represente una cuadrícula de 8 × 8, 
    usando caracteres de nueva línea para separar las líneas. En cada posición de la cuadrícula 
    hay un espacio o un carácter "#". Los caracteres deberían de formar un tablero de ajedrez.

    Pasar este string a console.log debería mostrar algo como esto:

    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
     
    Cuando tengas un programa que genere este patrón, define una vinculación tamaño = 8 
    y cambia el programa para que funcione con cualquier tamaño, dando como salida una cuadrícula
     con el alto y ancho dados.

*/

const cuadricula = 8
const negro = '#'
const blanco = ' '
const salto = '\n'
let tabla = ''

for (let i = 0; i < cuadricula; i++) {
    for (let x = 0; x < cuadricula; x++) {
        if((i + x) % 2 === 0){
            tabla += negro
        }
        else {
            tabla += blanco
        }
    }
    tabla += salto
    console.log(tabla)
}
