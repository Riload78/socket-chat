import { savenote } from "./socket.js";

export const onHandleSubmit = (element) => {
	return (e) => {
		e.preventDefault()
		savenote(element['title'].value, element['description'].value)

	}
}
