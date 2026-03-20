const reg1 = new RegExp("Bola");

console.log(reg1.test("Tem Bola?"));
console.log(reg1.test("Não?"));

const reg2 = /bola/;

let text = "Não tem Bola na Cesta";

console.log(reg2.test("Tem Bola?"));
console.log(reg2.test("Não?"));

console.log(/Quadrado/.test("Quadrado"));
console.log(/Quadrado/.test("3343Quadrado42242"));