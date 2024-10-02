//Operadores Aritiméticos
let x=10;
let y=5;

let soma =x+y; //adição
let subtracao= x-y; //subtração
let multiplicacao= x*y; //multiplicação
let divisao = x/y; //divisão
let resto = x%y; //divisão com resto como resultado

//Operadores de atribuição
let a = 10;
let somaX= a+5; //soma da variavel a + 5
a+=5; //forma simplificada da resolução acima

//Operadores de comparação
let time ='Flamengo';
let maiorTime = time == 'Flamengo';
console.log(maiorTime);

//Estruturas condicionais
const idade = 18
if (idade>=18){
    console.log('Você é maior de idade')
} else {
    console.log('Você é de menor')
}
//Estruturas de repetição
for (let i = 0; i < 5 ; i++) {
    let total = 5*i;
    console.log('5 x ',+i+'='+total)
}
//let contador = 10;

//while (contador<=10) {
    //contador--
    //console.log("contador",contador);
//}