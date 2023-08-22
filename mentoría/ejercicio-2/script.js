// Escriba una función que reciba dos parámetros del tipo string.
// La función deberá retornar la cantidad de apariciones que tiene el segundo parámetro en el primer parámetro.

// eslint-disable-next-line no-unused-vars
function two (word, letter) {
  let quantity = 0
  for (let i = 0; i <= word.length; i++) {
    // eslint-disable-next-line no-unused-expressions
    word[i] === letter ? quantity++ : null
  }
  return quantity
}

two('aleluya', 'a')
