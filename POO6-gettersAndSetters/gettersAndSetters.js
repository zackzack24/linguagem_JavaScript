class Cachorro {
  constructor(raca, cor) {
    this.raca = raca;
    this.cor = cor;
  }

  latir() {
    console.log("Au Au");
  }
  get getCor() {
    return this.cor;
  }
  set setCor(cor) {
    this.cor = cor;
  }
}

let golden = new Cachorro("Pastor Alemão", "Sem Cor");

console.log(golden);

golden.setCor = 'Marrom';

console.log(golden.getCor);