const socket = io()

export const loadnotes = () => {
	// Escuchador del evento loadnotes que trae las notas
	socket.on('loadnotes', (data) => {
		console.log("Notes: ", data);
	})
}

// Evento para enviar una nueva nota al servidor y actualizarla en el cliente
export const savenote = (title, description) => {
	// Escuchador del evento addnote para agregar una nueva nota
	socket.emit('savenote', {
		title: title,
		description: description
	})
	console.log('savenote emit');
}

