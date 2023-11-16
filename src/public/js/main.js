import { loadnotes, onNewNote } from "./socket.js"
import { onHandleSubmit, renderNotes, appendNote } from "./ui.js"
// Escuchador del evento loadnotes que trae las notas

onNewNote(appendNote)
loadnotes(renderNotes)


const noteForm = document.querySelector('#note-form')
noteForm.addEventListener('submit', onHandleSubmit(noteForm))
