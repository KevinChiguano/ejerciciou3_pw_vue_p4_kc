<template>
    <div>
      <label v-for="(vehiculo, index) in vehiculos" :key="index">
        {{ vehiculo.placa }} - {{ vehiculo.tipo }} - Gasolina: {{ vehiculo.gasolina }} - Puertas: {{ vehiculo.numeroPuerta }}
      </label>
    </div>
  </template>
  
  <script>
  import { consultarVehiculosFachada } from '../helper/VehiculoCliente.js';
  
  export default {
  data() {
    return {
      vehiculos: [],
    };
  },

  methods: {
    async consultarVehiculos() { 
      this.vehiculos = await consultarVehiculosFachada();
    },
  },

  async mounted() {
    await this.consultarVehiculos();
  },
};
  </script>
  
  <style>
  
  </style>