function checarNumero(num) {
  let number = Number(num);
  if (Number.isNaN(number)) {
    console.log("Por favor, passe só números para o programa");
  } else {
      console.log(`${num} é um number.`);
    return number;
  }
}

checarNumero(5);
checarNumero("Abracadabra");
checarNumero(5333);
checarNumero("Abracadabra");
checarNumero(2442425);
checarNumero("Abracadabra");
checarNumero(4444);
checarNumero("Abracadabra");