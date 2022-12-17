import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from '/utils.js'

const app = express()
app.engine('handlebars',handlebars.engine())

app.set('view engine',__dirname+'/views')//indicamos en que parte estaran las vistas

app.set('view engine','handlebars')

app.use(express.static(__dirname+'/public'))

const server = app.listen(8080,()=>console.log('Server arriba'))

