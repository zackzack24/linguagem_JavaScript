let num = 1;
let num1 = 2;
let num2 = 3;
let num3 = 4;
let num4 = 5;

function imprimirNumeros(...args) {
      for(let i = 0; i < args.length; i++) {
            console.log(args[i]);
      }
}

imprimirNumeros(num1,num3,num4);
console.log("Pausa");
imprimirNumeros(num4,num2,num4);
console.log("Pausa");
imprimirNumeros(1,2,4,5,44,24,5,562,1);      