const SocketIO = require('socket.io');


const socketio = (server) => {
    const io = SocketIO(server, { path: '/socket.io' });

    io.on('connection',  async (socket) => {
        console.log('Socket Connected');


        let room = "";


        socket.on('disconnect', () => {
            console.log('socket disconnected');
        });


        socket.on("join", async (data) => {

            room = parseInt(data.room);

            socket.join(room)
        })
        

        await socket.on('gps_server_update', async (data) => {
            console.log("socket: ", data)

            await socket.to(room).emit('gps_client_update', data);
        })
    });

}


module.exports = {socketio}