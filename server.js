const app = require('express')();
const port = parseInt(process.env.PORT, 10) || 5000;
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => res.render('hi!'));

io.on('connection', socket => {
	console.log(socket.handshake.query.test);
	console.log('a user connected');
});

http.listen(port, err => {
	if (err) throw err;
	console.log(`> Ready on http://localhost:${port}`);
});
