

const socketController = (socket) => {
      console.log('Cliente conectado', socket.id);

      socket.on("disconnect",() => {
        // console.log("Cliente desconectado", socket.id);
      });
      
      socket.on("enviar-mensaje", (payload, callback) => {
         callback({
           id : 12345643,
           mensaje : payload,
           fecha: new Date().getTime()
         })
        socket.broadcast.emit("enviar-mensaje", payload);
      }); 
    }

    module.exports = {
        socketController,
    }
