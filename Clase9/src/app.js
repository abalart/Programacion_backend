import express from 'express'
import product from './routes/products.router.js'
import cart from './routes/carts.router.js'
import handlebars from 'express-handlebars'
//import {server} from 'socket.io'
import routerViews from './routes/views.router.js'
import __dirname from './utils.js'

/*
// Init Servers
const io = new Server(httpServer)
*/
const app = express()
app.engine('handlebars',handlebars.engine()) //Inicializo el motor de planillas

app.set('views',__dirname +'/views')  //Le paso la ruta donde tiene que buscar las pantallas
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public')) //Seteamos nuestra carpeta public

app.use('/', routerViews) //Tomo la logica desde el router

app.use(express.json())
app.use('/api/products/',product)  //Conecto router y me traigo todos los endpoints, en POSTMAN siempre va a ser /api/products/ + la ruta que se defina en el archivo router
app.use('/api/cart',cart) //Conecto router y me traigo todos los endpoints


app.listen(8080,() => console.log('Server arriba'))








