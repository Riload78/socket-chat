import { connect } from 'mongoose'
import { MONGODB_URI } from './config'

const connectDB = async () => {
	try {
		await connect(MONGODB_URI)
		console.log('connect to db');

	} catch (error) {
		console.log('Error connecting to database: ', error);
	}
}

export default connectDB