
// Crear una variable que reciba un string y retorne la misma, pero agregando después de cada carácter su índice correspondiente. 
// Es decir, que retorne el mismo string transformado de la siguiente forma.
function someFunction (letter, word) {
  for (let i = 0; i <= word.length; i++) {
    if (i % 3 && letter === word[i]) {
      console.log(
        'Divisible 3 y coinciden las letras:',
        letter,
        i,
        typeof i,
        word[i]
      )
    } else if (i % 5) {
      console.log(
        'Divisible 5 y coinciden las letras:',
        letter,
        i,
        typeof i,
        word[i]
      )
    } else {
      console.log('Somos felices?')
    }
  }
}

someFunction('x', 'parelelepipedo')
