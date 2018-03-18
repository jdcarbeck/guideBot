const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();

const server = http.Server(app);
server.listen(3000);

const io = socketIO(server);

const watsonAssistantV1 = require('watson-developer-cloud/assistant/v1');

//parameters to connect to watson
//current parameters are for a sample workspace
var watsonAssistant = new watsonAssistantV1({
  username: '9fd296ae-e080-4a66-b28c-4ed84f2b9deb',
  password: 'CCjTyX2rJjZL',
  version: '2018-02-16'
});
var workspaceId = '80a2a593-31bc-4d6b-8ab0-45e1bb99929b';

watsonAssistant.message({
  workspace_id: workspaceId,
}, processResponce);

function processResponce(err, responce) {
  if(err) {
    console.error(err);
    return;
  }
  if(responce.output.text.length != 0) {
    console.log(responce.output.text[0]);
  }
}

//io.on('connection', (socket) => {
//  console.log('A user connected');
//  socket.emit('message', 'Hello, I am guideBot! Ask me anything.');
  
 // socket.on('disconnect', function() {
  //  console.log('A user disconnected');
 // });
//
 // socket.on('message', function(data) {
  //  console.log(data);
   // socket.emit('message', data);
  //});

//});
