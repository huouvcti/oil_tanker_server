const SocketIO = require('socket.io');


const socketio = (server) => {
    const io = SocketIO(server, { path: '/socket.io' });

    
}


module.exports = {socketio}