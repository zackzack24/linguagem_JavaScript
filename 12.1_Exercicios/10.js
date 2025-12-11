/*
Armazene a velocidade de um carro em uma variavel, com o número que desejar,
Faça uma eestrutura if else que verifica se ele está acima da velocidade,
velocidade max = 80
exibir mensagem no console.log
*/ 


// forma simples
let velocidade = 90;

if(velocidade > 90) {
      console.log("Multado!")
} else {
      console.log("Na velocidade da Via!")
}

// forma com mais variáveis e usando template literals
let condutor = "Isaac";
let carro = true;
const velCarro = 79;
const velMax = 80;

if(velCarro > velMax) {
      console.log(`${condutor}, está multado!`)
} else { 
      console.log(`${condutor}, está na velocidade da via!`)
}

