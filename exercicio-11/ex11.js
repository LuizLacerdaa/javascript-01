let nome = prompt("Digite seu nome: ")
let nota1 = parseFloat(prompt("Digite a nota do bimetre 1: "))
let nota2 = parseFloat(prompt("Digite a nota do bimetre 2: "))
let nota3 = parseFloat(prompt("Digite a nota do bimetre 3: "))
let nota4 = parseFloat(prompt("Digite a nota do bimetre 4: "))
let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media>=5){
    alert ("Olá " +nome+ ", sua médiafoi de " +media+ ", Parabéns você foi aprovado!")
}
else{
    alert ("Olá "+nome+ ", sua médiafoi de " +media+ ", você esta reprovado.")
}