//  Mais comum em operações complexas, bom para ser usado na computação e visualizações matemáticas
const comp1 = true;
const comp2 = false;
const comp3 = true;

// Operações booleanas avançadas
const BooleanOperations = {
    // Igualdade
    equal: (a, b) => a === b,
    
    // Operações básicas
    and: (...args) => args.every(arg => arg === true),
    or: (...args) => args.some(arg => arg === true),
    not: (a) => !a,
    xor: (a, b) => (a && !b) || (!a && b),
    
    // Implicação
    implies: (a, b) => !a || b,
    
    // Equivalência
    equivalent: (a, b) => (a && b) || (!a && !b)
};

// Testando várias operações
const testes = [
    {
        operacao: 'Igualdade comp1 e comp2',
        resultado: BooleanOperations.equal(comp1, comp2),
        mensagem: (r) => `comp1 ${r ? '=' : '≠'} comp2`
    },
    {
        operacao: 'comp1 AND comp3',
        resultado: BooleanOperations.and(comp1, comp3),
        mensagem: (r) => `comp1 AND comp3 = ${r}`
    },
    {
        operacao: 'comp1 OR comp2', 
        resultado: BooleanOperations.or(comp1, comp2),
        mensagem: (r) => `comp1 OR comp2 = ${r}`
    },
    {
        operacao: 'comp1 XOR comp2',
        resultado: BooleanOperations.xor(comp1, comp2),
        mensagem: (r) => `comp1 XOR comp2 = ${r}`
    },
    {
        operacao: 'comp1 → comp3 (implicação)',
        resultado: BooleanOperations.implies(comp1, comp3),
        mensagem: (r) => `comp1 → comp3 = ${r}`
    }
];

testes.forEach(test => {
    console.log(test.mensagem(test.resultado));
});