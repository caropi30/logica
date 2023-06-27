//Hacer una función que reciba un objeto y retorne un array con todos los valores de sus propiedades como elementos.

const objectValuesToArr = (obj) => {
  return Object.values(obj);
};

console.log(
  objectValuesToArr({ a: 1, b: 2, nombre: "carolina", mascota: true })
);
