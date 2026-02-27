// Função que recebe um número positivo e retorna um número negativo
// usando Math.abs

// function numeroPositivo(x) {
//       return Math.abs(x);
// }


// console.log(numeroPositivo(-9));

// let numero = -3;

// function tornarPositivo(n) {
//     if (n <= 0) {
//         // Se ainda for negativo ou zero, soma 1 e tenta de novo
//         return tornarPositivo(n + 1);
//     } else {
//         // "Se já for positivo apenas mostre no console"
//         console.log(n);
//         return n;
//     }
// }

// tornarPositivo(numero);

function numeroPositivo(numeroNegativo) {
      return Math.abs(numeroNegativo);
}

console.log(numeroPositivo(-13));
console.log(numeroPositivo(13));
console.log(numeroPositivo(42));
