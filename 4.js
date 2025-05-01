// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

let opcao = Number(prompt("Escolha uma das opções: 1 - Cachorro-Quente \ 2 - Hamburguer \ 3 - Pizza \ 4 - Pao de Queijo \" "))

switch(opcao){
    case 1:
        console.log("Cachorro-Quente")
        break
    case 2:
        console.log("Hamburguer")
        break
    case 3:
        console.log("Pizza")
        break
    case 4:
        console.log("Pão de Queijo")
        break
    default:
        console.log("Opção inválida")
        break
}