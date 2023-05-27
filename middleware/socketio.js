const SocketIO = require('socket.io');


const gpsDAO = require('../model/gpsDAO');


const socketio = (server) => {
    const io = SocketIO(server, { path: '/socket.io' });

    io.on('connection',  async (socket) => {
        console.log('Socket Connected');


        let room = "";


        socket.on('disconnect', () => {
            console.log('socket disconnected');
        });


        socket.on("join", async (data) => {
            console.log("ddd")
            room = parseInt(data.room);

            socket.join(room)


            // const gps_test_before = await gpsDAO.gps.test_before();

            // await socket.to(room).emit('gps_client_test_before', gps_test_before);
        })
        

        await socket.on('gps_server_update', async (data) => {
            console.log("socket: ", data)

            await socket.to(room).emit('gps_client_update', data);
        })
    });

}


module.exports = {socketio}