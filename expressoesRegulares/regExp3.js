const Regexd = /\d/;

console.log(Regexd.test("abcd")); // false
console.log(Regexd.test("1234")); // true
console.log(Regexd.test(" ")); // false
console.log(Regexd.test("*/+-=%")); // false

const Regexw = /\w/;

console.log(Regexw.test("abcd")); // true
console.log(Regexw.test("1234")); // true
console.log(Regexw.test(" ")); // false
console.log(Regexw.test("*/+-=%")); // false

const Regexs = /\s/;

console.log(Regexs.test("abcd")); // false
console.log(Regexs.test("1234")); // false
console.log(Regexs.test(" ")); // true
console.log(Regexs.test("*/+-=%")); // false

const RegexD = /\D/;

console.log(RegexD.test("abcd")); // true
console.log(RegexD.test("1234")); // false
console.log(RegexD.test(" ")); // true
console.log(RegexD.test("*/+-=%")); // true

const RegexW = /\W/;

console.log(RegexW.test("abcd")); // false
console.log(RegexW.test("1234")); // false
console.log(RegexW.test(" ")); // true
console.log(RegexW.test("*/+-=%")); // true

const RegexS = /\S/;

console.log(RegexS.test("abcd")); // true
console.log(RegexS.test("1234")); // true
console.log(RegexS.test(" ")); // false
console.log(RegexS.test("*/+-=%")); // true

const RegexPonto = /\./;

console.log(RegexPonto.test("abcd")); // false
console.log(RegexPonto.test("1234")); // false
console.log(RegexPonto.test(" ")); // false
console.log(RegexPonto.test("*/+-=%")); // false
 
let ano = /\d\d\d\d/;
console.log(ano.test("05")); // false
console.log(ano.test("2020")); // true
console.log(ano.test("opa")); // false

let palavraQuatroLetras = /\w\w\w\w/;
console.log(palavraQuatroLetras.test("Davi")); // true
console.log(palavraQuatroLetras.test("Chocolate")); // true
console.log(palavraQuatroLetras.test("Pastel")); // true
console.log(palavraQuatroLetras.test("1234")); // true

let opcional = /Prova\s\d?/;
console.log(palavraQuatroLetras.test("Prova")); 
console.log(palavraQuatroLetras.test("Teste"));

const padrao = /Abacax?i/;

console.log(padrao.test("Abacaxi")); // true 
console.log(padrao.test("Abacai")); // true

const padrao2 = /\d+\w?/;

console.log(padrao2.test("123")); // true 
console.log(padrao2.test("123abc")); // true

const cep = /\d{5}-\d{3}/;

console.log(cep.test("12345-531")); // true
console.log(cep.test("1234214")); // false
console.log(cep.test("55555555-555")); // true
console.log(cep.test("Llalala")); // false

const validaTel = /\(d{2}\)d{5}-d{4}/;

console.log(validaTel.test("(48)99999-5555")); // false
console.log(validaTel.test("lalalalalalalalalalalalalala")); // false

let teste = /\d+/.exec("O número 10");

console.log(teste); 
console.log(teste.index);

let teste2 = /\d+/.match("O número 10");

console.log(teste2);
console.log(teste2.index);


let frutas = /\d+ (bananas|maças|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("2444 maças"));
console.log(frutas.test("75474 laranjas"));

const reg = /\w+ (lala|lulu|lili)/ 

console.log(reg.test("Nome: lulu"));
console.log(reg.test("Nome: MEU DEUS DO CEU EU SÓ QUERO UM EMPREGOOO"));