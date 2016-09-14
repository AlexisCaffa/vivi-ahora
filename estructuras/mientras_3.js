var elemento;

elemento = jQuery('#principal');

var i = 0;
while ( i < 100 ) {
  elemento.append("<div class='borde'>\n    <h3>Numero par</h3>\n    <p>\n        \n    " + i + "</p>\n</div>");

  i = i +2;
}
