
// obtengo el DIV
var elemento_precio;
elemento_precio = jQuery('#precio');

// creo el inicio del numero
var i = 999.99;

function disminuir() {
  // Para debug: muestro el valor del numero
  console.log(i);

  // redondeo el numero
  var numero = Math.floor(i * 100) / 100;
  // lo muestro en el DIV
  elemento_precio.text(numero);

  // disminuyo el contenido de i
  i = i - 0.01;
}


setInterval(disminuir, 1000);

