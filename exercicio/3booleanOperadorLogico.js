let js = true;
let comp1 = true;
let comp2 = false;
let comp3 = true;

// Comparações booleanas com operadores lógicos
console.log(`comp1 ${comp1 === comp2 ? 'é igual a' : 'não é igual a'} comp2`);
console.log(`comp1 ${comp1 === comp3 ? 'é igual a' : 'não é igual a'} comp3`);
console.log(`A condição ${(comp2 || comp3) && (comp3 && comp1) ? 'é verdadeira' : 'não é verdadeira'}`);