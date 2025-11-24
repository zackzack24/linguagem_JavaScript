// Curryng e Composição de Funções para Comparações
// Serve para criar funções reutilizáveis e especializadas, usando java script puro
const comp1 = 10;
const comp2 = 100;
const comp3 = 1000;

// Currying para criar funções especializadas
const compararCom = (valorBase) => (valorComparado) => valorBase === valorComparado;
const criarMensagem = (tipo) => (resultado) => (nome1, nome2) => 
    tipo === 'igualdade' 
        ? `comp${nome1} ${resultado ? 'é igual a' : 'não é igual a'} comp${nome2}`
        : `A condição ${resultado ? 'é verdadeira' : 'não é verdadeira'}`;

// Aplicação
const compararComComp1 = compararCom(comp1);
const mensagemIgualdade = criarMensagem('igualdade');
const mensagemCondicao = criarMensagem('condicao');

console.log(mensagemIgualdade(compararComComp1(comp2))(1, 2));
console.log(mensagemIgualdade(compararComComp1(comp3))(1, 3));
console.log(mensagemCondicao(comp2 < comp3 && comp3 > comp1)());