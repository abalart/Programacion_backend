import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


let frase = 'Los estudintes de la clase 32210 son super cool'

app.get('/api/frase', (req, res) => res.json({ frase }))
app.get('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos

    const buscada = frase.split(' ')[pos - 1]


    res.json({ buscada })
})

app.post('/api/palabras', (req, res) => {
    const palabra = req.body.palabra

    const position = frase.split(' ').length + 1
    frase = frase + ' ' + palabra

    res.json({
        agregada: palabra,
        pos: position
    })
})



app.listen(8080)