<template>
  <VehiculosBuscar/>
</template>

<script>
import VehiculosBuscar from './modules/vehiculo/pages/VehiculosBuscar.vue';

export default {
  name: 'App',
  components: {
    VehiculosBuscar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
