let arr = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3];

function iterarArray(arr) {
  if (arr.length == 0) {
    throw new Error("O array precisa ter elementos");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}

function arrayVazio(arr) {
  if (arr.length > 0) {
    throw Error("O array não pode ter elementos");
  } else {
    console.log("Agora deu Certo");
  }
}

iterarArray(arr);
iterarArray(arr2);
