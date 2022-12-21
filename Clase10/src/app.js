import express from 'express';
import {Server} from 'socket.io';
import __dirname from './utils/index.js'

const  app = express();

const httpServer = app.listen(8080,console.log('listening...'))
const socketServer = new Server(httpServer)

app.use(express.static(path.join(__dirname+'/public')))

socketServer.on('connection',socket => {
    console.log('nuevo cliente')

    socket.on('menssage22',data => {
        console.log('SERVER',data)

        socket.emit('MSJ individual','Éste mensaje lo recibe uno solo')
        socket.broadcast.emit('msj_resto','Este msj va para todos')
        socketServer.emit('msj_all','Este mensaje')
    })
})




