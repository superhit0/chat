var message="";

var fs = require('fs');
 

 

  fs.readFile('chat.html',function(err,data){
 app = require('http').createServer(handler);
app.listen(3000);
 io = require('socket.io').listen(app);

function handler (req, res) {
  res.writeHead(200);
res.write(data);
res.end();
}

io.sockets.on('connection', function (socket) {
console.log(socket.id);
  socket.emit('server-event',{text:message});
  socket.on('client-event', function (data) {

	message+=(data.username+" : "+data.name+"\n");
   // console.log(message);
io.sockets.emit('server-event',{text:message});
  });
});

});



