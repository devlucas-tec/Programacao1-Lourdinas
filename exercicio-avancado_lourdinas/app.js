const btNovaJanela = document.getElementById('btNovaJanela');
const urlNovaJanela = 'atividade.html';

if (btNovaJanela) {
    btNovaJanela.onclick = function() {
        window.open(urlNovaJanela, '_blank'); 
    };
}

const tabelaTemperaturas = {
    verao: {
        economico: '26° C',
        confortavel: '23° C',
    },
    inverno: {
        economico: '20° C',
        confortavel: '24° C',
    },
    outono: {
        economico: '22° C',
        confortavel: '21° C',
    },
};

const btVerao = document.getElementById('btVerao');
const btInverno = document.getElementById('btInverno');
const btOutono = document.getElementById('btOutono');

const opcoesVerao = document.getElementById('opcoesVerao');
const opcoesInverno = document.getElementById('opcoesInverno');
const opcoesOutono = document.getElementById('opcoesOutono');

const resultadoFinal = document.getElementById('resultadoFinal');

const containersEstacao = {
    verao: { button: btVerao, container: opcoesVerao },
    inverno: { button: btInverno, container: opcoesInverno },
    outono: { button: btOutono, container: opcoesOutono },
};

function desativarTodasOpcoes() {
    Object.values(containersEstacao).forEach(item => {
        if (item.container) {
            item.container.style.display = 'none';
        }
    });
}

function exibirResultado(temperatura) {
    if (resultadoFinal) {
        resultadoFinal.innerHTML = `Temperatura configurada: <span>${temperatura}</span>`;
    }
}

function configurarEstacao(estacao) {
    desativarTodasOpcoes();
    
    const item = containersEstacao[estacao];
    if (item && item.container) {
        item.container.style.display = 'block';
        
        exibirResultado('Aguardando seleção de conforto...');
    }
}

if (btVerao) btVerao.onclick = () => configurarEstacao('verao');
if (btInverno) btInverno.onclick = () => configurarEstacao('inverno');
if (btOutono) btOutono.onclick = () => configurarEstacao('outono');

function configurarNivelConforto(estacao, nivel) {
    let temperatura;
    
    if (tabelaTemperaturas[estacao] && tabelaTemperaturas[estacao][nivel]) {
        temperatura = tabelaTemperaturas[estacao][nivel];
    } else if (nivel === 'outro') {
        temperatura = 'Nível de conforto inválido.';
    } else {
        temperatura = 'Estação inválida.';
    }
    
    exibirResultado(temperatura);
}

document.getElementById('btEconomicoVerao')?.addEventListener('click', () => configurarNivelConforto('verao', 'economico'));
document.getElementById('btConfortavelVerao')?.addEventListener('click', () => configurarNivelConforto('verao', 'confortavel'));
document.getElementById('btOutroVerao')?.addEventListener('click', () => configurarNivelConforto('verao', 'outro'));

document.getElementById('btEconomicoInverno')?.addEventListener('click', () => configurarNivelConforto('inverno', 'economico'));
document.getElementById('btConfortavelInverno')?.addEventListener('click', () => configurarNivelConforto('inverno', 'confortavel'));
document.getElementById('btOutroInverno')?.addEventListener('click', () => configurarNivelConforto('inverno', 'outro'));

document.getElementById('btEconomicoOutono')?.addEventListener('click', () => configurarNivelConforto('outono', 'economico'));
document.getElementById('btConfortavelOutono')?.addEventListener('click', () => configurarNivelConforto('outono', 'confortavel'));
document.getElementById('btOutroOutono')?.addEventListener('click', () => configurarNivelConforto('outono', 'outro'));


if (opcoesVerao) desativarTodasOpcoes();