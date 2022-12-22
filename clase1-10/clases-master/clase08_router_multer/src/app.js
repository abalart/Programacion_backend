import express from 'express'
import usersRouter from './routes/user.router.js'
import petsRouter from './routes/pet.router.js'

const app = express()

app.use(express.json())
app.use('/static', express.static('public'))

app.use(function(req, res, next) {
    console.log('Time:', new Date().toLocaleTimeString());

    next()
})

function midi1(req, res, next) {
    req.dato1 = 'un dato'

    next()
}

function midi2(req, res, next) {
    req.dato2 = 'otro dato'

    next()
}

app.use('/api/users', midi1, midi2, usersRouter)
app.use('/api/pets', petsRouter)

app.listen(8080)