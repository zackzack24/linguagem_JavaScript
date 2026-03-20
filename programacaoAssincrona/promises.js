let p = Promise.resolve(5);

console.log(p);

p.then((value) => {console.log(`o valor é ${value}`)}) 
.then((value) => {console.log(`o valor é ${value}`)});

let promiseError = Promise.resolve(new Error("Algo Deu Errado"));

promiseError
  .then((value)  => console.log(value))
  .catch(reason => console.log("Erro:" + reason));