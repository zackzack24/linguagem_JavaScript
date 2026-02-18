/*
Estrutura complexa
Declarar sempre com a palavra FUNCTION
Deve ter um nome
Contêm parâmetros, argumentos definidos entre ()
Com o Corpo definido entre {}
Geralmente retorna um valor
É possível declarar funções dentro de variáveis
*/ 

function escreverNoConsole() {
      console.log("Escrevendo no Console");
}

escreverNoConsole(); // executando e chamando a função

const textoNoConsole = function() {
      console.log("Texto no Console!");
      // função sem nome é chamada de função anônima
}

textoNoConsole(); // executando e chamando a função

const textPorParametro = function(texto) {
      console.log(texto);
}

textPorParametro("Testando Por Parâmetro");

function imprimirNoConsole() {
      console.log("Hello World")
}

imprimirNoConsole();

function imprimirUmNumero(num) {
      console.log("Número " + num)
}

imprimirUmNumero(999);
imprimirUmNumero(5333);
imprimirUmNumero(996369);

const numeroAleatorio = function() {
      console.log(Math.random());
}

numeroAleatorio();
numeroAleatorio();


