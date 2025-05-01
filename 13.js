// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require("prompt-sync")();

let numero;
let soma = 0;
let contador = 0;

console.log("Digite números decimais (digite 0 para sair):");

do {
  numero = Number(prompt("Digite um número: "));

  if (numero !== 0) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

if (contador > 0) {
  const media = soma / contador;
  console.log(`A média dos números digitados é: ${media}`);
} else {
  console.log("Nenhum número foi digitado além de 0.");
}