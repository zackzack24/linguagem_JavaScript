const comp1 = true;
const comp2 = false;
const comp3 = true;

// Funções booleanas puras
const saoIguais = (a, b) => a === b;
const operacaoAND = (a, b) => a && b;
const operacaoOR = (a, b) => a || b;
const operacaoXOR = (a, b) => (a && !b) || (!a && b);

const criarMensagemBooleana = (tipo) => (resultado, nome1, nome2, descricao) => {
    const mensagens = {
        igualdade: `comp${nome1} ${resultado ? 'é igual a' : 'não é igual a'} comp${nome2}`,
        condicao: `A condição ${descricao} é ${resultado ? 'verdadeira' : 'falsa'}`,
        xor: `comp${nome1} XOR comp${nome2} é ${resultado ? 'verdadeiro' : 'falso'}`
    };
    return mensagens[tipo];
};

// Configurações
const configuracoes = [
    { tipo: 'igualdade', fn: () => saoIguais(comp1, comp2), n1: 1, n2: 2 },
    { tipo: 'igualdade', fn: () => saoIguais(comp1, comp3), n1: 1, n2: 3 },
    { tipo: 'condicao', fn: () => operacaoAND(comp1, comp3) || comp2, desc: '(comp1 AND comp3) OR comp2' },
    { tipo: 'xor', fn: () => operacaoXOR(comp1, comp2), n1: 1, n2: 2 }
];

// Processamento
configuracoes.forEach(config => {
    const mensagemFn = criarMensagemBooleana(config.tipo);
    console.log(mensagemFn(config.fn(), config.n1, config.n2, config.desc));
});