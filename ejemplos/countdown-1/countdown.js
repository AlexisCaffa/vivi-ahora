
// obtengo el DIV con id="precio"
var elemento_precio;
elemento_precio = jQuery('#precio');

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
  // lo muestro en el DIV
  elemento_precio.text(i);

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

