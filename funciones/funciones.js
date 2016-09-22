/*
 * Definición de una función
 */
function NOMBRE_DE_FUNCION ( num ) {

  return num + 1;

}

/*
 * Ejecutar la función
 */
var numero = NOMBRE_DE_FUNCION(54);

console.error("1ra ejecucion");
console.log(numero);


// Lo mismo con otro numero

numero = NOMBRE_DE_FUNCION(77);

console.error("2da ejecucion");
console.log(numero);


// Otro modo de ejecución

console.error("3ra ejecucion");
console.log( NOMBRE_DE_FUNCION(99) );

console.error("Muestro que tiene la variable «numero»");
console.log(numero);