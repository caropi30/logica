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

filtrarUsuarios(users, filtro2) // retorna un array vacio []


*/

const arr = [
    {
        nombre: 'Ignacia',
        apellido: 'Faundez',
        edad: 32,
    },
    {
        nombre: 'Camila',
        apellido: 'Pirela',
        edad: 34,
    },
    {
        nombre: 'Fabiola',
        apellido: 'Centellas',
        edad: 28,
    },
    {
        nombre: 'Ernesto',
        apellido: 'Chamito',
        edad: 34,
    },
]

const arr2 = [
    {
        nombre: 'Ignacia',
        apellido: 'Faundez',
        edad: 32,
    },
]

const obj = {
    edad: 32,
}

const obj2 = {
    edad: 28,
}

const obj3 = {
    edad: 34,
}

const filtrarUsuarios = (user, filtro) => {
    let singleUser = {}
    let iterableSingleUserKeys = []
    let iterableSingleUserKeyStr = ''
    let iterableSingleUserKeyToObj = {}
    const finalArr = []
    const filtroEntries = `${Object.entries(filtro)}`

    user.forEach(obj => {
        singleUser = obj
        iterableSingleUserKeys = Object.entries(singleUser)
        
        iterableSingleUserKeys.forEach(itemKey => {
            iterableSingleUserKeyStr = `${itemKey}`

            if (Object.is(filtroEntries, iterableSingleUserKeyStr)) {
                iterableSingleUserKeyToObj = Object.fromEntries(iterableSingleUserKeys)
                finalArr.push(obj)
            }
        })
    })
  
    if(finalArr.length === 1){
        return iterableSingleUserKeyToObj
    } else {
        return finalArr
    }

}
console.log(filtrarUsuarios(arr, obj))
console.log(filtrarUsuarios(arr2, obj2))
console.log(filtrarUsuarios(arr, obj2))
console.log(filtrarUsuarios(arr, obj3))



