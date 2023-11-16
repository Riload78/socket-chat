import { savenote } from "./socket.js";

const noteList = document.querySelector('#notes')

const renderNote = note => {
	const div = document.createElement('div')
	div.innerHTML = `
			<div>
				<h2>${note.title}</h2>
				<p>${note.description}</p>
				<div>
					<button>Delete</button>
					<button>Edit</button>
				</div>
			</div>
		`
		return div
}

export const renderNotes = notes => {
	console.log('RenderNotes', notes);
	notes.forEach(note => {
		noteList.append(renderNote(note))
	});
}

export const onHandleSubmit = element => {
	return (e) => {
		e.preventDefault()
		savenote(element['title'].value, element['description'].value)

	}
}

export const appendNote = note => {
	noteList.append(renderNote(note))
}
