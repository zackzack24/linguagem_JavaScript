let cachorro = {
  patas: 4,
  raca: "Sem raça definida",
  latir: function () {
    console.log("Au Au");
  },
};

console.log(cachorro);

let labrador = Object.create(cachorro);
labrador.latir();
labrador.raca = "Labrador";

console.log(labrador.raca);

console.log(cachorro.raca);

let salsichinha = Object.create(cachorro);
console.log(salsichinha);
cachorro.raca = "Salsichinha";

console.log(cachorro.raca);

let pastor = Object.create(cachorro);
pastor.raca = "Pastor Alemão";

console.log(pastor);
console.log(pastor.raca);
