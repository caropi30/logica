/* Hacer una función que reciba un array de palabras(strings) que retorne un array con la cantidad de vocales de cada palabra. */

/*
1. Entra un arr de strings
2. Sale un arr de números
3. ¿Qué son los números?, la representacón de la cantidad de ítems (vocales) que contiene cada string
*/

const arr = ['hola', 'chao']
const arr2 = ['monito', 'mika', 'estereotipo', 'madona']
const vocals = ['a', 'e', 'i', 'o', 'u']

function contadorVocales (arrPalabras, vocales) {
  const nwArr = []
  let palabra = ''
  for (let i = 0; i < arrPalabras.length; i++) {
    palabra = arrPalabras[i]
    console.log(palabra)
    let count = 0
    for (let x = 0; x < palabra.length; x++) {
      console.log(palabra[x])
      if (vocals.includes(palabra[x])) {
        count = count + 1
        console.log(count)
      }
    }
    nwArr.push(count)
  }
  console.log(nwArr)
}

contadorVocales(arr, vocals)
contadorVocales(arr2, vocals)
