var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'))


app.get('/',function (req, res) {
    res.status(200).send("Hola mundo");
})

io.on('connection',function (socket) {
    console.log("Alguien se ha conectado con SOCKET");
})


//Siempre lo ultimo
server.listen(4000, function () {

    console.log('Servidor corriendo en http://localhost:4000');
    
})