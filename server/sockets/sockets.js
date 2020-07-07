const { io } = require('../server');

io.on('connection', (client) => {
    console.log('cliente conectado');

    client.emit('enviarMensaje', {
        user: 'manu',
        mensaje: 'prueba de sockets'
    });


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // callback();

    });
});