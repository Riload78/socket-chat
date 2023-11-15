
const sockets = (io) => {
    io.on('connection', (socket) => {
        console.log('New user connection')
        console.log(socket)
    })
}

export default sockets
