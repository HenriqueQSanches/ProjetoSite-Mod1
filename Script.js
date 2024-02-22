document.addEventListener("DOMContentLoaded", function() {

function coletarFusoBrasil() {
    fusoBrasil = new Date();
    fusoBrasil.setUTCHours(fusoBrasil.getUTCHours);
    let exibirFuso = fusoBrasil.toLocaleString();
    document.getElementById("outBrasil").innerHTML = exibirFuso;
}


function exibirFusoBrasil() {
    fusoBrasil = new Date()
    let exibirFuso = fusoBrasil.toLocaleString();
    document.getElementById("outBrasil").innerHTML = exibirFuso;
}


exibirFusoBrasil()
setInterval (exibirFusoBrasil, 1000);


});

function inicio() {
    window.location.assign('Index.html')
}

function sobre() {

    // -- Fiz o uso do ASSIGN, porque quero que fique no histórico do navegador do usuário, caso ele queira voltar a página só clicando no botão voltar -- \\
    window.location.assign('Sobre.html');
}

function atividades() {
    alert("Ainda não está pronto");
}


