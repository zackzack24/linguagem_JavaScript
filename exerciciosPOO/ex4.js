/**
Crie uma classe que simule um carro;
Propriedades: marca, cor, gasolina restante; 
Crie um método de dirigir o carro, que vå diminuindo a gasolina gradativamente;
E um de abastecer para aumentar a gasolina quando necessårio;
 */

class Carro {
  constructor(marca, cor, gasolinaRestante, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.gasolinaRestante = gasolinaRestante;
    this.consumo = consumo;
  }

  dirigir(km) {
    let litrosConsumidos = km / this.consumo;
    this.gasolinaRestante -= litrosConsumidos;
    console.log(`Andamos por ${km} km`);
  }

  abastecer(l) {
    this.gasolinaRestante += l;
    console.log(`Abasteci o Pálio com ${l} litros`)
  }
}
let palio = new Carro("fiat", "preto", 20, 10);
console.log(palio);

palio.dirigir(200);
console.log(palio);

palio.abastecer(20);
console.log(palio);

palio.dirigir(5);
console.log(palio);
