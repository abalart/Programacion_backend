const express = require('express')


const app = express()

app.get('/saludo', (request, response) => {
    response.send('Saludos desde express para mi amiga Bianca Bastieri!!')
})

app.listen(8080, () => console.log('El servidor esta corriendo...'))