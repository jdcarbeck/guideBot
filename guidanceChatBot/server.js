const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

const server = http.Server(app);
server.listen(3000);

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('A user has connected!');
});
