/* Este ejercicio consta de dos partes */

/* PARTE 1:
    Escribir una función que reciba un objeto como primer parámetro obj y un array filtros de strings como segundo parámetro. 
    Dado un objeto particular, la función filtrarKeys deberá retornar una lista de las propiedades 
    ( es decir, una lista de keys) que contenga alguno de los elementos del array filtros en su nombre. 
*/

/* PARTE 2:
    Agregar a la función filtrarKeys un tercer parámetro opcional que indique si se desea filtrar por inclusion o exclusion. 
    Por defecto, es decir si ningún parámetro es especificado, la función deberá filtrar por inclusion.
*/

const obj = { a: 1, b: 2, c: 3 }
const obj2 = { d: 1, x: 2, g: 3 }
const arr = ['a','b']
const arr2 = ['a', 'b', 'd', 'x', 'g']

function filtrarKeys (obj, arrFiltro, inclusion = true){
  let key = ''
  const keys = Object.keys(obj)
  const arrKeys = []

  if (!inclusion) {
     for (let i = 0; i < keys.length; i++) {
         key = keys[i]
         if (!arrFiltro.includes(key)) {
             arrKeys.push(key)
         }
     }
    return arrKeys
 } else {
  for (let i = 0; i < keys.length; i++) {
      key = keys[i]
      if (arrFiltro.includes(key)) {
          arrKeys.push(key)
      }
    }
    return arrKeys
  }
}

console.log(filtrarKeys(obj, arr))
console.log(filtrarKeys(obj, arr, true))
console.log(filtrarKeys(obj, arr, false))
console.log(filtrarKeys(obj2, arr2))
console.log(filtrarKeys(obj2, arr2, true))
console.log(filtrarKeys(obj2, arr2, false))
console.log(filtrarKeys(obj2, arr))
console.log(filtrarKeys(obj2, arr, true))
console.log(filtrarKeys(obj2, arr, false))
console.log(filtrarKeys(obj, arr2))
console.log(filtrarKeys(obj, arr2, true))
console.log(filtrarKeys(obj, arr2, false))



