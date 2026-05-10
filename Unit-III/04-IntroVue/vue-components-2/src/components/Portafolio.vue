<template>
 
    <h1>Mi Portafolio Modular</h1>
    
    <div class="galeria">
      <TarjetaArtistica />
      <TarjetaArtistica />
      <TarjetaArtistica />
    </div>

</template>


<script setup>
import TarjetaArtistica from './TarjetaArtistica.vue';
</script>


<style scoped>
.galeria {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 50px;
  flex-wrap: wrap;
}

</style>