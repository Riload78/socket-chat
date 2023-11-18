import Note from './models/Note'



const sockets = (io) => {
	io.on('connection', (socket) => {
		console.log('New user connection')
		/**
		 * 
		 */
		const emitNotes = async () => {
			// recupero las notas de la BBDD
			const notes = await Note.find()
			console.log(notes);

			// creo un evento para que envie las notas
			io.emit('server:loadnotes', notes)
		}

		emitNotes()

		/**
		 * recibe el evetno savenote del front
		 */
		socket.on('client:savenote', async data => {
			// guardo en BBDD
			const newNote = new Note(data)
			const result = await newNote.save()
			// creo emisor para pintar en el fron la nota
			// con socket solo refresca la pestaña del front
			// con io refresca todas las pestañas abiertas
			// socket.emit('server:newnote', result)
			io.emit('server:newnote', result)

		})

		socket.on('client:deletenote', async id => {
			console.log(id);
			// elimino de la BBDD
			await Note.deleteOne({ _id: id })
			// Llamo al evento emit Note para que genere de nuevo las notas
			emitNotes()
		})
	})
}

export default sockets
