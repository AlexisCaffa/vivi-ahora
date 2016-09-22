
// obtengo el SPAN con id="precio"
var elemento_precio;
elemento_precio = document.getElementById('precio');

// creo el inicio del numero
var i = 999.99;

/*
 * Creo la función disminuir
 * [ No recibe ningún parámetro ]
 */
function disminuir() {
  // Para debug: muestro el valor del numero
  console.log(i);

  // redondeo el numero
  i = Math.floor(i * 100) / 100;
  // lo muestro en el SPAN
  elemento_precio.innerHTML = i;

  // disminuyo el contenido de i
  i = i - 0.01;
}

/*
 * Ejecuto la función setInterval
 * Recibe 2 parametros:
 *  1. [Funcion]: La función a ejecutarse cada determinado tiempo
 *  2. [Numero entero]: El tiempo en milisegundos que debe durar el intervalo.
 */
setInterval(disminuir, 1000);

