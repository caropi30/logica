// Crear una variable que reciba un string y retorne la misma, pero agregando después de cada carácter su índice correspondiente.
// Es decir, que retorne el mismo string transformado de la siguiente forma.
function loopStr (str) {
  for (let i = 0; i < str.lenght; i++) {
    console.log(`El indice ${i} posición ${i + 1} es igual a la letra ${str[i]}`)
  }
}

loopStr('Carolina')
