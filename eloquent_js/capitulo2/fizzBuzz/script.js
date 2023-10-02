/*
    Escribe un programa que use console.log para imprimir todos los números de 1 a 100, con dos excepciones. 
    Para números divisibles por 3, imprime "Fizz" en lugar del número, 
    y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

    Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", 
    para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" 
    para números divisibles por solo uno de ellos).

    (Esta es en realidad una pregunta de entrevista que se ha dicho elimina 
    un porcentaje significativo de candidatos a programadores. Así que si la puedes resolver, 
    tu valor en el mercado laboral acaba de subir).
*/

const fizz = 'Fizz'
const buzz = 'Buzz'
const longitud = 100

for (let i = 0; i < longitud; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.table(`${fizz}${buzz} ${i}`)
    } else if (i % 5 == 0) {
        console.log(`${fizz} ${i}`)
    } else if (i % 3 == 0) {
        console.log(`${buzz} ${i}`)
    }
}


