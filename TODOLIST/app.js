const container = document.querySelector(".container");
const listaAtividades = document.querySelector(".lista_atividades");
const input = document.querySelector(".input");
const erro = document.querySelector(".erro");
const botaoCadastra = document.querySelector(".botao_adc");
const botaoLimpar = document.querySelector(".botao_del_todos");
const paleta1 = document.querySelector("#paleta1");
const paleta2 = document.querySelector("#paleta2");
const paleta3 = document.querySelector("#paleta3");

paleta1.addEventListener('click', () => definePaleta('#00aced'));
paleta2.addEventListener('mousemove', () => definePaleta('#232323'));
paleta3.addEventListener('dblclick', () => definePaleta('#30257a'));
botaoCadastra.addEventListener('click', () => cadastraAtividade());
botaoLimpar.addEventListener('click', () => removeAtividades());

function definePaleta(cor) {
    container.style.background = cor;
    listaAtividades.style.background = cor;
}

function removeAtividade(atividade) {
    listaAtividades.removeChild(atividade);
}

function removeAtividades() {
    while (listaAtividades.firstElementChild) {
        listaAtividades.removeChild(listaAtividades.firstElementChild);

    }
}

function criaAtividade() {
    const atividade = document.createElement("div");
    atividade.classList.add("atividade");
    const nomeAtividade = document.createElement("p");
    atividade.textContent = input.value;
    const botaoLimpar = document.createElement("button");
    botaoLimpar.textContent = "Limpar";
    botaoLimpar.classList.add("botao_del");
    botaoLimpar.addEventListener('click', () => removeAtividade(atividade));
    listaAtividades.appendChild(atividade);
    atividade.appendChild(nomeAtividade);
    atividade.appendChild(botaoLimpar);
}

function cadastraAtividade() {
    if (input.value.length > 3) {
        erro.style.display = "none";
        criaAtividade();
    } else {
        erro.style.display = "grid";
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput();
}

function limpaInput() {
    input.value = "";
}

window.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        cadastraAtividade();
    }
});