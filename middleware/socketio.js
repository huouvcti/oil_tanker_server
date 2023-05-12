const SocketIO = require('socket.io');


const socketio = (server) => {
    const io = SocketIO(server, { path: '/socket.io' });

    io.on('connection',  async (socket) => {
        console.log('Connected');

        await io.on('gps_server_update', async (data) => {
            console.log("socket: ", data)
        })
    });
}


module.exports = {socketio}