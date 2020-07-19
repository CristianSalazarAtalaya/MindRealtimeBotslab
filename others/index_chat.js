let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


http.listen(3000, () => {
    console.log('Listening on port *: 3000');
});

io.on('connection', socket => {
    
    //console.info(`Client connected [id=${socket.id}]`);
    chatID = socket.id
    ///socket.join(chatID)
    //socket.join(chatID)
    //console.log(chatID)


    socket.emit('connections', Object.keys(io.sockets.connected).length);

    socket.on('disconnect', () => {
        console.log("A user disconnected" + chatID);
    });

    // socket.on('chat-message', (data) => {
    //     console.log(data);
    //     socket.broadcast.emit('chat-message', (data));
    // });
    socket.on('chat-message', (msg) => {
        console.log('miguel' +chatID);
        //console.log(msg.chatID)

        //socket.broadcast.emit('chat-message', ({message:'Prro' }));
        //socket.emit('chat-message', ({message:'Prro', user: 'Bots Lab' }));

        var mensaje = 'No te endteindo prro'
            if(msg.message.toUpperCase().indexOf('HOLA') >-1)
                mensaje = 'Holra RAATON alias Miguel'

        io.to(chatID).emit('chat-message', ({message:mensaje, user: 'IA' }));
        
        // //Send message to only that particular room
        // socket.broadcast.emit('chat-message', {
        //     message:'Prro', 
        //     user: 'Bots Lab' 
        // });

    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', (data));
    });

    socket.on('stopTyping', () => {
        socket.broadcast.emit('stopTyping');
    });

    socket.on('joined', (data) => {
    
        socket.broadcast.emit('joined', (data));
    });

    socket.on('leave', (data) => {
        socket.broadcast.emit('leave', (data));
    });

});