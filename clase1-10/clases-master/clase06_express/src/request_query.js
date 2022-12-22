const express = require('express')


const app = express()

app.get('/saludo', (req, res) => {
    console.log(req.query);

    const edad = req.query.edad

    res.send(`La edad es ${edad} years`)
})


app.listen(8080, () => console.log('El servidor esta corriendo...'))