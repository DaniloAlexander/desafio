let amigos = []; // Array para almacenar los nombres

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let name = input.value.trim();
    let h2Mensaje = document.querySelector('.section-title'); // Seleccionamos el h2

    if (name !== "" && !amigos.includes(name)) {
        amigos.push(name);

        // Mostrar el nombre en la lista visualmente
        let lista = document.getElementById("listaAmigos");
        let li = document.createElement("li");
        li.textContent = name;
        lista.appendChild(li);

        input.value = ""; // Limpiar el input

        // Opcional: restablecer el mensaje original
        h2Mensaje.textContent = "Digite el nombre de sus amigos";
    } else {
        // En lugar de alert, se actualiza el h2 con un mensaje de error
        h2Mensaje.textContent = "Por favor, ingresa un nombre válido y no repetido.";
    }
}

function sortearAmigo() {
    // 1. Verifica si aún hay amigos disponibles para sortear
    if (amigos.length === 0) {
        let h2Mensaje = document.querySelector('.section-title');
        h2Mensaje.textContent = "No hay más amigos para sortear.";
        return;
    }

    // 2. Selecciona aleatoriamente un índice del array "amigos"
    let index = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[index];

    // 3. Muestra el resultado reemplazando el contenido anterior del contenedor
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>Amigo secreto: <strong>${amigoSorteado}</strong></li>`;

    // 4. Elimina el nombre sorteado del array para que no se vuelva a elegir
    amigos.splice(index, 1);
}
