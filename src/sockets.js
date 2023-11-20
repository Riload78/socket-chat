import Note from './models/Note'



const sockets = (io) => {
	io.on('connection', (socket) => {
		console.log('New user connection')
		
		/**
		 * recupero las notas de la BBDD
		 */
		const emitNotes = async () => {
			try {
				const notes = await Note.find()
				console.log(notes);
	
				// creo un evento para que envie las notas
				io.emit('server:loadnotes', notes)
				
			} catch (error) {
				console.error('Error:', error)
			}
		}

		emitNotes()

		/**
		 * recibe el evetno savenote del front
		 */
		socket.on('client:savenote', async data => {
			try {
				// guardo en BBDD
				const newNote = new Note(data)
				const result = await newNote.save()
				// creo emisor para pintar en el fron la nota
				// con socket solo refresca la pestaña del front
				// con io refresca todas las pestañas abiertas
				// socket.emit('server:newnote', result)
				io.emit('server:newnote', result)
				
			} catch (error) {
				console.error('Error:', error)
			}

		})

		socket.on('client:deletenote', async id => {
			try {
				console.log(id);
				// elimino de la BBDD
				await Note.deleteOne({ _id: id })
				// Llamo al evento emit Note para que genere de nuevo las notas
				emitNotes()
				
			} catch (error) {
				console.error('Error:', error)
			}
		})

		socket.on('client:getnote', async (id) => {
			try {
				
				// busco la nota a editar
				const note = await Note.findById(id)
				// lo devuelvo al cliente
				socket.emit('server:selectednote', note)
				
			} catch (error) {
				console.error('Error:', error)
			}

		})

		socket.on('client:updatenote', async (updateNote) => {
			try {
				
				const sendUpdate = await Note.findByIdAndUpdate(updateNote._id, {
					title: updateNote.title,
					description: updateNote.description
				})
				emitNotes()
				
			} catch (error) {
				console.error('Error:', error)
			}
		})
	})
}

export default sockets
