let js = true;
let comp1 = true;
let comp2 = false;
let comp3 = true;

// Foco em operações booleanas
console.log(`comp1 e comp2 são ${comp1 === comp2 ? 'iguais' : 'diferentes'}`);
console.log(`comp1 e comp3 são ${comp1 === comp3 ? 'iguais' : 'diferentes'}`);
console.log(`A condição OR e AND é ${(comp1 || comp2) && comp3 ? 'verdadeira' : 'falsa'}`);