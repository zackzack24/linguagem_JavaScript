/* 
Crie um objeto que simula um endereço de um cliente;
Propriedades: Rua, Bairro, Cidade e Estado;
No construtor o endereço já deve ser definido por completo;
Crie métodos para atualizar todas as propriedades;
*/

class Endereco {
  constructor(rua, bairro, cidade, estado) {
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
  }

  set novaRua(novaRua) {
    this.rua = novaRua;
  }
  set novoBairro(novoBairro) {
    this.bairro = novoBairro;
  }
  set novaCidade(novaCidade) {
    this.cidade = novaCidade;
  }
  set novoEstado(novoEstado) {
    this.estado = novoEstado;
  }
}

let endereco = new Endereco(
  "Rua Zuzubalândia",
  "Bairro Zuzubalândia",
  "Cidade Zuzubalândia",
  "Estado Zuzubalândia",
);

console.log(endereco);

endereco.novaRua = "Rua Zuzuba 2";

console.log(endereco);

endereco.novoBairro = "Bairro Zuzuba 2";

console.log(endereco);

endereco.novaCidade = "Cidade Zuzuba 2";

console.log(endereco);

endereco.novoEstado = "Estado Zuzuba 2";

console.log(endereco);