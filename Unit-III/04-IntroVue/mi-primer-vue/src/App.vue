<script setup>
import { ref } from 'vue';

// 'ref' hace que nuestra variable tenga superpoderes reactivos
const nombreUsuario = ref('Diseñador misterioso');
const colorFondo = ref('#2b2d42');

function reiniciar() {
  nombreUsuario.value = 'Diseñador misterioso';
  colorFondo.value = '#2b2d42';
}
</script>

<template>
  <main class="tarjeta-perfil" :style="{ backgroundColor: colorFondo }">
    
    <h1>Hola, {{ nombreUsuario }}</h1>

    <div class="controles">
      <label>¿Cuál es tu nombre?</label>
      <input type="text" v-model="nombreUsuario">

      <label>Elige tu color (Hexadecimal):</label>
      <input type="color" v-model="colorFondo">
    </div>

    <button @click="reiniciar">Reiniciar Diseño</button>
  </main>
</template>

<style scoped>
.tarjeta-perfil {
  padding: 40px;
  border-radius: 20px;
  color: white;
  text-align: center;
  transition: background-color 0.3s ease;
  font-family: sans-serif;
  max-width: 400px;
  margin: 50px auto;
}

.controles {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input { padding: 10px; border-radius: 5px; border: none; }
button { padding: 10px 20px; cursor: pointer; border-radius: 5px; border: none; font-weight: bold;}
</style>