/*Escribir una función invertirYConcatenarArrays que reciba dos arrays, arr1 y arr2.
 Debe retornar un único array (una nuevo) con todos los elementos de arr1 y arr2 pero en orden inverso. */


/*
    1. Entra: Dos arrays
    2. Sale: Un sólo array que es la concatenación de los dos arrays, el cual debe haber volteado todos los ítems
*/


const arr = ['hola', 'material girl', 'anatómico', 'pepito', 'rdr2']
const arr2 = ['chao', 'apellido', 'monito', 'monkey', 'rambo', 'mika']


const funcionConcatenaYVoltea = (arr, arr2) => {
    const arrConcatenado = arr.concat(arr2)
     return arrConcatenado.reverse()
}

console.log(funcionConcatenaYVoltea(arr, arr2))
