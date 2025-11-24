// Função array com Reduce 
// É usado para coisas complexas, pouca aplicabilidade nesse caso simples
let comp1 = 10;
let comp2 = 100;
let comp3 = 1000;


const comparacoes = [
    {
        condicao: comp1 == comp2,
        mensagem: "comp1 é igual a comp2",
        mensagemNegativa: "comp1 não é igual a comp2"
    },
    {
        condicao: comp1 == comp3,
        mensagem: "comp1 é igual a comp3",
        mensagemNegativa: "comp1 não é igual a comp3"
    },
    {
        condicao: comp2 < comp3 && comp3 > comp1,
        mensagem: "A condição é verdadeira",
        mensagemNegativa: "A condição não é verdadeira"
    }
];

comparacoes.forEach(comp => {
    console.log(comp.condicao ? comp.mensagem : comp.mensagemNegativa);
});
