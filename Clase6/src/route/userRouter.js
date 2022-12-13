const {Router} = require('express')

const router = Router()
const pets=[]

router.get('/',(req,res)=>{
    res.json({users})
     
})


router.get('/',(req,res)=>{
   const users = req.body
   pets.push(users)
   res.send({status:'todo ok'})
     
})

export default router