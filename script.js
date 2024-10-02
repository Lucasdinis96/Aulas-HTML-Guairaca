//Declarações de variáveis
var time = "Palmeiras";
let idade = 25;
idade = "25 anos";
const cidade = "São Paulo";
//Tipos de dados
//Primitivos
let saudacao = "Olá Mundo";
let preco = 19.99;
let estaChovendo = false;
//Complexos (objetos)
let teclado = {
    Marca: 'HP',
    peso:'1kg',
    cor:'Branco',
    tipo: 'Mecanico'
}
teclado.Marca = 'Dell';
console.log(teclado);
let cores = ['Vermelho','Azul','Laranaja'];
console.log(cores)
//Concatenação entre strings
let nome='Mateus'
let message = "Olá "+nome+", seja bem vindo";
console.log(message)
//Conversão de tipos
let numero = 100;
let numeroConvertido = String(numero);

let str = '123';
let strConvertido = Number(str);