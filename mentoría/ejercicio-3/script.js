function concatenacionLetraIndice (palabra) {
  let concatenacion = ''
  for (let i = 0; i <= palabra.length; i++) {
    concatenacion += palabra[i] + i
  }

  console.log(concatenacion)
}

concatenacionLetraIndice('amaretto')
