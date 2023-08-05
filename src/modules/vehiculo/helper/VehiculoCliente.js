import axios from "axios";

export const consultarVehiculosPlacaFachada = async (placa) => {
  return await consultarVehiculoPlaca(placa); 
};

const consultarVehiculoPlaca = async (placa) => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/Inventario/${placa}`)
    .then((r) => r.data);
  return data;
};

export const consultarVehiculosFachada = async () => {
  return await consultarVehiculos();
};

const consultarVehiculos = async () => {
  const data = axios
    .get(`http://localhost:8081/API/v1.0/Inventario`)
    .then((r) => r.data);
  return data;
};