/*
Crie uma classe que simula uma conta no banco (utilize a forma que  preferir);                       
Deve conter a propriedade saldo;
E os métodos deposito e saque; Teste os métodos; 
*/

class Banco {
      constructor(somar, subtrair) {  
            this.somar = somar;
            this.subtrair = subtrair;          
      }
      somar(a, b) {
            let somar = a + b;
            this.somar = somar;
      }
      subtrair(a, b) {
            let subtrair = a - b;
            this.subtrair = subtrair;
      }
}

Banco.getSoma = 10, 20;
console.log(Banco.getSoma);

Banco.getSubtrair = 10, 20;
console.log(Banco.getSubtrair);

// Gabarito

class Conta {
      constructor(saldo) {
            this.saldo = saldo;
      }
      deposito(valor) {
            this.saldo += valor;
      }

      saque(valor) {
            this.saldo -= valor;
      }
}

let conta = new Conta(1000);

conta.deposito(1000);

console.log(conta.saldo);

conta.saque(500);

console.log(conta.saldo);
