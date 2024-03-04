document.addEventListener("DOMContentLoaded", function() {

function coletarFusoBrasil() {
    fusoBrasil = new Date();
    fusoBrasil.setUTCHours(fusoBrasil.getUTCHours);
    let exibirFuso = fusoBrasil.toLocaleString();
    document.getElementById("outBrasil").innerHTML = exibirFuso;
}


function exibirFusoBrasil() {
    fusoBrasil = new Date();
    let exibirFuso = fusoBrasil.toLocaleString();
    document.getElementById("outBrasil").innerHTML = exibirFuso;
}


exibirFusoBrasil()
setInterval (exibirFusoBrasil, 1000);


});

function inicio() {
    window.location.assign('index.html')
}

function sobre() {

    // -- Fiz o uso do ASSIGN, porque quero que fique no histórico do navegador do usuário, caso ele queira voltar a página só clicando no botão voltar -- \\
    window.location.assign('Sobre.html');
}

function atividades() {
    window.location.assign('Atividades.html');
}

function credly() {
    window.location.assign('https://www.credly.com/users/henrique-sanches.61b10cce/badges');
}

function linkedin() {
    window.location.assign('https://www.linkedin.com/in/henrique-quitti-sanches-developer/');
}

function github() {
    window.location.assign('https://github.com/henriqueQsanches');
}

