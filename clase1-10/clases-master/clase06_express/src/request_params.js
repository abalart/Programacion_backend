const express = require('express')


const app = express()

app.get('/saludo/:nombre', (req, res) => {
    console.log(req.params);
    const nombre = req.params.nombre

    res.send(`Saludos a ${nombre}`)
})

app.get('/saludo/:nombre/:apellido', (req, res) => {
    console.log(req.params);
    const nombre = req.params.nombre
    const apellido = req.params.apellido

    res.send(`Saludos a ${nombre} ${apellido}`)
})

app.listen(8080, () => console.log('El servidor esta corriendo...'))