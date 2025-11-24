class ComparadorBooleanos {
      constructor(comp1, comp2, comp3) {
          this.comp1 = comp1;
          this.comp2 = comp2;
          this.comp3 = comp3;
      }
      
      // Método para comparar igualdade booleana
      compararIgualdade(a, b, nomeA, nomeB) {
          const saoIguais = a === b;
          return `comp${nomeA} ${saoIguais ? 'é igual a' : 'não é igual a'} comp${nomeB}`;
      }
      
      // Método para verificar condições complexas
      verificarCondicaoComplexa() {
          const condicao = (this.comp1 && this.comp3) || (this.comp2 || this.comp1);
          return `A condição (comp1 AND comp3) OR (comp2 OR comp1) é ${condicao ? 'verdadeira' : 'falsa'}`;
      }
      
      // Método para XOR (ou exclusivo)
      verificarXOR(a, b, nomeA, nomeB) {
          const xor = (a && !b) || (!a && b);
          return `comp${nomeA} XOR comp${nomeB} é ${xor ? 'verdadeiro' : 'falso'}`;
      }
      
      executarTodasComparacoes() {
          console.log(this.compararIgualdade(this.comp1, this.comp2, 1, 2));
          console.log(this.compararIgualdade(this.comp1, this.comp3, 1, 3));
          console.log(this.verificarCondicaoComplexa());
          console.log(this.verificarXOR(this.comp1, this.comp2, 1, 2));
      }
  }
  
  // Uso
  const comparador = new ComparadorBooleanos(true, false, true);
  comparador.executarTodasComparacoes();