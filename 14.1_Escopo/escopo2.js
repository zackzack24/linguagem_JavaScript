let x = 10;

if(true) {
      let x = 20;
      console.log(x); // escopo if
}

console.log(x) // escopo global

let z = 10;

if(z > 50) {
      let z = 20;
      z++;
      console.log(z); // escopo if
}

console.log(z) // escopo global