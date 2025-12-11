/**
 Verificar se um número é primo,
 Primos são os números divisíveis por um e por eles mesmos. 
 **/

/*
let numero = 2;
let qtdDivisoes = 2;

for (let primo = 1; primo <= numero; primo++) {

     if (numero % primo == 0) {
           qtdDivisoes++;
     }
}

if (qtdDivisoes == 2) {
     console.log(`${numero} é um número primo!`)
} else {
     console.log(`${numero} não é um número primo!`)
}

*/

let num = 6;
let divisoes = 0;

for (let i = 1; i <= num; i++) {
      if (num % i == 0) {
            divisoes++;
      }
}

if (divisoes == 2) {
      console.log(`O número ${num} é primo!`)
} else {
      console.log(`O número ${num} não é primo!`)
}