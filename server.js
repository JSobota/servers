let http = require("http");

const PORT = 7000;

let server = http.createServer(function ( request, response ){
	console.log(`Request @` + request.url);
	response.end ('<h1> You are loyal, you are special, and I appreciate you </h1>');
});

server.listen( PORT, function(){
	console.log(`Connection Initiated. http://localhost:${PORT}`);
});