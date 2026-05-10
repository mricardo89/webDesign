<template>
  <main class="contenedor-principal">
    <Portafolio/>
  </main>
</template>

<script setup>
// 1. IMPORTAMOS NUESTRO BLOQUE DE LEGO
import Portafolio from './components/Portafolio.vue';
</script>

<style scoped>
.contenedor-principal {
  background-color: #1a1a24;
  min-height: 100vh;
  padding: 40px;
  color: white;
  text-align: center;
  font-family: sans-serif;
}

</style>