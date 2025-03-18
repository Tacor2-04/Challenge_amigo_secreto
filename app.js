// Array para los nombres de los amigos
let listaAmigos = [];
let nombresSorteados = new Set(); // Almacena los nombres ya sorteados

// Función para agregar nombres de amigos
function agregarAmigo() {
    let nombreUsuario = document.getElementById("amigo").value.trim();

    if (nombreUsuario === "") {
        mostrarAlerta('Por favor, ingrese un nombre');
        return;
    }

    listaAmigos.push(nombreUsuario);
    document.getElementById("amigo").value = "";
    actualizarLista();
}

// Función para mostrar alertas
function mostrarAlerta(mensaje) {
    alert(mensaje);
}

// Función para mostrar mensajes en el h2
function mostrarMensaje(mensaje) {
    let resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validaciones
    if (listaAmigos.length === 0) {
        mostrarMensaje("Añada a una persona");
        return;
    }

    if (listaAmigos.length === 1) {
        mostrarMensaje("Añada como mínimo a dos personas");
        return;
    }

    if (nombresSorteados.size === listaAmigos.length) {
        mostrarMensaje("¡Ya se han sorteado todos los amigos!");
        document.querySelector(".button-draw").disabled = true; // Desactiva el botón
        return;
    }

    // Sorteo de un amigo no repetido
    let amigoSeleccionado;
    do {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
        amigoSeleccionado = listaAmigos[indiceAleatorio];
    } while (nombresSorteados.has(amigoSeleccionado));

    // Almacena el nombre sorteado
    nombresSorteados.add(amigoSeleccionado);
    mostrarMensaje(`🎉 El amigo seleccionado es: ${amigoSeleccionado}`);
}

// Función para mostrar los nombres ingresados
function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";

    // Muestra la lista con índices desde 1
    listaAmigos.forEach((amigo, index) => {
        let elemento = document.createElement("li");
        elemento.textContent = `${index + 1}. ${amigo}`;
        listaHTML.appendChild(elemento);
    });
}



