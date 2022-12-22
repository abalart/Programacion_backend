import { Router } from 'express'

const router = Router()
const pets = []

router.get('/', (req, res) => {
    console.log(req.dato1);
    console.log(req.dato2);

    res.json({ pets })
})

router.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)

    res.send({status: 'success'})
})



export default router
