/*
    Escribir una función imprimerImpares que reciba un array e imprima por pantalla todos sus elementos de indice impar. Por ejemplo:

    console.log(imprimirImpares(["p1", "i1", "p2", "i2", "p3"])) // imprime "i1", "i2"

    La función imprimerImpares debe utilizar el método forEach de arrays. Es mandatorio leer la documentación sobre forEach al menos 2 veces.

    Bonus: Escribir la función imprimirImpares pero en vez de imprimir los elementos impares que los retorne en un array nuevo.
*/



const arr = ['hola', 'material girl', 'anatómico', 'pepito', 'rdr2']
const arr2 = ['chao', 'apellido', 'monito', 'monkey', 'rambo', 'mika']


function imprimirImpares(arr) {
    const emptyArr = []
    arr.forEach((item, index) => {
        if(index % 2 !== 0){
            emptyArr.push(item)
        }
        return null

    })

    return emptyArr
}

console.log(imprimirImpares(arr))
console.log(imprimirImpares(arr2))
