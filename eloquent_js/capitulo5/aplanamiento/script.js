/*
    Use el método reduce en combinación con el método concat para “aplanar” un array de arrays en un único array que tenga todos los elementos de los arrays originales.

    let arrays = [[1, 2, 3], [4, 5], [6]];
    // Tu código aquí.
    // → [1, 2, 3, 4, 5, 6]
*/

const arr = [[1, 2, 3], [4, 5], [6]]

const aplanar = (arr) => {
   return arr.reduce((a, b) => a.concat(b))

}

console.log(aplanar(arr))
