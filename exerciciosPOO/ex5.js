/* 
Crie uma classe conta bancaria;
Com as propriedades de saldo na conta corrente, 
saldo na conta poupança e juros da poupança;
Crie os métodos de depósito e saque, também um método para
transferir dinheiro da poupanqa para a corrente;
Além disso crie uma conta especial que herda da conta normal;
Na conta especial os juros são dobrados da conta normal; 
*/

class ContaBancaria {
  constructor(saldoConta, saldoPoupanca, jurosPoupanca) {
    this.saldoConta = saldoConta;
    this.saldoPoupanca = saldoPoupanca;
    this.jurosPoupanca = jurosPoupanca;
  }

  deposito(valor) {
    // let saldoContaTotal = valor + this.valorDeposito;
    this.saldoConta += saldoContaTotal;
  }
  saque(valor) {
    // let saldoContaTotal = valor + this.valorDeposito;
    this.saldoConta -= saldoContaTotal;
  }
}

let contaNova = new ContaBancaria(10, 100, 1);
console.log(contaNova);

contaNova.deposito(10);
console.log(contaNova);
