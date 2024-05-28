var saludoMostrado = false;

function mostrarSaludo() {
  if (!saludoMostrado) {
    var nombre = prompt("¡Hola! Por favor, ingresa tu nombre:");
    if (nombre !== "" && nombre !== null) {
      alert("¡Hola, " + nombre + "!");
      saludoMostrado = true;
    }
  }
}

window.onload = mostrarSaludo;