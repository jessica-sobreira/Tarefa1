// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")()

let ladoA = Number(prompt("Informe o lado A: "))
let ladoB = Number(prompt("Informe o lado B: "))
let ladoC = Number(prompt("Informe o lado C: "))

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    if(ladoA == ladoB && ladoA == ladoC){
        console.log("Triângulo Equilatero")
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        console.log("Triângulo Isóceles")
    }else{
        console.log("Triângulo Escaleno")
    }
}else{
    console.log("Os lados informados não formam um triângulo")
}
