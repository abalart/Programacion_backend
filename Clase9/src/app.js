import express from 'express'
import userRouter from './routes/userRouter.js'
import petRouter from './routes/petsRouter.js'

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))//codifica  en formato json

app.use(express.static("public"))

app.use('/api/users',userRouter)

app.use('/api/pets',petRouter)

app.listen(8080)

