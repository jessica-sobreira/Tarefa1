// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require("prompt-sync")()

let ladoA = Number(prompt("Informe o lado A: "))
let ladoB = Number(prompt("Informe o lado B: "))
let ladoC = Number(prompt("Informe o lado C: "))

if(ladoA == ladoB && ladoB == ladoC){
    console.log("Equilatero")
}else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
    console.log("Isosceles")
}else{
    console.log("Escaleno")
}
