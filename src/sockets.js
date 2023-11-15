import Note from './models/Note'


const sockets = (io) => {
    io.on('connection', (socket) => {
        console.log('New user connection')

        const emitNotes = async () => {
            // recupero las notas de la BBDD
            const notes = await Note.find()
            console.log(notes);

            // creo un evento para que envie las notas
            io.emit('loadnotes', notes)
        }

        emitNotes()
        // recibe el evetno savenote del front
        socket.on('savenote', async data => {
            // guardo en BBDD
            const newNote = new Note(data)
            await newNote.save()

        })
    })
}

export default sockets
