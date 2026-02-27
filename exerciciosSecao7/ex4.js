// função que retorna um número aleatório
// usando Math.random()

// function numeroAleatorio(x) {
//       let numeroAleatorio = Math.random();
//       if (x <= 25) {
//             console.log(x)
//       } else {
//             console.log("Somente números abaixo de 25");
//       }

// }

// numeroAleatorio();

function numeroAleatorio(num) {
      return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(100));
console.log(numeroAleatorio(40));
console.log(numeroAleatorio(200));              