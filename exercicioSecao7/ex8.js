// função que recebe uma string e se o texto tiver mais de 10 letrar imprime (texto muito longo),
// Se tiver menos de 10 imprime, texto dentro do limite

function dez(frase) {
  // let dez = String;
  if (frase.length >= 10) {
    console.log(`${frase} é muito longo`);
    return frase;
  } else {
    console.log(`${frase} está dentro do limite`);
    return frase;
  }
}

dez("1234567891011");
dez("1234");
