//Archivos
const fs = require('fs')

fs.writeFileSync('./ejemplo1.txt','Probando 1,2,3,4')

    let contenido = fs.readFileSync('./ejemplo1.txt','utf-8')
    console.log('El contenido es',contenido)


    