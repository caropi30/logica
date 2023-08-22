// Hacer una función que reciba un array y retorne otro array con la misma cantidad de elementos, pero que cada elemento sea el tipo de dato del array original.

const arr2 = []
// V1
const arrItemTypeOf = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i])
    arr2.push(typeof arr[i])
  }

  console.log(arr2)
}

arrItemTypeOf([
  'carolina',
  30,
  'agosto',
  { mascota: 'Mika', raza: 'perro' },
  [1, 2, 3]
])

// V2

const arrItemTypeOf2 = (arr) => {
  const arr2 = arr.map((item) => typeof item)
  console.log(arr2)
}

arrItemTypeOf2(['pirela', [4, 5, 6]])
