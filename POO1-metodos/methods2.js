const cachorro = {
  raca: "Sem raça definida",
  uivar: function () {
    console.log("AUAUAUAUA");
  },
  rosnar: function () {
    console.log("GRRRR");
  },
  setRaca: function (raca) {
    this.raca = raca;
  },
  getRaca: function() {
    return "A raça é " + this.raca;
  }
};

console.log(cachorro.raca); // Necessário console.log pois não é uma função
cachorro.uivar();
cachorro.rosnar();

cachorro.setRaca("Border Collie");
console.log(cachorro.raca);

console.log(cachorro.getRaca());
