/*
Descarga otro proyecto haciendo clic en este enlace y ábrelo en Visual Studio Code.
Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
*/
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío.";

function funcion1() {
  alert("El botón fue apretado");
}

function funcion2() {
  let ciudad = prompt("Dame el nombre de una ciudad de Brasil");
  alert("Estuve en " + ciudad + " y me acorde de ti");
}

function funcion3() {
  alert("Yo amo JS");
}

function funcion4() {
  let n1 = parseInt(prompt("Ingresa un numero: "));
  let n2 = parseInt(prompt("Ingresa otro numero: "));
  let n3 = n1 + n2;
  alert("El resultado es: " + n3);
}
