// Escriba una función que reciba dos parámetros del tipo string.
// La función deberá retornar la cantidad de apariciones que tiene el segundo parámetro en el primer parámetro.

function two (word, letter) {
  let quantity = 0
  for (let i = 0; i <= word.length; i++) {
    if (word[i] === letter) {
      quantity++
  }
    return quantity 
}

two('aleluya', 'a')