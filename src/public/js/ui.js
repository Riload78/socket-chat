import { savenote, deleteNote } from "./socket.js";

const noteList = document.querySelector('#notes')

const renderNote = note => {
	const div = document.createElement('div')
	div.innerHTML = `
			<div>
				<h2>${note.title}</h2>
				<p>${note.description}</p>
				<div>
					<button id="delete-${note._id}" class="delete" data-id="${note._id}">Delete</button>
					<button id="edit-${note._id}" class="edit" data-id="${note._id}">Edit</button>
				</div>
			</div>
		`

		const btnDelete = div.querySelector('.delete')
		console.log(btnDelete.dataset)
		btnDelete.addEventListener("click", (e)=>{
			e.preventDefault()
			console.log(btnDelete.dataset.id);
			deleteNote(btnDelete.dataset.id)

		})
		
		return div
}

export const renderNotes = notes => {
	console.log('RenderNotes', notes);
	noteList.innerHTML = ""
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

