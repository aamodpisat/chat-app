var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var i= 0;
io.on('connection', function(socket){
  console.log('App connected');
	// id= id+1;

	socket.on("add user",function(user){
		i = i+1;
	  		console.log('user added::', user);

	  		io.emit('login',{'numUsers': i})
	  		
	  	
			socket.on("new message",function(message){
	  			console.log("Username :", user);
	  			console.log("Message :",message);
	  			 io.emit("new message",{"username": user, "message":message});

	  		});
				
	});

	  		  		
	  });

http.listen(3000, function(){
  console.log('listening on *:3000');
});


 // socket.emit('login',function(username){
 //  	console.log("username: ",username);
 //  });

 //   socket.on('add user',function(user){
 //  	console.log('user is connected');
 //  });
   
 //  socket.on('stop typing',function(username){
 //  	console.log("----stop typing---", username);
 //  });

 //  socket.on('new message',function(message){
 //  	console.log("Message:",message);
 //  });

 //  socket.on('typing',function(typing){
 //  	console.log("typing----",typing);
 //  })