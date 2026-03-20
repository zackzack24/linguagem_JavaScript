console.log("1");

setTimeout(function() {
      console.log("5");
}, 2000);

console.log("2");
console.log("3");
console.log("4");
console.log("Hello World");

function greeting(name) {
      alert("Olá " + name);
    }
    
    function processUserInput(callback) {
      var name = prompt("Por favor insira seu nome.");
      callback(name);
    }
    
    processUserInput(greeting);