var elemento_precio = jQuery("#precio");

var i= 999.99;

function disminuir(){
    console.log (i);

    var numero = Math.floor (i*100)/100;

    elemento_precio.text(numero);

    i = i - 0.01;
}

setInterval (disminuir, 1000);