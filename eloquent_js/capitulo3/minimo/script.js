/*
    Escribe una función min que tome dos argumentos y retorne su mínimo.
*/

// Definición de variable para crear una vinculación de función

const min1 = function (a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

console.log('variable: ', min1(3,5))

// Declaración de función (de esta manera se genera una expresión de función)
function min2(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}
console.log('declaración: ', min2(3, 5))

//Función flecha
const min3 = (a,b) => a < b ? a : b
console.log('flecha :', min3(3,5))
