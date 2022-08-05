/*
Objetivo 1 - quando clicar na seta de avancar mostrar o proximo cartao da lista
    passo 1 - dar um jeito de pegar o elemento html da seta avançar
    passo 2 - identificar o clique do usario na seta avancar
    passo 3 - fazer aoarecer o proximo cartao da lista
    passo 4 - buscar o cartao selecionado e esconder
obejtivo 2 - quando o usario clicar na seta voltar, mostra o cartao anterior da lista
    passo 1 - dar um jeito de pegar o elemento html da seta voltar
    passo 2 - identificar o clique do usario na seta voltar
    passo 3 - fazer aoarecer o proximo cartao da lista
    passo 4 - buscar o cartao selecionado e esconder

*/
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}
btnAvancar.addEventListener("click", function () {
    if(cartaoAtual === cartoes.length - 1) cartaoAtual = -1;
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao(cartaoAtual);
    
});
btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0) cartaoAtual = 3;
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao(cartaoAtual);

});


