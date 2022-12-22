const express = require('express')
const app = express()

const users = [
    {id: "1", nombre: "gonzalo", apellido: "Coradello"},
    {id: "2", nombre: "Maximo", apellido: "Aranibie"},
    {id: "3", nombre: "Lucas", apellido: "Rueda"},
]

app.get('/', (req, res) => res.send({users} ) )
app.get('/:iduser', (req, res) => {
    const idUser = req.params.iduser

    const user = users.find(u => u.id == idUser)
    
    if(!user) res.send({error: "User not found"})
    else res.send({user})

})


app.listen(8080, () => console.log('El servidor esta corriendo...'))