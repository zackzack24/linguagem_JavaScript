const reg1 = /[12345]/;

console.log(reg1.test("Número 6"));
console.log(reg1.test("Número 25"));

const reg2 = /bola/;

let text = "Não tem Bola na Cesta";

console.log(reg2.test("Tem Bola?"));
console.log(reg2.test("Não?"));

console.log(/Quadrado/.test("Quadrado"));
console.log(/Quadrado/.test("3343Quadrado42242"));

const reg3 = /[0-9]/;

console.log(reg3.test("3"));
