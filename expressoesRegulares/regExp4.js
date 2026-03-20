let validarDominio = /www.\w+\.com|com.br/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.teste"));
console.log(validarDominio.test("teste.com"));
console.log(validarDominio.test("www.lalalalala.com"));
console.log(validarDominio.test("banana"));
console.log(validarDominio.test("java"));
console.log(validarDominio.test("www.lojalojaloja.com"));

let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@email.com"));
console.log(validarEmail.test(""));
console.log(validarEmail.test("aaaaaa"));
console.log(validarEmail.test("lalalalalalala"));
console.log(validarEmail.test("q12133@gmail.com"));

let validarDatas = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;

console.log(validarDatas.test("01/02/2025"));
console.log(validarDatas.test("1/2/25"));
console.log(validarDatas.test("ab/cd/efgh"));
