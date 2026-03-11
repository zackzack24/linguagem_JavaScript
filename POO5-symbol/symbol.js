class Cachorro {
  constructor(raca, cor) {
    this.raca;
    this.cor;
  }

  latir() {
    console.log("Au Au");
  }
}

Cachorro.prototype.raca = "Sem raça definida";
// Cachorro.prototype.patas = 4;

let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new Cachorro("Labrador", "Amarelo");

// console.log(labrador.patas);

labrador.latir();

console.log(Cachorro.prototype.raca);
console.log(labrador.raca);

console.log(Cachorro.prototype[patas]);

console.log(labrador[patas]);