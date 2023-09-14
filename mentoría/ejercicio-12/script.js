/*
Eres contratado por una empresa para desarrollar un algoritmo el cual permita clasificar a sus usuarios. 
Cada usuario es representado como un objeto de javascript y sus keys son la propiedad del mismo. Por ejemplo:

{
    nombre: "Homero Simpson",
    email: "homer@fox.com",
    edad: 33,
    direccion: "Siempreviva 123"
}
Se requiere escribir una función filtrarUsuarios que reciba un array arr como primer parámetro y un objeto filtro como segundo parámetro. 
El array arr tendrá la siguiente forma:\

[usuario1, usuario2, usuario3, ...]

y el objeto filtro:

{
    edad: 33
}

La función filtrarUsuarios deberá retornar un array (uno nuevo) que contenga a todos los usuarios que coincidan 
con lo valores que posee el objeto filtro. Por ejemplo:

let users = [
    {
        nombre: "Pedro Perez",
        email: "pp@gmail.com",
        edad: 45,
        direccion: "9 de julio 3555"
    },
    {
        nombre: "Eugenia Rismondo",
        email: "er@gmail.com",
        edad: 19,
        direccion: "9 de julio 3550"
    }
];

let filtro = {
    edad: 45
};

filtrarUsuarios(user, filtro) // retorna el objeto que corresponde al primer usuario, Pedro Perez.

let filtro2 = {
    edad: 55
};

filtrarUsuarios(users, filtro2) // retorna un array vació []


*/

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
        for (let i = 0; i < arrFilter.length; i++) {
            if (arrFilter.includes(objStr)) {
                return 'línea 56, coincide el:', arrFilter[i]
            } else {
                return 'no coincide el:', arrFilter[i]
            }
        }
    }
}

console.log(filtrarArr(arr2))

// function filtrarUsr( obj){
//     filtrarObj(obj)
// }

// console.log(filtrarUsr(obj))
