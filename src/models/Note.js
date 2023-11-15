import { Schema, model } from "mongoose"

new Schema({
	title: {
		type: String,
		required: true,
	},
	desceiption: {
		type: String,
		require: true
	}
}, {
	timestamps: true
})

export default model('Note', schema)