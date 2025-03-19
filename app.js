//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
listaAmigos = [];


function adicionarAmigo(){

    amigo = document.getElementById("amigo").value;
    listaAmigos.push(amigo);
    document.getElementById("amigo").value = document.getElementById("amigo").ariaPlaceholder;
    exibrirAmigo();
}

function exibrirAmigo(){

    for(let i in listaAmigos){
        resultado = "<li>" + listaAmigos[i] + "</li>";
    }
    document.getElementById("orderedList").innerHTML += resultado;
}

function sortearAmigo(){

    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").innerHTML = amigoSorteado;
}