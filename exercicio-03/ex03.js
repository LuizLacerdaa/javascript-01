 let nome = prompt ("Digite seu nome: ")
 let idade = parseFloat(prompt("Digite sua idade: "))

if (idade>=18){
    alert ("Ola "+nome+", Seja bem-vindo(a) a nossa escola! Já fez sua matricula?")
}
else if (idade<18){
    alert ("Olá "+nome+", você ainda não pode fazer as aulas de direção.")
}
