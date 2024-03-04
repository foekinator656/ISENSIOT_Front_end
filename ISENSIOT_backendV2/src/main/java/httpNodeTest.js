var net = require('net');

var host = '192.168.198.78';
var port = 1234;

var socket = new net.Socket();

socket.connect(port, host, () => {
    socket.write("hallo");
});

socket.on('data', (data) => {

    console.log(`${data}`);
    socket.destroy();
});