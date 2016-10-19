var elemento_precio = jQuery("#precio");

jQuery.get('http://viviahora-lucuma.rhcloud.com/precio', function (res) {

    var i= Number( res.precio.toFixed(2) );
    var intervalo;

    elemento_precio.text( i );

    function disminuir(){
        console.log (i);

        i = Number( i.toFixed(2) );

        elemento_precio.text(i);

        i = i - 0.01;

        if ( i < 0) {
            console.log("en este momento i < 0");
            console.log (i);
            clearInterval(intervalo);
        }
    }

    intervalo = setInterval( disminuir, 1000 );
});
