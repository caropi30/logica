/*Hacer una función que reciba un array de palabras(strings) que retorne un array con la cantidad de vocales de cada palabra.*/

/*
1. Entra un arr de strings
2. Sale un arr de números
3. ¿Qué son los números?, la representacón de la cantidad de ítems (vocales) que contiene cada string
*/

/*PRIMERA PARTE*/
/*Se iteran los strings para validar la cantidad de elementos que tiene cada uno y se agregan las catidades a una variable de tipo arr vacía, generando un listado de números*/
const arr = ['hola', 'chao', 'aprendizaje', 'changuito']
const vocals = ['a', 'e', 'i', 'o', 'u']
const arrNum = []
const arrNum2 = []
const arr3 = []
let qty = 0
let qty2 = 0

const funcionContadora = arr => {
  //console.log(arr)
  for(let i = 0; i < arr.length; i++){
   //console.log(arr[i])
   //console.log(arr[i].length)
    arrNum.push(arr[i].length)
  }
  return arrNum
}

console.log(funcionContadora(arr))


/*SEGUNDA PARTE (EN PROCESO)*/
/*Se iteran los ítems del array para validar si dentro tienen vocales*/
const funcionContadoraVocales = arr => {
  for(let i = 0; i < arr.length; i++){
    //console.log(arr[i])
    for(let x = 0; x < arr[i].length; x++){
      //console.log(arr[i][x])
      if(vocals.includes(arr[i][x])){ 
         arr3.push(arr[i][x])
        qty2 = qty2 +1
console.log(qty2)
      }
      console.log(arr3)
    }
  }
}

funcionContadoraVocales(arr)