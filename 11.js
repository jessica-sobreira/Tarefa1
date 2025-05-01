// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require("prompt-sync")()

let num1 = Number(prompt("Informe o primeiro número: "))
let num2 = Number(prompt("Informe o segundo número: "))
let num3 = Number(prompt("Informe o terceiro número: "))
let num4 = Number(prompt("Informe o quarto número: "))
let num5 = Number(prompt("Informe o quinto número: "))

for(i = 0; i < 1; i++){
    let soma = num1 + num2 + num3 + num4 + num5
    console.log(`O valor total da soma é ${soma}`)
}