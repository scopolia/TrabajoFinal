document.addEventListener("DOMContentLoaded", function () {
    const seleccionElemento = document.getElementById("elementos");
    const infoDiv = document.getElementById("info");

        function cargarInformacion(opcionId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${opcionId}`)
                .then((response) => response.json())
                .then((data) => {
                    infoDiv.innerHTML = `
                    <p><span class="data">EMAIL:</span> <a class="correo" href="mailto:correo@ejemplo.com">${data.email}</a></p>
                    <p><span class="data">TELÉFONO:</span> ${data.phone}</p>
                    `;
                })
                .catch((error) => {
                    console.error("Error al cargar la información de la opción: " + error);
                });
    }

    const url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((elemento) => {
                const opcion = document.createElement("option");
                opcion.value = elemento.id;
                opcion.text = elemento.name;
                seleccionElemento.appendChild(opcion);
            });
        })
        .catch((error) => {
            console.error("Error al cargar la lista de elementos: " + error);
        });


    seleccionElemento.addEventListener("change", function () {
        const seleccionOpcion = seleccionElemento.value;
        cargarInformacion(seleccionOpcion);
    });
});