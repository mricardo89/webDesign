import './style.css'; // Vite permite importar CSS directo en JS

const btnGenerar = document.getElementById('btn-generar');
const imgFondo = document.getElementById('imagen-fondo');
const txtFrase = document.getElementById('texto-frase');
const txtAutor = document.getElementById('texto-autor');
const poster = document.getElementById('poster');
const carga = document.getElementById('pantalla-carga');

function generarPoster() {
  // 1. Mostramos estado de carga
  poster.classList.add('oculto');
  carga.classList.remove('oculto');
  carga.textContent = "Buscando inspiración...";

  // 2. NUEVA API: DummyJSON Quotes (Rápida y no requiere llaves)
  fetch('https://dummyjson.com/quotes/random')
    .then(respuesta => respuesta.json())
    .then(datos => {
      // DummyJSON devuelve los datos bajo las variables 'quote' y 'author'
      txtFrase.textContent = `"${datos.quote}"`;
      txtAutor.textContent = `- ${datos.author}`;
      
      // 3. NUEVA API DE IMÁGENES: Picsum Photos
      // Agregamos un número aleatorio al final para obligar al navegador a no repetir la foto
      const randomNum = Math.floor(Math.random() * 1000);
      imgFondo.src = `https://picsum.photos/800/1200?random=${randomNum}`;

      // 4. Esperamos a que la foto termine de descargar para mostrar el póster
      imgFondo.onload = () => {
        carga.classList.add('oculto');
        poster.classList.remove('oculto');
      };
    })
    .catch(error => {
      carga.textContent = "Hubo un error de conexión con la Matrix.";
      console.error(error);
    });
}

// Escuchamos el clic del botón
btnGenerar.addEventListener('click', generarPoster);

// Generamos el primer póster al iniciar la página
generarPoster();