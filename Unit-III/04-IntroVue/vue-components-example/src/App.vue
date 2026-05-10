<template>
  <main class="contenedor-principal">
    <h1>Mi Portafolio Modular</h1>
    
    <div class="galeria">
      <TarjetaArtistica />
      <TarjetaArtistica />
      <TarjetaArtistica />
    </div>

  </main>
</template>

<script setup>
// 1. IMPORTAMOS NUESTRO BLOQUE DE LEGO
import TarjetaArtistica from './components/TarjetaArtistica.vue';
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

.galeria {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
}
</style>