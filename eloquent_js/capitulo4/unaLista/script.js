/*
    Los objetos, como conjuntos genéricos de valores, se pueden usar para construir todo tipo de estructuras de datos. 
    Una estructura de datos común es la lista (no confundir con un array). Una lista es un conjunto anidado de objetos, 
    con el primer objeto conteniendo una referencia al segundo, el segundo al tercero, y así sucesivamente.

        let lista = {
            valor: 1,
            resto: {
                valor: 2,
                resto: {
                    valor: 3,
                    resto: null
                }
            }
        };
    Los objetos resultantes forman una cadena, como esta:

    Una lista vinculada
    Algo bueno de las listas es que pueden compartir partes de su estructura. Por ejemplo, si creo dos nuevos valores {valor: 0, resto: lista} 
    y {valor: -1, resto: lista} (con lista refiriéndose a la vinculación definida anteriormente), ambos son listas independientes, pero comparten 
    la estructura que conforma sus últimos tres elementos. La lista original también sigue siendo una lista válida de tres elementos.

    Escribe una función arrayALista que construya una estructura de lista como el que se muestra arriba cuando se le da [1, 2, 3] como argumento. 
    También escribe una función listaAArray que produzca un array de una lista. Luego agrega una función de utilidad preceder, que tome un elemento
    y una lista y creé una nueva lista que agrega el elemento al frente de la lista de entrada, y posicion, que toma una lista y un número y retorne
    el elemento en la posición dada en la lista (con cero refiriéndose al primer elemento) o undefined cuando no exista tal elemento.

    Si aún no lo has hecho, también escribe una versión recursiva de posicion.

    // Tu código aquí.

    console.log(arrayALista([10, 20]));
    // → {valor: 10, resto: {valor: 20, resto: null}}
    console.log(listaAArray(arrayALista([10, 20, 30])));
    // → [10, 20, 30]
    console.log(preceder(10, preceder(20, null)));
    // → {valor: 10, resto: {valor: 20, resto: null}}
    console.log(posicion(arrayALista([10, 20, 30]), 1));
    // → 20
*/

const arrayALista = (arr) => {
    let lista = null
    for (let i = arr.length - 1; i >= 0; i--) {
        lista = { value: arr[i], rest: lista }
    }
    return lista
}

console.log(arrayALista([1, 2, 3]))

const listaAArray = (lista) => {
    const listaFinal = []
    const lista2 = (value) => {
        Object.entries(value).forEach(([key, value]) => {
            if (!isNaN(value)) {
                listaFinal.push(value)
                return listaFinal
            } else {
                lista2(value)
            }
        })
    }
    lista2(lista)

    if (listaFinal.includes(null)) {
        listaFinal.pop(null)
    }
    return listaFinal
}

console.log(listaAArray(arrayALista([1, 2, 3])))

const preceder = (elemento, lista) =>{
    const preceder = {
        value: elemento,
        rest: lista,
    }
    return preceder
}

console.log(preceder(10, preceder(arrayALista([1, 2, 3]))))
