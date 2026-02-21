// Função para verificar se o usuário pode tirar carteira de habilitação

function podeDirigir(nome, idade ) {
      if (idade >= 18 ) {
            console.log(` ${nome} você tem ${idade} anos e pode dirigir`)
      } else {
            console.log(` ${nome} você não tem 18 anos e não pode dirigir`) 
      }
}

podeDirigir("Isaac", 21);
podeDirigir("Fulano", 14);