// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar los nombres
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre == "") {
        alert('Por favor, inserte un nombre.');
        return;
    }else{
        amigos.push(nombre);
        limpiarCaja();
        actualizaLista();
    }
    return;
}

console.log(amigos);

function limpiarCaja(){
    //limpiar la caja de texto
    document.getElementById('amigo').value = '';
}

function actualizaLista(){
    //definir variable para el ul
    let lista = document.getElementById('listaAmigos');
    //lImpiar la lista
    lista.innerHTML = "";
    //recorrer el array amigos
    for(let i = 0; i < amigos.length; i++){
        //definir li y crear elementos li
        let nuevoLi = document.createElement("li");
        //contenido de li
        nuevoLi.textContent = amigos[i];
        //agregar li a la lista ul
        lista.appendChild(nuevoLi);
    } 
    if(amigos.length > 0){
        lista.classList.remove('oculta');
    } else {
        lista.classList.add('oculta');
    }
}


    function sortearAmigo(){
        if (amigos.length === 0){
            alert('No hay amigos disponibles para el sorteo.');
            return;
        }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = amigoSorteado;
        document.getElementById('listaAmigos').classList.add('oculta');
    }