let termo1=6;
let termo2=2;
let operacao="multiplicao";
function calculadora (termo1,termo2,operacao) {
   if (operacao == "soma"){
    resultado=termo1+termo2
    return console.log(termo1,'+',termo2,"=",resultado);
   }
   if (operacao == "subtracao"){
    resultado=termo1-termo2;
    return console.log(termo1,"-",termo2,"=",resultado);
   }
   if (operacao == "multiplicao"){
    resultado=termo1*termo2;
    return console.log(termo1,"*",termo2,"=",resultado);
   }
   if (operacao == "divisao"){
    resultado=termo1/termo2;
    return console.log(termo1,'/',termo2,"=",resultado);
   } else {
      return console.log("Operação Inválida!")
   }
}
calculadora (termo1,termo2,operacao);
