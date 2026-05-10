import './style.css';

const galeria = document.getElementById("galeria");

// 📡 Hacemos fetch a la URL de NUESTRA propia API en el puerto 3000
fetch('http://localhost:3000/api/personajes')
    .then(respuesta => respuesta.json())
    .then(datos => {
        // Limpiamos el texto de carga
        document.querySelector('h1').textContent = "Crónicas del Bosque";

        // Iteramos sobre los datos que nosotros mismos creamos
        datos.forEach(personaje => {
            galeria.innerHTML += `
                <div class="tarjeta">
                    <img src="${personaje.imagen}" alt="${personaje.nombre}">
                    <h2>${personaje.nombre}</h2>
                    <p class="rol">${personaje.rol}</p>
                    <p class="amigo">Mejor amigo: ${personaje.amigo}</p>
                </div>
            `;
        });
    })
    .catch(error => {
        galeria.innerHTML = "<p>Error: Asegúrate de que el backend (puerto 3000) esté encendido.</p>";
    });