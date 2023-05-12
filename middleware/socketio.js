const SocketIO = require('socket.io');


const socketio = (server) => {
    const io = SocketIO(server, { path: '/socket.io' });

    io.on('connection',  async (socket) => {
        console.log('Socket Connected');

        await socket.on('gps_server_update', async (data) => {
            console.log("socket: ", data)

            await socket.emit('gps_client_update', data);
        })
    });
}


module.exports = {socketio}