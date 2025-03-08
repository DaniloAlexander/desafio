let amigos = []; // Lista para almacenar los nombres

// Función para agregar amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let name = input.value.trim();

    if (name !== "" && !amigos.includes(name)) {
        amigos.push(name);

        // Mostrar el nombre en la lista visualmente
        let lista = document.getElementById("listaAmigos");
        let li = document.createElement("li");
        li.textContent = name;
        lista.appendChild(li);

        input.value = ""; // Limpiar input
    } else {
        alert("Por favor, ingresa un nombre válido y no repetido.");
    }
}

// Función para sortear un solo amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let index = Math.floor(Math.random() * amigos.length); // Selecciona un índice aleatorio
    let amigoSorteado = amigos[index]; // Obtiene el nombre correspondiente

    // Mostrar el resultado
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>Amigo secreto: <strong>${amigoSorteado}</strong></li>`;
}
