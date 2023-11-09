/*
    El operador == compara objetos por identidad. Pero a veces preferirias comparar los valores de sus propiedades reales.

    Escribe una función igualdadProfunda que toma dos valores y retorne true solo si tienen el mismo valor o son objetos con las mismas propiedades,
    donde los valores de las propiedades sean iguales cuando comparadas con una llamada recursiva a igualdadProfunda.

    Para saber si los valores deben ser comparados directamente (usa el operador == para eso) o si deben tener sus propiedades comparadas, 
    puedes usar el operador typeof. Si produce "object" para ambos valores, deberías hacer una comparación profunda. Pero tienes que tomar 
    una excepción tonta en cuenta: debido a un accidente histórico, typeof null también produce "object".

    La función Object.keys será útil para cuando necesites revisar las propiedades de los objetos para compararlos.

    // Tu código aquí.

    let objeto = {aqui: {hay: "un"}, objeto: 2};
    console.log(igualdadProfunda(objeto, objeto));
    // → true
    console.log(igualdadProfunda(objeto, {aqui: 1, object: 2}));
    // → false
    console.log(igualdadProfunda(objeto, {aqui: {hay: "un"}, objeto: 2}));
    // → true

*/

const igualdadProfunda = (param1, param2) => {
    const typeofParam1 = typeof param1
    const typeofParam2 = typeof param2
    const objKeysParam1 = Object.keys(param1)
    const objKeysParam2 = Object.keys(param2)
    
     if (param1 == null || param2 == null) {
         console.log(false)
     }

     if (param1 == param2) {
        console.log('ambos son iguales')
     }

     if(param1 != param2) {
        console.log('espera!! son diferentes')
     }


}


igualdadProfunda(1,2)
igualdadProfunda(2, 2)
igualdadProfunda({ key: 'valor'}, 2)
igualdadProfunda(true, false)
igualdadProfunda(true, null)

// const listaAArray = (lista) => {
//     const lista2 = (value) => {
//         Object.entries(value).forEach(([key, value]) => {
//             if (!isNaN(value)) {
//                 listaFinal.push(value)
//                 return listaFinal
//             } else {
//                 lista2(value)
//             }
//         })
//     }
    
//     lista2(lista)
// }
