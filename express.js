const express = require('express')

const app = express()

app.get('/saludo', (request,response) => {    //Creo una ruta
    response.send('saludos desde express')
})

app.listen(8080, () =>console.log('El servidor esta en ejecucion'))