document.addEventListener("DOMContentLoaded", function () {
    const seleccionElemento = document.getElementById("elementos");
    const infoDiv = document.getElementById("info");

    let listaSucursales = [];

    function cargarInformacion(opcionId) {

        if (!opcionId) {
            infoDiv.innerHTML = '';
            return;
        }

        const sucursalSeleccionada = listaSucursales.find(sucursal => sucursal.id == opcionId);

        if (sucursalSeleccionada) {
            const { direccion, email, telefono } = sucursalSeleccionada;

            infoDiv.innerHTML = `
                <p><span class="data">Dirección:</span> ${direccion}</p>
                <p><span class="data">Email:</span> <a class="correo" href="mailto:${email}">${email}</a></p>
                <p><span class="data">Teléfono:</span> ${telefono}</p>
                
            `;
        } else {
            console.error("No se encontró la sucursal correspondiente al ID seleccionado.");
        }
    }

    const url = 'https://sucursales.pythonanywhere.com/sucursales';

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            listaSucursales = data;

            data.forEach((elemento) => {
                const opcion = document.createElement("option");
                opcion.value = elemento.id;
                opcion.text = elemento.localidad;
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