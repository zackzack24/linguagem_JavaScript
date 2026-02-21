function repetirFrase(frase, n=2) {
      for(let x = 1; x <= n; x++) {
            console.log(frase + "  " + x);
      }
}

repetirFrase("Testando", 5);
repetirFrase("Duas vezes");

function potencia(base, expoente=2) {
      return Math.pow(base, expoente);
}

console.log(potencia(1));
console.log(potencia(2,4));
console.log(potencia(5));
console.log(potencia(7,10));