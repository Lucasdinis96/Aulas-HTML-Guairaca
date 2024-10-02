console.log('Exercicio 1 - Verificação de Maioridade')
function idade(){
    let idade = 19
    console.log('Idade: ',idade);
    if(idade >=18){
        console.log("Você é maior de idade.");
    } else {
        console.log('Você é menor de idade.');
    }
}
idade();
console.log ('');
console.log('Exercício 2 Par ou Ímpar')
function parouimpar(){
    let numero = 38
    console.log('Número:', numero)
    divisao = numero % 2;
    if (divisao == 0){
        return console.log('Par');
    } else {
        return console.log('Impar');
    }
}
parouimpar();
console.log ('');
console.log('Exercício 3 - Verificação de Número Positivo, Negativo ou Zero.');
function verificao() {
    let numero = -54
    console.log('Número:', numero);
    if (numero>0) {
        console.log("Positivo");
    } else if (numero<0) {
        console.log('Negativo');
    } else {
        console.log("Zero")
    }
}
verificao();
console.log ('');
console.log('Exercício 4 - Tabuada.')
function tabuada(){
    let numero = 1879;
    console.log('Número: ',numero);
    for (let i = 0; i < 11; i ++){
        let total=numero*i;
        console.log (numero,'x',i,'=',total)
    }
}
tabuada();