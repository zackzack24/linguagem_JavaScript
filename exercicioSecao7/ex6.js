// Detecta o tipo de dado passado, number boolean ou string

function verificarTipoDeDado(dado) {
      // if(typeof dado === "string") {
      //       console.log(`${dado} é uma string`);
      // }
      // if(typeof dado === "boolean") {
      //       console.log(`${dado} é um booleano`);
      // }
      // if(typeof dado === "number") {
      //       console.log(`${dado} é um number`);
      // }
      if(typeof dado === "string") {
            console.log("Este dado é uma string");
      } else if(typeof dado === "boolean") {
            console.log("Este dado é um booleano");
      } else if(typeof dado === "number") {
            console.log("Este dado é um number");      
      }
}

verificarTipoDeDado("José");
verificarTipoDeDado(24252);
verificarTipoDeDado(44/31);
verificarTipoDeDado(true);

