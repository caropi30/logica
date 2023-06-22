const objectValuesToArr = (obj) => {
  return Object.values(obj);
};

console.log(
  objectValuesToArr({ a: 1, b: 2, nombre: "carolina", mascota: true })
);
