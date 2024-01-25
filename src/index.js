import app from './app'
import {Server as WebsocketServer} from 'socket.io'
import http from 'http'
import connectDB from './db'
import sockets from './sockets'
import {PORT} from './config'

// conexion con la BBDD
connectDB()


// Para poder mantener los dos servidores se require del modulo http de node para crear un servidor
// de app para luego pasarlo al websocketServer
// server de node
const server = http.createServer(app)
// seerver de express
const httpServer = server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
// server de socket io
const io = new WebsocketServer(httpServer)
sockets(io)


