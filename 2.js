// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require("prompt-sync")()

let idade = prompt("Informe sua idade: ")

if(idade <= 12){
    console.log("Criança")
}else if(idade <= 17){
    console.log("Adolescente")
}else if(idade <= 60){
    console.log("Adulto")
}else{
    console.log("Idoso")
}