const person = {
  name: "jhon",
  lastname: "Doe",
};

const { name: fname, lastname: lname } = person;

console.log(fname);
console.log(lname);

let obj = {
      rodas: 4,
      portas: 4,
      tetoSolar: true,
      motor: "2.0"
}

const {rodas: vRodas, portas: vPortas, tetoSolar: vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas);
console.log(vTetoSolar);
console.log(vMotor);