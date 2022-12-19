import express from 'express'
import product from './routes/products.router.js'
import cart from './routes/carts.router.js'
//import fs from 'fs'
//const ProductManager = require('./product_manager.js') //No se puede usar require si tengo type module
//import ProductManager from './product_manager.js'
//import * as url from 'url';
//const __filename = url.fileURLToPath(import.meta.url);
//const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//const fileName = 'productos.json'

//const manager = new ProductManager(__dirname,fileName)

const app = express()

app.use(express.json())

//app.use(express.urlencoded({extended: true}))//codifica  en formato json

app.use(express.static("public"))

app.use('/api/products/',product)  //Conecto router y me traigo todos los endpoints
app.use('/api/cart/',cart) //Conecto router y me traigo todos los endpoints
app.use('/',(req,res) => res.send('HOME')) //Conecto router y me traigo todos los endpoints

app.listen(8080,() => console.log('Server arriba'))






