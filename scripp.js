```javascript
// ========================================
// PORTAL INCLUSIVO
// script.js
// ========================================

"use strict";


// ========================================
// TAMANHO DA FONTE
// ========================================

let tamanhoFonte = 100;


// ========================================
// AUMENTAR FONTE
// ========================================

function aumentarFonte() {

    if (tamanhoFonte < 160) {

        tamanhoFonte += 10;

        document.documentElement.style.fontSize =
            tamanhoFonte + "%";
    }
}


// ========================================
// DIMINUIR FONTE
// ========================================

function diminuirFonte() {

    if (tamanhoFonte > 70) {

        tamanhoFonte -= 10;

        document.documentElement.style.fontSize =
            tamanhoFonte + "%";
    }
}


// ========================================
// LEITOR DE TELA
// ========================================

const sintetizador = window.speechSynthesis;

let falaAtual = null;


// ========================================
// LER PÁGINA
// ========================================

function lerPagina() {

    // Para qualquer leitura anterior
    sintetizador.cancel();

    const conteudo = document.querySelector("main");

    if (!conteudo) {
        return;
    }

    const texto = conteudo.innerText.trim();

    if (!texto) {
        return;
    }

    falaAtual = new SpeechSynthesisUtterance(texto);

    falaAtual.lang = "pt-BR";
    falaAtual.rate = 0.9;
    falaAtual.pitch = 1;
    falaAtual.volume = 1;

    sintetizador.speak(falaAtual);
}


// ========================================
// PARAR LEITURA
// ========================================

function pararLeitura() {

    sintetizador.cancel();

    falaAtual = null;
}


// ========================================
// ALTO CONTRASTE
// ========================================

function altoContraste() {

    document.body.classList.toggle("alto-contraste");
}


// ========================================
// FECHAR MENU AO CLICAR
// CELULAR
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const links =
            document.querySelectorAll(".nav-link");

        const menu =
            document.getElementById("menuPrincipal");

        links.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        if (
                            menu &&
                            menu.classList.contains("show")
                        ) {

                            const bsCollapse =
                                bootstrap.Collapse.getInstance(menu)
                                ||
                                new bootstrap.Collapse(
                                    menu,
                                    {
                                        toggle: false
                                    }
                                );

                            bsCollapse.hide();
                        }
                    }
                );
            }
        );
    }
);


// ========================================
// MENSAGEM DE BOAS-VINDAS
// ========================================

window.addEventListener(
    "load",
    function () {

        console.log(
            "Portal Inclusivo carregado com sucesso."
        );
    }
);


// ========================================
// ATALHOS DO TECLADO
// ========================================

document.addEventListener(
    "keydown",
    function (e) {

        // -------------------------------
        // ALT + =
        // AUMENTAR FONTE
        // -------------------------------

        if (
            e.altKey &&
            (e.key === "+" || e.key === "=")
        ) {

            e.preventDefault();

            aumentarFonte();
        }


        // -------------------------------
        // ALT + -
        // DIMINUIR FONTE
        // -------------------------------

        if (
            e.altKey &&
            e.key === "-"
        ) {

            e.preventDefault();

            diminuirFonte();
        }


        // -------------------------------
        // ALT + C
        // ALTO CONTRASTE
        // -------------------------------

        if (
            e.altKey &&
            e.key.toLowerCase() === "c"
        ) {

            e.preventDefault();

            altoContraste();
        }


        // -------------------------------
        // ALT + L
        // LER PÁGINA
        // -------------------------------

        if (
            e.altKey &&
            e.key.toLowerCase() === "l"
        ) {

            e.preventDefault();

            lerPagina();
        }


        // -------------------------------
        // ESC
        // PARAR LEITURA
        // -------------------------------

        if (e.key === "Escape") {

            pararLeitura();
        }

    }
);
```
