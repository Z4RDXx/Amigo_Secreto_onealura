//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = "";
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    let sorteio = amigos.slice();
    let amigosSorteados = {};

    amigos.forEach(amigo => {
        let indice = Math.floor(Math.random() * sorteio.length);
        while (sorteio[indice] === amigo) {
            indice = Math.floor(Math.random() * sorteio.length);
        }
        amigosSorteados[amigo] = sorteio[indice];
        sorteio.splice(indice, 1);
    });

    for (const [amigo, amigoSecreto] of Object.entries(amigosSorteados)) {
        const li = document.createElement('li');
        li.textContent = `${amigo} tirou ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}
