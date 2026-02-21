let x = 0

while (x < 11) {
      x = x + 1;
      if (x % 2 == 0) {
            console.log("Entra no continue")
            continue; // pula para o próximo loop
      }
      console.log(x);
      x = x + 1;
}