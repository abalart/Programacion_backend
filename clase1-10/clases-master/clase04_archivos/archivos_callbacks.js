const fs = require('fs')

const filename = './ejemplo.txt'

fs.writeFile(filename, 'Saludos para Jhonatan Pintos\n', error => {
    if(error) return console.log('Hubo un error al escribir');
    fs.appendFile(filename, 'Saludos a Agustin Balart', error => {
        if (error) return console.log('Hubo un error al agregar mas contenido');
        fs.readFile(filename, 'utf-8', (error, contenido) => {
            if (error) return console.log('Hubo un error al leer el archivo');
            console.log('CONTENIDO:', contenido);
            fs.unlink(filename, error => {
                if (error) return console.log('Hubo un error al borrar el archivo');
                console.log('Borrado exitosamente');
            })

        })
    })
})

console.log('FIN !!!');