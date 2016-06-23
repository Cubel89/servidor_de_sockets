var socket = io.connect('http://192.168.1.110:4000', { 'forceNew': true});

socket.on('messages',function (data) {
    console.log(data);
    alert(data.mensaje);
})