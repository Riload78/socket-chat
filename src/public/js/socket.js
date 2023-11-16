const socket = io()

export const loadnotes = (callback) => {
	// Escuchador del evento loadnotes que trae las notas
	socket.on('server:loadnotes', callback)
}

// Evento para enviar una nueva nota al servidor y actualizarla en el cliente
export const savenote = (title, description) => {
	// Escuchador del evento addnote para agregar una nueva nota
	socket.emit('client:savenote', {
		title: title,
		description: description
	})
	console.log('savenote emit');
}


export const onNewNote = (callback) => {
	socket.on('server:newnote', callback)
}
