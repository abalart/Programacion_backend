const express = require('express')
const app = express()

const users = [
    {id: "1", nombre: "gonzalo", apellido: "Coradello", gender: "M"},
    {id: "2", nombre: "Maximo", apellido: "Aranibie", gender: "M"},
    {id: "3", nombre: "Lucas", apellido: "Rueda", gender: "M"},
    {id: "4", nombre: "Bianca", apellido: "Bastieri", gender: "F"},
    {id: "5", nombre: "Isabella", apellido: "Bresciani", gender: "F"},
    {id: "6", nombre: "Adriana", apellido: "Thanner", gender: "F"},
    {id: "7", nombre: "Eugenia", apellido: "Insaurralde", gender: "F"},
]
//http://127.0.0.1:8080/?gender=m&otravar=02192&var234=kkkk
app.get('/', (req, res) => {

    let gender = req.query.gender

    if(gender) {
        gender = gender.toUpperCase()
        if (gender == 'M' || gender == 'F') {
            const userFiltered = users.filter(u => u.gender == gender)
            return res.send({users: userFiltered})
        }
    }

    res.send({users})
})


app.listen(8080, () => console.log('El servidor esta corriendo...'))