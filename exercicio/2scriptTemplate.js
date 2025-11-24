// Bom para páginas dinamicas 
let comp1 = 10;
let comp2 = 100;
let comp3 = 1000;

const resultados = [
    `comp1 ${comp1 === comp2 ? 'é igual a' : 'não é igual a'} comp2`,
    `comp1 ${comp1 === comp3 ? 'é igual a' : 'não é igual a'} comp3`,
    `A condição ${comp2 < comp3 && comp3 > comp1 ? 'é verdadeira' : 'não é verdadeira'}`
];

resultados.forEach(resultado => console.log(resultado));

comparacoes.forEach(comp => {
    console.log(comp.condicao ? comp.mensagem : comp.mensagemNegativa);
});
