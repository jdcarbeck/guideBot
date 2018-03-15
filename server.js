const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

const server = http.Server(app);
server.listen(3000);

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user connected');
  socket.emit('message', 'Hello, I am guideBot! Ask me anything.');
  
  socket.on('disconnect', function() {
    console.log('A user disconnected');
  });

  socket.on('message', function(data) {
    console.log(data);
    socket.emit('message', data);
  });

});
