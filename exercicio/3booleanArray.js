let js = true;
let comp1 = true;
let comp2 = false;
let comp3 = true;

const operacoesBooleanas = [
    {
        tipo: 'igualdade',
        valor1: comp1,
        valor2: comp2,
        nome1: 1,
        nome2: 2
    },
    {
        tipo: 'igualdade', 
        valor1: comp1,
        valor2: comp3,
        nome1: 1,
        nome2: 3
    },
    {
        tipo: 'condicao',
        condicao: (comp1 && comp3) || comp2,
        descricao: '(comp1 AND comp3) OR comp2'
    },
    {
        tipo: 'xor',
        valor1: comp1,
        valor2: comp2,
        nome1: 1,
        nome2: 2
    }
];

operacoesBooleanas.forEach(op => {
    let mensagem;
    switch(op.tipo) {
        case 'igualdade':
            mensagem = `comp${op.nome1} ${op.valor1 === op.valor2 ? 'é igual a' : 'não é igual a'} comp${op.nome2}`;
            break;
        case 'condicao':
            mensagem = `A condição ${op.descricao} é ${op.condicao ? 'verdadeira' : 'falsa'}`;
            break;
        case 'xor':
            const xor = (op.valor1 && !op.valor2) || (!op.valor1 && op.valor2);
            mensagem = `comp${op.nome1} XOR comp${op.nome2} é ${xor ? 'verdadeiro' : 'falso'}`;
            break;
    }
    console.log(mensagem);
});