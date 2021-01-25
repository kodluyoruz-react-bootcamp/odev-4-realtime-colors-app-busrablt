const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.end('Merhaba Socket.IO');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.broadcast.emit('new-user',{title:'Biri geldi'});
  socket.on('disconnect',()=> console.log('a user disconnected'));
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});