//server.js
var http = require("http");
var port = 3333;

function iniciar () {

	function onRequest (request, response) {
		console.log ("Peticion recibida.");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<h1>Hola Raviola</h1>");
		response.end();
	}

	http.createServer(onRequest).listen(port);
	console.log ("Server iniciado en http://localhost:"+port);
}

exports.iniciar = iniciar;
