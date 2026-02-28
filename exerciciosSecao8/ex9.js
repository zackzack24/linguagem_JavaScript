/* 
criar um array a partir de uma frase, imprimir cada palavra do array no console usando um "for"
*/

const setoresEmpresa = "Tecnologia Vendas Marketing Financeiro Atendimento ao Cliente";

const setoresEmpresaArr = setoresEmpresa.split("  ");


console.log(setoresEmpresa);
console.log(setoresEmpresaArr);

for(let quantidade = "0"; quantidade < setoresEmpresaArr.length; quantidade++) {
      console.log(setoresEmpresaArr[quantidade])
}