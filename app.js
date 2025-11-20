let listaDeNumerosSorteados = [];
let numeroMaximo = 50;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número Secreto");
    exibirTextoNaTela("p", "Descubra o número secreto entre 1 e " + numeroMaximo + "!");
}

exibirMensagemInicial();

function verificarChute(){
    let chute = parseInt(document.querySelector("input").value);
    
    if(chute === numeroSecreto){
        exibirTextoNaTela("h1", "Parabéns!");
        let palavraTentativa = tentativas === 1 ? "tentativa" : "tentativas";
        let mensagemTentativas =  tentativas === 1 ? "Você acertou de primeira! O numero secreto era " + numeroSecreto : "Você acertou em " + tentativas + " " + palavraTentativa + "! O numero secreto era " + numeroSecreto;
        exibirTextoNaTela("p", mensagemTentativas);
        
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
        if(chute > numeroSecreto){
        exibirTextoNaTela("h1", "Você Errou!");
        exibirTextoNaTela("p", "O número secreto é menor que " + chute);
        } else {
        exibirTextoNaTela("h1", "Você Errou!");
        exibirTextoNaTela("p", "O número secreto é maior que " + chute);
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){ 
    chute = document.querySelector("input");
    chute.value = "";
    chute.focus();
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}