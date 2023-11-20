import { loadnotes, onNewNote, onSelectedNote } from "./socket.js"
import { onHandleSubmit, renderNotes, appendNote, updateForm } from "./ui.js"
// Escuchador del evento loadnotes que trae las notas

onNewNote(appendNote)
loadnotes(renderNotes)
onSelectedNote(updateForm)


const noteForm = document.querySelector('#note-form')
noteForm.addEventListener('submit', onHandleSubmit(noteForm))
