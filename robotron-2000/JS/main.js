
const controle = document.querySelectorAll('[data-controle]');
const btnCor = document.querySelectorAll('[data-trocaImagem]');
const estatisticas = document.querySelectorAll('[data-estatistica]');


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

btnCor.forEach((element) => {
    element.addEventListener("click", (evento) => {
        trocaRobo(evento.target.dataset.trocaimagem);
    })
})

controle.forEach((element) => {
    element.addEventListener("click", (evento) => {
        operacao(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca);
    })
});

function operacao(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');


    if (operacao === "-") {
        if (peca.value > 0) {
            parseInt(peca.value--);
        }
    } else {
        parseInt(peca.value++);
    }
}

function atualizaEstatistica(peca) {

    estatisticas.forEach((elemento) => {

        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })

}

function trocaRobo(cor) {
    document.querySelector('.robo').src = "img/Robotron 2000 - " + cor + ".png";
}