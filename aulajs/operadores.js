/* ================================= 
      OPERADORES DE COMPARAÇÃO

=== Igual e do mesmo tipo
!=  Diferente de
!== Diferente, inclusive do tipo
====================================
*/

console.log(4 =="4") //true
console.log(4 === "4") //false
console.log(4 !== "4") //true
console.log(4 != "4") //false
//OBS: MESMO TIPOS DIFERENTES CONTINUA SENDO IGUAL







/*======================================================
            OPERADORES DE LÓGICOS

   && "E" As duas condições devem ser verdadeiras
          para que a condição final seja verdadeira.

   ||       "OU" Uma das condições final seja verdadeira,
          para que a condição final seja verdadeira.

    !      "NÃO" Nega uma condição

========================================================*/

console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //false

console.log(5 != 5 || 6 == 6) //true
console.log(5 == 5 || 6 != 6) //true

console.log(!(5 > 6)) //true
console.log(!(5 < 6)) //false