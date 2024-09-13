import express from 'express'
import cors from 'cors'
import Connection from './db/connection.js'
import AuthRouter from './routes/auth.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/chat/user', AuthRouter)

app.listen(process.env.PORT, () => {
    Connection()
    console.log("Server is running")
})