let num1 = parseFloat(prompt("Digite o primeiro numero"))
let num2 = parseFloat(prompt("Digite o segundo numero"))
let simbolo = prompt("Informe a operação: \n 1- Soma \n 2- Subtração \n 3- Divisão \n 4- Multiplicação")

if (simbolo == "1"){
    alert ("O resultado da operação é: " + (num1+num2))
}
else if( simbolo == "2"){
    alert ("O resultado da operação é: " + (num1-num2))
}
else if(simbolo == "3"){
    alert ("O resultado da operação é: " + (num1/num2))
}
else if(simbolo == "4"){
    alert ("O resultado da operação é: " + (num1*num2))
}
else{
    alert ("operação ine")
}