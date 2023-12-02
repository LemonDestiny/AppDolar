let precio = document.getElementById("precio");

function obtenerValor() {
  fetch("https://dolarapi.com/v1/dolares/tarjeta").then((response) =>
    response.json().then((response) => (precio.innerText = response.venta))
  );
}

async function obtenerValorOtraForma() {
  let valor = await fetch("https://dolarapi.com/v1/dolares/tarjeta");
  let cotizacion = await valor.json();
  precio.innerText = cotizacion.venta;
}
obtenerValorOtraForma();
