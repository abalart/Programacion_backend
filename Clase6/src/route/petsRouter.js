const {Router} = require('express')

const router = Router()
const pets=[]

router.get('/',(req,res)=>{
    res.json({pets})
     
})


router.get('/',(req,res)=>{
   const pet = req.body
   pets.push(pet)
   res.send({status:'todo ok'})
     
})

export default router