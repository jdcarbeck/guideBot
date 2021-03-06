const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const server = http.Server(app);
const cred = require('./cred.json');

server.listen(process.env.PORT || 3000);

const io = socketIO(server);

const watsonAssistantV1 = require('watson-developer-cloud/assistant/v1');
const prompt = require('prompt-sync')();

app.use(express.static('dist'));
//parameters to connect to watson
//current parameters are for a sample workspace
var watsonAssistant = new watsonAssistantV1({
  username: cred.username,
  password: cred.password,
  version: '2018-02-16'
});

var workspaceId = cred.workspace;

//empty message sent to recieve start node for the conversation

//function used unpon resoponce from watsonAssistant
function processResponce(err, responce) {
  if(err) {
    console.error(err);
    return;
  }

  if(responce.intents.length > 0) {
  }

  if(responce.output.text.length != 0) {
    console.log(responce.output.text[0]);
 }

  //recieve new information from user
  var newUserMessage = prompt('>>');

}

io.on('connection', (socket) => {
  watsonAssistant.message({
    workspace_id: workspaceId,
  }, processResponce);

  var userContext;

  function processResponce(err, responce) {
    if(err) {
      console.error(err);
      socket.emit('message', 'Sorry an error has a occured, try reconnecting');
    }

    if(responce.intents.length > 0) {
      console.log('Detected intent #' + responce.intents[0].intent);
    }

    if(responce.output.length != 0) {
      socket.emit('message', responce.output.text[0]);
    }
    userContext = responce.context;
  }

  socket.on('message', function(message) {
    watsonAssistant.message({
      workspace_id: workspaceId,
      input: { text: message },
      context: userContext,
    }, processResponce);
  });
});
