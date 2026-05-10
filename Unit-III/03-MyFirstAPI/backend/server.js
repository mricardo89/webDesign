const express = require('express');
const cors = require('cors'); // El paquete de permisos
const app = express();

// Le decimos a Express que permita peticiones de cualquier Frontend
app.use(cors());

// NUESTRA BASE DE DATOS FALTANTE (Un simple Arreglo de Objetos)
const misPersonajes = [
    {
        id: 1,
        nombre: "Santiago",
        rol: "Capybara",
        imagen: "https://images.unsplash.com/photo-1598453303641-768564e9a80b?w=400&q=80",
        amigo: "Giovanni"
    },
    {
        id: 2,
        nombre: "Giovanni",
        rol: "Cocodrilo",
        imagen: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=400&q=80",
        amigo: "Santiago"
    },
    {
        id: 3,
        nombre: "Capibella",
        rol: "Doncella del Bosque",
        imagen: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=400&q=80",
        amigo: "Todos"
    }
];

// LA RUTA DE NUESTRA API
app.get('/api/personajes', function(req, res) {
    // En lugar de enviar HTML, enviamos los ingredientes crudos (JSON)
    res.json(misPersonajes);
});

// ENCENDEMOS EL SERVIDOR
app.listen(3000, function() {
    console.log("🟢 API funcionando en http://localhost:3000/api/personajes");
});