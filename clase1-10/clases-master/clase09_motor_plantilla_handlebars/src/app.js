import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRouter from './routes/views.router.js'

const app = express()

app.use(express.static(__dirname + '/public'))

// Inicializamos el Motor de Plantilla:
app.engine('handlebars', handlebars.engine())
// Indicamos donde estan las vistas:
app.set('views', __dirname + '/views')

// Indicamos que motor de plantillar usar:
app.set('view engine', 'handlebars')


app.use('/', viewsRouter)

const server = app.listen(8080)
