function someFunction(letter, word) {
  //console.log(letter, word);
  for (let i = 0; i <= word.length; i++) {
    //console.log(letter, word[i], i);
    if (i % 3 && letter === word[i]) {
      console.log(
        "Divisible 3 y coinciden las letras:",
        letter,
        i,
        typeof i,
        word[i]
      );
    } else if (i % 5) {
      console.log(
        "Divisible 5 y coinciden las letras:",
        letter,
        i,
        typeof i,
        word[i]
      );
    } else {
      console.log("Somos felices?");
    }
  }
}

someFunction("x", "paralelepipedo");
