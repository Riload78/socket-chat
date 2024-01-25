import { savenote, deleteNote, getNoteById, updateNote } from "./socket.js";

const noteList = document.querySelector('#notes')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

let savedId = ''

const renderNote = note => {
	const div = document.createElement('div')
	div.innerHTML = `
			<div class="item">
				<h2>${note.title}</h2>
				<p>${note.description}</p>
				<div class="action">
					<button id="delete-${note._id}" class="delete" data-id="${note._id}">Delete</button>
					<button id="edit-${note._id}" class="edit" data-id="${note._id}">Edit</button>
				</div>
			</div>
		`

		const btnDelete = div.querySelector('.delete')
		console.log(btnDelete.dataset)
		const btnUpdate = div.querySelector('.edit')
		btnDelete.addEventListener('click', (e)=>{
			e.preventDefault()
			console.log(btnDelete.dataset.id);
			deleteNote(btnDelete.dataset.id)

		})

		btnUpdate.addEventListener('click', (e) =>{
			e.preventDefault()
			getNoteById(btnUpdate.dataset.id)
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
		if (savedId) {
			updateNote(savedId, title.value, description.value)
			console.log('updating');
		} else {
			savenote(element['title'].value, element['description'].value)
			// reset form after submit
			element['title'].value = ''
			element['description'].value = ''
		}
		// reset form
		savedId = ''
		title.value = ''
		description.value = ''
	}
}

export const appendNote = note => {
	noteList.append(renderNote(note))
}

export const updateForm = note => {
	console.log('updateForm',note);
	title.value = note.title
	description.value = note.description
	savedId = note._id
}

