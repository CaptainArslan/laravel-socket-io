const express = require('express');
const http = require('http'); // Import http module for creating server
const socketIo = require('socket.io');
const URL = 'http://127.0.0.1:8080/';
const app = express();
const server = http.createServer(app); // Create HTTP server
const io = socketIo(server, {
    cors: {
        origin: URL,
    },
}); // Initialize Socket.IO

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle chat event
    socket.on('sendNotification', (data) => {
        console.log('chat', data);
        io.emit('chat_' + data.userId, data);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server running at ${URL}`);
});
