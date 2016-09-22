/*
 * Definición de una función
 */
function NOMBRE_DE_FUNCION ( num ) {

  return num + 1;

}

/*
 * Ejecutar la función
 */
var num = NOMBRE_DE_FUNCION(54);

console.error("1ra ejecucion");
console.log(num);


// Lo mismo con otro num

num = NOMBRE_DE_FUNCION(77);

console.error("2da ejecucion");
console.log(num);


// Otro modo de ejecución

console.error("3ra ejecucion");
console.log( NOMBRE_DE_FUNCION(99) );

console.error("Muestro que tiene la variable «num»");
console.log(num);