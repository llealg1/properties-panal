import apiCall from "./api.js";

apiCall();

const aux = {
  nombre: "lasdoasd",
  apellido: "asdasd",
  edad: 222
}

const mostrar = (...elements) => {

  console.log(...elements);
}
mostrar(aux)