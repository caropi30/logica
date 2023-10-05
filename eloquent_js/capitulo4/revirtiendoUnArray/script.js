/*
    Los arrays tienen un método reverse que cambia al array invirtiendo el orden en que aparecen sus elementos.
    Para este ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar. El primero, revertirArray, 
    toma un array como argumento y produce un nuevo array que tiene los mismos elementos pero en el orden inverso. 
    El segundo, revertirArrayEnSuLugar, hace lo que hace el métodoreverse: modifica el array dado como argumento 
    invirtiendo sus elementos. Ninguno de los dos puede usar el método reverse estándar.

    Pensando en las notas acerca de los efectos secundarios y las funciones puras en el capítulo anterior, qué variante 
    esperas que sea útil en más situaciones? Cuál corre más rápido?
*/


// revertirArray

const revertirArray = arr => arr.toReversed()

console.log(revertirArray(['hola', 'mundo']))

// revertirArrayEnSuLugar

const revertirArrayEnSuLugar = (arr) => {
    let indice = 0
    let shiftElemento = null

    for (let i = 0; i < arr.length; i++) {
        indice = arr.length - (i + 1)
        shiftElemento = arr.shift()
        arr.splice(indice, 0, shiftElemento)
    }

    return arr
}

console.log(revertirArrayEnSuLugar(['hola', 'mundo', 'playa', 'mambo']))
