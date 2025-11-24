// Usando Classes para Comparações
// Organiza o código em uma estrutura orientada a objetos
let comp1 = 10;
let comp2 = 100;
let comp3 = 1000;

class Comparador {
  constructor(comp1, comp2, comp3) {
      this.comp1 = comp1;
      this.comp2 = comp2;
      this.comp3 = comp3;
  }
  
  compararIgualdade(a, b, nomeA, nomeB) {
      return a === b ? 
          `comp${nomeA} é igual a comp${nomeB}` : 
          `comp${nomeA} não é igual a comp${nomeB}`;
  }
  
  verificarCondicaoComposta() {
      const condicao = this.comp2 < this.comp3 && this.comp3 > this.comp1;
      return condicao ? 
          "A condição é verdadeira" : 
          "A condição não é verdadeira";
  }
  
  executarTodasComparacoes() {
      console.log(this.compararIgualdade(this.comp1, this.comp2, 1, 2));
      console.log(this.compararIgualdade(this.comp1, this.comp3, 1, 3));
      console.log(this.verificarCondicaoComposta());
  }
}

// Uso
const comparador = new Comparador(10, 100, 1000);
comparador.executarTodasComparacoes();
  