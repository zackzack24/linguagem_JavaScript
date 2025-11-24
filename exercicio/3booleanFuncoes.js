let js = true;
let comp1 = true;
let comp2 = false;
let comp3 = true;

function compararBooleanos(bool1, bool2, nome1, nome2) {
    const saoIguais = bool1 === bool2;
    return `comp${nome1} ${saoIguais ? 'é igual a' : 'não é igual a'} comp${nome2}`;
}

function verificarCondicaoBooleana(...condicoes) {
    const resultado = condicoes.every(cond => cond === true);
    return `A condição é ${resultado ? 'verdadeira' : 'não é verdadeira'}`;
}

console.log(compararBooleanos(comp1, comp2, 1, 2));
console.log(compararBooleanos(comp1, comp3, 1, 3));
console.log(verificarCondicaoBooleana(comp1 || comp2, comp3 && comp1));