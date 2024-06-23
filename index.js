var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on("connection", (socket) => {

	//Identificando desconexao
	socket.on("disconnect", () => {
		console.log("X desconectou: " + socket.id);
	});



	//Recebendo dados do cliente/evento enviado
	socket.on("evento_conexao", (data) => {
		// console.log(data);
	});
	socket.on("campo", (data) => {
		console.log(data);

		//emitindo evento do servidor para o client
		socket.emit("resultado", data + " - SERVIDOR RECEBEU");
	});



});

app.set("view engine", "ejs");


app.get('/', (req, res) => {
	res.render("index")
});


http.listen(3000, () => {
	console.log("app running...")
});