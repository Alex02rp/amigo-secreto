// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        input.value = "";
        input.placeholder = "⚠️ El campo no puede estar vacío." ;
        return;
    }

    // Limpiar placeholder si antes hubo un error
    input.placeholder = "Escribe un nombre";

    listaAmigos.push(nombre);
    input.value = "";

    mostrarLista();
}

function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar lista anterior

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        ul.appendChild(li);
    });
}
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    //Validar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        resultado.innerHTML = "<li>❌ No hay más amigos para sortear.</li>";
        return;
    }
    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    // Obtener y eliminar el amigo sorteado
    const amigoSorteado = listaAmigos.splice(indiceAleatorio, 1)[0];
    // splice elimina 1 elemento en la posición indicada y devuelve un array, por eso accedemos con [0]
    // Mostrar el resultado
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    // Actualizar la lista visible en pantalla (opcional)
    mostrarLista();
}



