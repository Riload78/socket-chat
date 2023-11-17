const socket = io()

/**
 * Escuchador del evento loadnotes que trae las notas
 * @param {*} callback 
 */
export const loadnotes = (callback) => {
	socket.on('server:loadnotes', callback)
}

/**
 * Emisor del evento addnote para agregar una nueva nota
 * @param {*} title 
 * @param {*} description 
 */
export const savenote = (title, description) => {
	socket.emit('client:savenote', {
		title: title,
		description: description
	})
	console.log('savenote emit');
}

/**
 * Escuchador del evento de creacion de nota
 * @param {*} callback 
 */
export const onNewNote = (callback) => {
	socket.on('server:newnote', callback)
}


/**
 * Emisor del evento DELETE NOTE
 */
export const deleteNote = (id) => {
	socket.emit('client:deletenote', id)
}

// Escuchador de eliminación de nota
// export const onDeleteNote = id => {
// 	socket.on('server:deletenote', id)
// }
