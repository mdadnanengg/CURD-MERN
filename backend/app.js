import express from 'express'
import cors from 'cors'
import { routerUser } from './routers/userRouter.js'
import connectDB from './db/connection.js'

const app = express() 
const port = 8000
const url = 'mongodb://0.0.0.0:27017/'
const dbName = 'userDetails'

//databse
connectDB(url, dbName)

// setup cors
app.use(cors())

app.use(express.json({extended:true}))
// app.use(express.json({extended:true}))

app.use('/', routerUser)

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})