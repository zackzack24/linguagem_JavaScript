let pessoa = {
      "name": "Mateus",
      "age": 29,
      "position": "Developer",
      "hobbies": ["Desenvolver", "Estudar", "Correr"],
}

let pessoaToString = JSON.stringify(pessoa);

console.log(pessoaJson);

// converte json para string

let pessoaToJson = JSON.parse(pessoaToString)
console.log(pessoaToJson);
// volta a ser JSON