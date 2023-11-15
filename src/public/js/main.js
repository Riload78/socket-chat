import { loadnotes } from "./socket.js"
import { onHandleSubmit } from "./ui.js"

// Escuchador del evento loadnotes que trae las notas
loadnotes()

const noteForm = document.querySelector('#note-form')
noteForm.addEventListener('submit', onHandleSubmit(noteForm))
