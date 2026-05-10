<template>
  <div class="tarjeta">
    <img src="https://picsum.photos/400/200?random=1" alt="Arte">
    <h2>Proyecto Creativo</h2>
    <p>Un diseño modular creado con Vue.js</p>
    <button>Ver detalles</button>
  </div>
</template>

<script setup>
  // Por ahora nuestro bloque de Lego no tiene lógica compleja, solo diseño.
</script>

<style scoped>
/* 🚨 MAGIA PURA: Este CSS SOLO afectará a esta tarjeta.
   Nunca destruirá los h2 o botones del resto de tu página web. */
.tarjeta {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  padding: 20px;
  text-align: center;
  max-width: 300px;
  font-family: 'Helvetica', sans-serif;
  transition: transform 0.3s;
}

.tarjeta:hover { transform: translateY(-5px); }
img { width: 100%; border-radius: 8px; margin-bottom: 15px; }
h2 { color: #333; margin: 0 0 10px 0; }
p { color: #666; font-size: 0.9rem; }

button {
  background-color: #ff3366;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 15px;
}
</style>