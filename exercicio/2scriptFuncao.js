// Usando Função e Operador Ternário
let comp1 = 10;
let comp2 = 100;
let comp3 = 1000;

//  Compara dois valores e exibe a mensagem apropriada
function compararValores(valor1, valor2, mensagem) {
      const resultado = valor1 == valor2 ? "é igual a" : "não é igual a";
      console.log(`comp${mensagem} ${resultado} comp${valor1 === comp1 ? 2 : 3}`);
  }
  
//   Verifica se todas as condições são verdadeiras
  function verificarCondicao(cond1, cond2, cond3) {
      const resultado = cond1 && cond2 && cond3 ? "verdadeira" : "não é verdadeira";
      console.log(`A condição é ${resultado}`);
  }
  
  compararValores(comp1, comp2, "1");
  compararValores(comp1, comp3, "1");
  verificarCondicao(comp2 < comp3, comp3 > comp1, true);
  