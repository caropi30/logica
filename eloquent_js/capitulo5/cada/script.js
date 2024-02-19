/*
    De forma análoga al método some, los arrays también tienen un método every (“cada”). 
    Este retorna true cuando la función dada devuelve verdadero para cada elemento en el array. 
    En cierto modo, some es una versión del operador || que actúa en arrays, y every es como el operador &&.

    Implementa every como una función que tome un array y una función predicado como parámetros. 
    Escribe dos versiones, una usando un ciclo y una usando el método some.
*/

//Solución 1: Ciclo
const metodoCiclo = (arr, funcionPredicado) => {
    let validacion = true
    for (let i = 0; i < arr.length ; i++) {
        //console.log(arr[i])
        funcionPredicado(arr[i]) ? validacion = true : validacion = false
    }
    return validacion
}
console.log(
    'metodoCiclo',
    metodoCiclo([1, 2, 3, 4], (n) => n < 10)
)
console.log(
    'metodoCiclo',
    metodoCiclo([1, 2, 3, 4], (n) => n > 10)
)

//Solución 2: Método Some
const metodoSome = (arr, funcionPredicado) => {
    return arr.some((item) => funcionPredicado(item))

}

console.log('metodoSome', metodoSome([1, 2, 11, 4], (n) => n > 10))

console.log('metodoSome', metodoSome([1, 2, 3, 4], (n) => n > 10))
