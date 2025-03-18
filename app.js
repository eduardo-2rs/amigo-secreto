
let amigoSecreto = []

function adicionarAmigo() {
    
    let nomeInput = document.getElementById('amigo').value.toUpperCase().trim(); 

    if (amigoSecreto.includes(nomeInput)) { 
        alert('Nome repetido');
    }
    else if (nomeInput == '') {
        alert('Nome vazio, gentileza adicionar um nome válido');
    }
    else {
        amigoSecreto.push(nomeInput); 
        
        document.querySelector('#listaAmigos').innerHTML += `<li id=${nomeInput}>${nomeInput}</li>`;
    }
    document.getElementById('amigo').value = '';
}

function adicionaNomeListaAmigos() {
    document.querySelector('#listaAmigos').innerHTML = ``;
    amigoSecreto.forEach(nome => {
        document.querySelector('#listaAmigos').innerHTML += `<li">${nome}</li>`;
    });
}


function sorteio() {
    let indiceSorteado = Math.floor(Math.random() * amigoSecreto.length);
    return amigoSecreto[indiceSorteado];
}


function sortearAmigo() {
    if (amigoSecreto.length <= 3) {
        alert('Adicione mais participantes para deixar o jogo mais legal !!!');
    }
    else {
        let nomesFront = document.querySelector('#resultado'); 
        
        let amigoSorteado = sorteio();
        nomesFront.innerHTML=``;
        nomesFront.innerHTML += `<p id="lista-amigos">${amigoSorteado}</p>`;



    }
}

function reiniciar() {
    amigoSecreto = [];
    document.querySelector('.prizeDraw__container').textContent = '';
    document.querySelector('.friends__container').innerHTML = `<p id="lista-amigos"></p>`;
}