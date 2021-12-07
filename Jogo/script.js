/* Elemento HTML referente a categoria */
const categoria = document.querySelector("#category");
/* Elemento HTML referente a lista das letras erradas*/
const letrasErradas = document.querySelector(".wrongLetters");
/* Elemento HTML referente a palavra oculta
   Utilizaremos esse mesmo elemento para exibir as mensagens do jogo*/
const palavraInterface = document.querySelector(".dashes");
/* Array com elementos HTML referentes aos olhos do personagem */
const olhos = Array.from(document.querySelectorAll(".eyes"));
/* Array com elementos HTML referentes as partes do corpo */
let partesBoneco = Array.from(document.querySelectorAll("#person div"));
partesBoneco = partesBoneco.slice(2, partesBoneco.length);
/* Palavra corrente */
let palavraProposta;
/* Lista das letras erradas */
let letrasErradasArray = [];
/* Index da parte do corpo corrente */
let indiceBoneco;
/* Numero de chances do jogador */
const numTentativas = 7;
/* Valor para opacidade dos olhos */
const opacidadeOlhos = 0.3;

const categorias = {
    frutas: ["banana", "maçã", "laranja", " mamão", "uva", "melancia", "melão", "morango", "abacate", "abacaxi", "amora", "carambola", "cereja", "goiaba", "jabuticaba", "kiwi", "limão", "manga", "maracujá", "pera", "pêssego", "pitanga"],
    animais: ["papagaio", "cachorro", "gato", "cavalo", "hamster", "tubarão", "golfinho", "hipopótamo", "abelha", "baleia", "elefante", "leão", "zebra", "águia", "cobra", "aranha", "borboleta", "camelo", "camaleão", "capivara", "coelho", "coruja", "flamingo", "foca", "furão", "gafanhoto", "gambá", "galinha", "galo", "jacaré", "jaguar", "javali", "lobo", "lontra", "lebre", "lhama", "macaco", "mariposa", "morcego", "ovelha", "papagaio", "pato", "touro", "vaca"],
    cores: ["amarelo", "azul", "laranja", "roxo", "vermelho", "preto", "marrom", "cinza", "branco", "rosa", "prata", "verde", "vinho", "violeta", "bege", "bronze", "castanho"],
    paises: ["brasil", "alemanha", "argentina", "austrália", "chile", "japão", "espanha", "frança", "grécia", "holanda", "inglaterra", "itália", "méxico", "paraguai", "canadá", "cuba", "bélgica", "irlanda", "peru", "egito", "dinamarca"]
};

function retornaArraysCategorias() {
    return Object.keys(categorias);
}

function retornaCategoria() {
    const arrayCategorias = retornaArraysCategorias();
    let indiceCategoria = Math.floor(Math.random() * arrayCategorias.length)
    return arrayCategorias[indiceCategoria];
}

function exibeCategoria() {
    categoria.innerHTML = retornaCategoria();
}

function retornaNumAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function definePalavraProposta() {
    const arrayPalavras = categorias[categoria.innerHTML];
    let indicePalavra = retornaNumAleatorio(arrayPalavras.length);
    palavraProposta = arrayPalavras[indicePalavra];
    ocultaPalavra();
}

function ocultaPalavra() {
    let palavraOcultada = ""
    for (let i = 0; i < palavraProposta.length; i++) {
        palavraOcultada += "-";
    }
    exibePalavraInterface(palavraOcultada);
}

function exibePalavraInterface(palavra) {
    palavraInterface.innerHTML = palavra;
}

function tentativa(letra) {
    if (palavraProposta.includes(letra)) {
        atualizaPalavraInterface(letra);
    } else {
        letrasErradasArray.push(letra);
        letrasErradas.innerHTML = "Letras erradas: " + letrasErradasArray;
        if (partesBoneco.length > indiceBoneco) {
            desenhaBoneco();
        }
    }
    verificaFimDeJogo();
}

function verificaFimDeJogo() {
    if (!palavraInterface.innerHTML.includes("-")) {
        exibePalavraInterface("Você Venceu! :D");
        window.removeEventListener("keypress", retornaLetra);
    } else if (letrasErradasArray.length >= numTentativas) {
        desenhaOlhos();
        exibePalavraInterface("Você perdeu! ):");
        window.removeEventListener("keypress", retornaLetra);
    }
}

function atualizaPalavraInterface(letra) {
    let palavraAuxiliar = "";
    for (let i = 0; i < palavraProposta.length; i++) {
        if (palavraProposta[i] === letra) {
            palavraAuxiliar += letra;
        } else if (palavraInterface.innerHTML[i] != "-") {
            palavraAuxiliar += palavraInterface.innerHTML[i];
        }
        else {
            palavraAuxiliar += "-";
        }
    }
    exibePalavraInterface(palavraAuxiliar);
}

/*
Recebe o evento do teclado e passa apenas o valor da letra para a função tentativa
*/
function retornaLetra(e) {
    tentativa(e.key);
}

/*
Desenha a parte do corpo corrente
*/
function desenhaBoneco() {
    partesBoneco[indiceBoneco].classList.remove("hide");
    indiceBoneco++;
}

/* 
Desenha os olhos do personagem
*/
function desenhaOlhos() {
    olhos.forEach((olho => {
        olho.style.opacity = 1;
        olho.style.zIndex = 10;
    }));
}

/*
Oculta as partes do corpo do personagem
*/
function ocultaBoneco() {
    olhos.forEach((olho => {
        olho.style.opacity = opacidadeOlhos;
    }));
    partesBoneco.forEach(parteBoneco => {
        parteBoneco.classList.add("hide");
    });
}

/*
Inicia as configurações do jogo
*/
function iniciaJogo() {
    indiceBoneco = 0;
    letrasErradasArray = [];
    ocultaBoneco();
    exibeCategoria();
    definePalavraProposta();
    letrasErradas.innerHTML = "Letras erradas: ";
    window.addEventListener("keypress", retornaLetra);
}

window.addEventListener("load", iniciaJogo);
