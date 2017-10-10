var message="";
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
 
app.listen(3000);
 
function handler (req, res) {
  fs.readFile('chat.html',function(err,data){
  res.writeHead(200);
res.write(data);
res.end();
});
}

io.sockets.on('connection', function (socket) {
console.log(socket.id);
  socket.emit('server-event',{text:message});
socket.on('disconnect', function() {
      console.log('Got disconnect!');
});
  socket.on('client-event', function (data) {

	message+=(data.username+" : "+data.name+"\n");
    //console.log(message);
io.sockets.emit('server-event',{text:message});
  });
});


