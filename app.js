function fnSaudacao() {

    let nomeCompleto = ("")
    nomeCompleto = prompt("informe seu nome completo:")
    alert ("Seja bem vindo (a) " + nomeCompleto + " ao meu site")
}


function fnTrocarCorDeFundo() {

    let cor = prompt("Informe uma cor: \n 1-azul \n 2-Vermelho \n 3-preto \n 4-Verde \n 5-Rosa \n 6-Laranja")
    let corDeFundo = null

    if (cor == "1") {
        corDeFundo = "blue"
    }
    else if (cor == "2") {
        corDeFundo = "red"
    }
    else if (cor == "3") {
        corDeFundo = "black"
    }
    else if (cor == "4") {
        corDeFundo = "green"
    }
    else if (cor == "5") {
        corDeFundo = "pink"
    }
    else if (cor == "6") {
        corDeFundo = "orange"
    }
    else {
        corDeFundo = "antiquewhite"
    }

    document.body.style.backgroundColor = corDeFundo

}

function fnMostrarHoraAtual(){
    const agora = new Date ()
    const horas = agora.getHours ()
    const minutos = agora.getMinutes()
    const segundos = agora.getSeconds ()

    alert (`Hora atual: ${horas}:${minutos}:${segundos} `)
    
}

function fnTrocarTitulo(){
    let nome = ("")
    nome = prompt("Qual titulo você deseja colocar?")
    document.getElementById ("titulo").innerText= nome
}

function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "INICIAL"
    document.getElementById("menu2").innerText = "SERVIÇOS"
    document.getElementById("menu3").innerText = "CONTATO"
}

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "HOME"
    document.getElementById("menu2").innerText = "SERVICES"
    document.getElementById("menu3").innerText = "CONTACT"  
}

function fnIdiomaEspanhol(){
    document.getElementById("menu1").innerText = "HOGAR"
    document.getElementById("menu2").innerText = "SERVICIOS"
    document.getElementById("menu3").innerText = "CONTACTO"  
}