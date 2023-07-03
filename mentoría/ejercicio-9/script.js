/*Crear una función que replique el funcionamiento de Array reverse, o dicho de otra manera,
 codificar una función que reciba como parámetro un array, e invierta el orden de los elementos.*/

/*
    1. Entra:  Debería entrar un array
    2. Sale: Debería salir un array con ítems a la inversa y con validación de tipo
    3. ¿Qué pasa si el tipo de dato ingresado es diferente de Array?: Debe salir un string y un valor falsy
*/

const arr = ['hola', 'material girl', 'anatómico', 'pepito', 'rdr2']

const funcionVolteaArr = data => {
  typeof(arr) === 'object' ? console.log(data.reverse(), true) : console.log(`Esto no es un array ${false}`)
}

funcionVolteaArr(arr)