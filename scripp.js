// =====================================
// ACESSIBILIDADE
// =====================================

let tamanhoFonte = 100;
let leituraAtual = null;


// =====================================
// AUMENTAR FONTE
// =====================================

function aumentarFonte() {

    if (tamanhoFonte < 160) {
        tamanhoFonte += 10;
        aplicarTamanhoFonte();
    }

}


// =====================================
// DIMINUIR FONTE
// =====================================

function diminuirFonte() {

    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        aplicarTamanhoFonte();
    }

}


// =====================================
// APLICAR TAMANHO DA FONTE
// =====================================

function aplicarTamanhoFonte() {

    document.documentElement.style.fontSize = tamanhoFonte + "%";

    localStorage.setItem("tamanhoFonte", tamanhoFonte);

}


// =====================================
// ALTO CONTRASTE
// =====================================

function altoContraste() {

    document.body.classList.toggle("alto-contraste");

    salvarConfiguracoes();

}


// =====================================
// ESCALA DE CINZA
// =====================================

function escalaCinza() {

    document.body.classList.toggle("escala-cinza");

    salvarConfiguracoes();

}


// =====================================
// DESTACAR LINKS
// =====================================

function destacarLinks() {

    document.body.classList.toggle("destacar-links");

    salvarConfiguracoes();

}


// =====================================
// ESPAÇAMENTO ENTRE TEXTOS
// =====================================

function aumentarEspacamento() {

    document.body.classList.toggle("espacamento-texto");

    salvarConfiguracoes();

}


// =====================================
// LEITURA DA PÁGINA
// =====================================

function lerPagina() {

    pararLeitura();

    if (!("speechSynthesis" in window)) {

        alert("Seu navegador não possui suporte à leitura de texto.");

        return;

    }

    const texto = document.querySelector("main").innerText;

    leituraAtual = new SpeechSynthesisUtterance(texto);

    leituraAtual.lang = "pt-BR";
    leituraAtual.rate = 0.9;
    leituraAtual.pitch = 1;
    leituraAtual.volume = 1;

    speechSynthesis.speak(leituraAtual);

}


// =====================================
// PARAR LEITURA
// =====================================

function pararLeitura() {

    if ("speechSynthesis" in window) {

        speechSynthesis.cancel();

    }

}


// =====================================
// FLASHCARDS
// =====================================

function mostrarResposta(card) {

    const resposta = card.querySelector(".resposta-flashcard");

    if (resposta) {

        resposta.classList.toggle("mostrar");

    }

}


// =====================================
// RESTAURAR CONFIGURAÇÕES
// =====================================

function restaurarAcessibilidade() {

    tamanhoFonte = 100;

    document.documentElement.style.fontSize = "100%";

    document.body.classList.remove(
        "alto-contraste",
        "escala-cinza",
        "destacar-links",
        "espacamento-texto"
    );

    localStorage.removeItem("tamanhoFonte");
    localStorage.removeItem("altoContraste");
    localStorage.removeItem("escalaCinza");
    localStorage.removeItem("destacarLinks");
    localStorage.removeItem("espacamentoTexto");

}


// =====================================
// SALVAR CONFIGURAÇÕES
// =====================================

function salvarConfiguracoes() {

    localStorage.setItem(
        "altoContraste",
        document.body.classList.contains("alto-contraste")
    );

    localStorage.setItem(
        "escalaCinza",
        document.body.classList.contains("escala-cinza")
    );

    localStorage.setItem(
        "destacarLinks",
        document.body.classList.contains("destacar-links")
    );

    localStorage.setItem(
        "espacamentoTexto",
        document.body.classList.contains("espacamento-texto")
    );

}


// =====================================
// CARREGAR CONFIGURAÇÕES
// =====================================

function carregarConfiguracoes() {

    const fonteSalva = localStorage.getItem("tamanhoFonte");

    if (fonteSalva) {

        tamanhoFonte = Number(fonteSalva);

        document.documentElement.style.fontSize =
            tamanhoFonte + "%";

    }


    if (localStorage.getItem("altoContraste") === "true") {
        document.body.classList.add("alto-contraste");
    }


    if (localStorage.getItem("escalaCinza") === "true") {
        document.body.classList.add("escala-cinza");
    }


    if (localStorage.getItem("destacarLinks") === "true") {
        document.body.classList.add("destacar-links");
    }


    if (localStorage.getItem("espacamentoTexto") === "true") {
        document.body.classList.add("espacamento-texto");
    }

}


// Executar quando a página carregar
document.addEventListener("DOMContentLoaded", carregarConfiguracoes);