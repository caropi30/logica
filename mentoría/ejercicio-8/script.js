
//Hacer una función que reciba un array de palabras(strings) que retorne un array con la cantidad de vocales de cada palabra.

const stringArrVocalQuantity = (strArr) => {
  let vocals = ['a', 'e', 'i', 'o', 'u']
  let word = ''
  let sumVocals = 0; 
  let arrFinal = []

  for(let i = 0; i <= strArr.length -1; i++){
    word = strArr[i]
    console.log(word)

    for(let x = 0; x <= word.length -1; x++){
      console.log(word[x])
      if(vocals.includes(word[x])){
            sumVocals = sumVocals+1
            //console.log(sumVocals)
        }
    }
     
    console.log(sumVocals)
  }
  arrFinal.push(sumVocals)
  console.log(arrFinal)
}

//stringArrVocalQuantity("carolina");
stringArrVocalQuantity(["carolina"])