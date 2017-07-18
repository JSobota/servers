let http = require("http");

const PORT = 7500;

let server = http.createServer(function ( request, response ){
	console.log(`Request @` + request.url);
	response.end ('<h1> You are dirt, you are trash, and I dont like you </h1>');
});

server.listen( PORT, function(){
	console.log(`Connection Initiated. http://localhost:${PORT}`);
});