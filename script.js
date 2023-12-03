let oficial = document.getElementById("precioOficial");
let blue = document.getElementById("precioBlue");
let tarjeta = document.getElementById("precioTarjeta");
let cripto = document.getElementById("precioCripto");
function obtenerValor() {
  fetch("https://dolarapi.com/v1/dolares/tarjeta").then((response) =>
    response.json().then((response) => (precio.innerText = response.venta))
  );
}

async function obtenerValorOtraForma(objeto, url) {
  let valor = await fetch(url);
  let cotizacion = await valor.json();
  objeto.innerText = cotizacion.venta;
}

obtenerValorOtraForma(oficial, "https://dolarapi.com/v1/dolares/oficial");
obtenerValorOtraForma(blue, "https://dolarapi.com/v1/dolares/blue");
obtenerValorOtraForma(tarjeta, "https://dolarapi.com/v1/dolares/tarjeta");
obtenerValorOtraForma(cripto, "https://dolarapi.com/v1/dolares/cripto");
