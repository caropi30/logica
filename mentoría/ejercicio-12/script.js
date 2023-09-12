// const arr = [
//     {
//         nombre: 'Ignacia',
//         apellido: 'Faundez',
//         edad: 32,
//     },{
//         nombre: 'Camila',
//         apellido: 'Pirela',
//         edad: 34,
//     },
//     {
//         nombre: 'Fabiola',
//         apellido: 'Centellas',
//         edad: 28,
//     }
// ]

const arr2 = {
    nombre: 'Ignacia',
    apellido: 'Faundez',
    edad: 32,
}

const obj = {
    edad: 32,
}

// const obj2 = {
//     edad: 32,
// }
let objStr = ''

function filtrarObj(obj) {
    const objKeys = []

    for (const [key, value] of Object.entries(obj)) {
        objKeys.push(`${key}: ${value}`)
    }

    objStr = objKeys.join()
    return objStr

}

filtrarObj(obj)


function filtrarArr(arr) {
    const arrFilter = []
    for (const [key, value] of Object.entries(arr)) {
        arrFilter.push(`${key}: ${value}`)
        //console.log(arrFilter)
        for(let i = 0; i< arrFilter.length; i++){
            console.log(arrFilter[i])
            if(arrFilter.includes(objStr)){
                console.log('coincide el:', arrFilter[i])
            }
            else {
                console.log('no coincide el:', arrFilter[i])
            }
        }
    }
}

console.log(filtrarArr(arr2))

// function filtrarUsr( obj){
//     filtrarObj(obj)
// }

// console.log(filtrarUsr(obj))
