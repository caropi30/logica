/*
    Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente triángulo:
    #
    ##
    ###
    ####
    #####
    ######
    #######
    Puede ser útil saber que puedes encontrar la longitud de un string escribiendo .length después de él:

    let abc = "abc";
    console.log(abc.length);
    // → 3
*/

// Solución 1

let pieza = '#'
let linea = ''

for(let i = 0; i < 7; i++){
    linea += pieza
    console.log(linea)
}


// Solución 2
const lineaCompleta = '#######'
let arbol = ''

for(let y = 0; y < lineaCompleta.length; y++){
     console.log(arbol += lineaCompleta[y])
}
