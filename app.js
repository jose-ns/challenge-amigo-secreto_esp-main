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
    lista.innerHTML = '';
    //recorrer el array amigos
    for(let i = 0; i < amigos.length; i++);{
        //definir li y crear elementos li
        let li = document.createElement("li");
        //contenido de li
        li.textContent = amigos[i];
        //agregar li a la lista ul
        lista.appendChild(li);
    }
    }

    // function sortearAmigo(){
    //     amigos.length;
    //     //sortear amigo
    //     let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    //     //mostrar el amigo sorteado
    //     document.getElementById('amigoSorteado').textContent = amigoSorteado;
    // }