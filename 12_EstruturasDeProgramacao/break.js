for(let i = 0; i < 10; i++){
      let nome = "Isaac";

      if(i == 5){
            nome = "Isaac";
      } else {
            console.log("Nome diferente");
      }

      if(i != 7 && nome == "Isaac"){
            console.log(`O ${i} é diferente de 7 e o nome é ${nome}`);
            break;
      }

      console.log(i);
}