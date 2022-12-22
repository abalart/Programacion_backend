import express from 'express'

const router = express.Router()

const foods = [
    {name: "Banana", price: "10"},
    {name: "Wine", price: "150"},
    {name: "Hot Dogs", price: "100"},
    {name: "Hamburgers", price: "110"},
    {name: "Beers", price: "75"},
]

router.get('/', (req, res) => {

    const users = [
        {
            name: 'Ricardo',
            lastname: 'Rueda',
            role: "admin"
        }
    ]

    res.render('index', {
        user: users[0],
        style: 'index.css',
        isAdmin: users[0].role == 'admin',
        foods
    })

})


export default router