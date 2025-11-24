const comp1 = 10;
const comp2 = 100;
const comp3 = 1000;

// Funções puras para reutilização
const criarMensagemIgualdade = (valor1, valor2, nome1, nome2) => 
    `comp${nome1} ${valor1 === valor2 ? 'é igual a' : 'não é igual a'} comp${nome2}`;

const criarMensagemCondicao = (condicao) => 
    `A condição ${condicao ? 'é verdadeira' : 'não é verdadeira'}`;

// Array de configurações para cada comparação
const configuracoes = [
    { v1: comp1, v2: comp2, n1: 1, n2: 2, tipo: 'igualdade' },
    { v1: comp1, v2: comp3, n1: 1, n2: 3, tipo: 'igualdade' },
    { condicao: comp2 < comp3 && comp3 > comp1, tipo: 'condicao' }
];

// Processamento das comparações
const mensagens = configuracoes.map(config => {
    if (config.tipo === 'igualdade') {
        return criarMensagemIgualdade(config.v1, config.v2, config.n1, config.n2);
    } else {
        return criarMensagemCondicao(config.condicao);
    }
});

// Output
mensagens.forEach(mensagem => console.log(mensagem));
