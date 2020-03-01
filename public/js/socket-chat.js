var socket = io();

var params = new URLSearchParams(window.location.search);
if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('Nombre necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}


socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp) {
        console.log(resp);
    });
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

// Escuchar información
/*
socket.emit('crearMensaje',
    {usuario,
    mensaje:'Hola'},
    function(mensaje) {

    console.log('respuesta:', mensaje);

});
*/

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

// Escuchar información
socket.on('listasPersonas', function(personas) {

    console.log(personas);

});

// Escuchar información
socket.on('mensajePrivado', function(mensaje) {

    console.log('mensajeprivado', mensaje);

});