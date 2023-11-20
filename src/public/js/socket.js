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

/**
 * 
 */
export const getNoteById = (id) => {
	socket.emit('client:getnote', id)
}

/**
 * Emisor del evento UPDATE NOTE
 */
export const updateNote = (id, title, description) => {
	console.log(id);
	socket.emit('client:updatenote', {
			_id: id, 
			title, 
			description
		})
}

export const onSelectedNote = (callback) => {
	socket.on('server:selectednote', callback)
}




