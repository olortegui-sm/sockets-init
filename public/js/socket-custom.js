var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

// on: para escuchar sucesos
socket.on('disconnect', function() {
    console.log('desconectado');
});

//emit: envíar información

socket.emit('enviarMensaje', {
    usuario: 'manu',
    mensaje: 'hola mundo'
}, function() {
    console.log('se disparó el callback');
});

//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});