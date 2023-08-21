/*Crear una función que replique el funcionamiento de Array reverse, o dicho de otra manera,
 codificar una función que reciba como parámetro un array, e invierta el orden de los elementos.*/

const { LoneSchemaDefinitionRule } = require("graphql");

/*
    1. Entra:  Debería entrar un array
    2. Sale: Debería salir un array con ítems a la inversa y con validación de tipo
    3. ¿Qué pasa si el tipo de dato ingresado es diferente de Array?: Debe salir un string y un valor falsy
*/

const arr = ['hola', 'material girl', 'anatómico', 'pepito', 'rdr2']
const str = 'soy un string'
const reverse = (param)=> {
  let index = 0
  let shiftElement = null;

  if(Array.isArray(param)){
    for(let i = 0; i < arr.length; i++){
    index = param.length - (i + 1)
    shiftElement = param.shift()
    param.splice(index, 0, shiftElement)
  }
  console.log(param, true)
  }
  else{
    console.log(param, false)
  }
}

reverse(arr)
reverse(str)