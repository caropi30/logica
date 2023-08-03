/*Este ejercicio consta de dos partes*/

/*PARTE 1:
    Escribir una función que reciba un objeto como primer parámetro obj y un array filtros de strings como segundo parámetro. 
    Dado un objeto particular, la función filtrarKeys deberá retornar una lista de las propiedades 
    ( es decir, una lista de keys) que contenga alguno de los elementos del array filtros en su nombre. 
*/


const objKeys = { "a":1, "b":2, "c":3 }
const arrFilter = ["b", "i", "a", "o"];


const keyFilter = (param1,param2) => {
    const keyAndArrMatch = []
    console.log(param1,param2)
    const keys = Object.keys(param1);
    console.log(keys);
    for(let i = 0; i < keys.length; i++){
        //console.log(keys[i])
        let singleKey = keys[i];
        for (let j = 0; j < param2.length; j++){
            let matchItem = ''
           // console.log(param2[j])
            if(param2[j] === singleKey){
                console.log('coinciden')
                matchItem = param2[j]
                console.log(matchItem)
                keyAndArrMatch.push(matchItem)
            }
        }
       console.log(keyAndArrMatch)
    }
}

keyFilter(objKeys, arrFilter)


/*PARTE 2:
    Agregar a la función filtrarKeys un tercer parámetro opcional que indique si se desea filtrar por inclusion o exclusion. 
    Por defecto, es decir si ningún parámetro es especificado, la función deberá filtrar por inclusion.
*/

