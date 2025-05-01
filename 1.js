//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")()

let num = prompt("Informe um número: ")

if(num % 2 == 0){
    console.log(`O número ${num} é par`)
}else{
    console.log(`O número ${num} é ímpar`)
}

