const objValuesToFullString = (obj) => {
  return Object.values(obj).join("");
};

console.log(objValuesToFullString({ c: "c", a: "a", r: "r", o: "o" }));
