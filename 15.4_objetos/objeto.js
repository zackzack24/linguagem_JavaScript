let pessoa = {
      nome: "Matheus",
      profissao: "Programador",
      idade: 28,
      corrida: function() {
            console.log("20 quilômetros em 50 minutos")
      }
}

console.log(pessoa.nome);
console.log(pessoa.idade);
// console.log(pessoa.corrida());
pessoa.corrida();