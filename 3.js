// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")()

let nota = prompt("Informe sua nota: ")

if(nota >= 7){
    console.log("Você foi Aprovado!")
}else if(nota >= 5){
    console.log("Em Recuperação")
}else{
    console.log("Você foi Reprovado")
}