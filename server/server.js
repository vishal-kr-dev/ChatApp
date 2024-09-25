import express from 'express'
import cors from 'cors'
import Connection from './db/connection.js'
import AuthRouter from './routes/auth.js'
import UserRouter from './routes/user.js'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/chat/user', AuthRouter)
app.use('/chat/users', UserRouter)

app.listen(process.env.PORT, () => {
    Connection()
    console.log("Server is running")
})