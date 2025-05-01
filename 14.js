// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let num = Number(prompt("Informe um número inteiro não negativo: "));
let fatorial = 1;

if (num < 0) {
  console.log("Não é possível calcular o fatorial de um número negativo.");
} else if (num === 0) {
  console.log("O fatorial de 0 é 1.");
} else {
  for (let i = num; i >= 1; i--) {
    fatorial = fatorial * i; 
  }
  console.log(`O fatorial de ${num} é ${fatorial}`);
}