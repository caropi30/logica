/*Crear una función que replique el funcionamiento de Array reverse, o dicho de otra manera,
 codificar una función que reciba como parámetro un array, e invierta el orden de los elementos.*/

/*
    1. Entra:  Debería entrar un array
    2. Sale: Debería salir un array con ítems a la inversa y con validación de tipo
    3. ¿Qué pasa si el tipo de dato ingresado es diferente de Array?: Debe salir un string y un valor falsy
*/

const arr = ['hola', 'material girl', 'anatómico', 'pepito', 'rdr2']

const voltearArr = arr => {
  console.log(arr)
  let arrVolteado = ''
  const volteado = []
  const longitud = arr.length
  
  for (let i = 0; i < longitud; i++) {
    arrVolteado = arr.pop();
    volteado.push(arrVolteado);
  }
  console.log(volteado)
}

voltearArr(arr)