//Hacer una función que reciba un objeto el cual posee propiedades con valores de string como resultado de la concatenación de todos los valores de las propiedades del objeto.

const objValuesToFullString = (obj) => {
  return Object.values(obj).join("");
};

console.log(objValuesToFullString({ c: "c", a: "a", r: "r", o: "o" }));
