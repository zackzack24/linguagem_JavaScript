/* 
Estrutura if else que verifica se um usuário pode dirigir,
Armazenar informações como, idade e nome,
*/

let nome = "Usuário";
let idade = 15;
let cnh = true;

if(idade >= 18 && cnh == true){
      console.log(`${nome}, você pode dirigir!`)
} else if(idade >= 18 && cnh != true){
      console.log(`${nome}, você não pode dirigir, pois não possui Carteira de Habilitação!`)
} else {
      console.log(`${nome}, você não pode dirigir, pois não possui idade necessária!`)
}