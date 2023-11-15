import express from "express"
import path from 'node:path'
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

export default app