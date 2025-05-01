// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require("prompt-sync")()

let peso = prompt("Informe seu peso: ")
let altura = prompt("Informe sua altura (Ex: 1.70): ")

let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("Abaixo do peso")
}else if(imc < 25){
    console.log("Peso normal")
}else if(imc < 30){
    console.log("Sobrepeso")
}else{
    console.log("Obesidade")
}