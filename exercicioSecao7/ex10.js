//  Função que recebe um número e o decrementa de 1 em 1 com loop

function decrementaUm(number) {
      for(let i = number; i >= 0; i--) {
            if(i % 1 == 0) {
                  console.log(i);
            } 
            // else {
            //       console.log(`Escolha outro número`)
            // }
      }
}

decrementaUm(10);
