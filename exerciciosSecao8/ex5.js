
/*  criar um array com 5 nomes,
verificar se determinado nome está no Array
se estiver imprimir alguma mensagem no console
*/

let nomes = ["Fábio", "Felipe", "Fernando", "Fabrício", "Fátima"]

 if (nomes.includes("Fátima") == true) {
      console.log(nomes);
      console.log(`A ${"Fátima"} está na lista`);
 } else {
      console.log(`A ${"Fátima"} não está na lista`);
 }
