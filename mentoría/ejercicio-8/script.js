/*Hacer una función que reciba un array de palabras(strings) que retorne un array con la cantidad de vocales de cada palabra.*/

/*
1. Entra un arr de strings
2. Sale un arr de números
3. ¿Qué son los números?, la representacón de la cantidad de ítems (vocales) que contiene cada string
*/

let arr = ['hola', 'chao']
let arr2 = ['monito', 'mika', 'estereotipo', 'madona']
let vocals = ['a', 'e', 'i', 'o', 'u']
let nwArr = []

function contadorVocales(arrPalabras, vocales){
  let palabra = '';
  for(let i = 0; i < arrPalabras.length; i++){
    palabra = arrPalabras[i]
    console.log(palabra)
    let count = 0
    for (let x = 0; x < palabra.length; x++){
      console.log(palabra[x])
      if(vocals.includes(palabra[x])){
        count = count+1
        console.log(count)
      }
    
    }
    nwArr.push(count)
  }
  console.log(nwArr)
}


contadorVocales(arr, vocals)
