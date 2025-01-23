// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar los nombres
let amigos = [];

//boton agregar
function agregarAmigo(){ 
    let nombre = document.getElementById('amigo').value; //obtener el valor en el input
    if (nombre == "") { // si no hay nombre alert
        alert('Por favor, inserte un nombre.');
        return;
    }else{
        //agrega un elemento a la lista,limpia el input y muestra elementos en el ul
        amigos.push(nombre);
        limpiarCaja();
        actualizaLista();
    }
    return;
}

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
    } // ocultar o mostrar la lista de amigos
    if(amigos.length > 0){
        lista.classList.remove('oculta');
    } else {
        lista.classList.add('oculta');
    }
}

//boton sortear
    function sortearAmigo(){
        if (amigos.length === 0){
            alert('No hay amigos disponibles para el sorteo.');
            return;
        }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); //n. indice = n.random * n.de la lista
        let amigoSorteado = amigos[indiceAleatorio]; // elige un item numerado de la lista con el numero generado
        document.getElementById('resultado').innerHTML = amigoSorteado; //ver en el ul resultado el elemento de la lista
        document.getElementById('listaAmigos').classList.add('oculta'); //para ocultar la lista de nombres agregados
    }