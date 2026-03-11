class Cachorro {
  constructor(raca, cor) {
    this.raca;
    this.cor;
  }

  latir() {
      console.log("Estou latindo");
  }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro("Labrador", "Amarelo");

console.log(labrador.patas);

labrador.latir();
