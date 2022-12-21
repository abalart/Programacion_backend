import express from 'express'
import product from './routes/products.router.js'
import cart from './routes/carts.router.js'


const app = express()

app.use(express.json())


//app.use(express.static("public"))

app.use('/api/products/',product)  //Conecto router y me traigo todos los endpoints, en POSTMAN siempre va a ser /api/products/ + la ruta que se defina en el archivo router
app.use('/api/cart',cart) //Conecto router y me traigo todos los endpoints
app.use('/',(req,res) => res.send('HOME')) //Conecto router y me traigo todos los endpoints

app.listen(8080,() => console.log('Server arriba'))






