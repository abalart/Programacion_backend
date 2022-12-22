const fs = require('fs')

const filename = './ejemplo.txt'

const operacionAsync = async() => {
    await fs.promises.writeFile(filename, 'Saludos a Adrian Campo!!\n')

    let contenido =  await fs.promises.readFile(filename, 'utf-8')                          // Volvemos en 20:10 args ...
    console.log('CONTENIDO:', contenido);

    await fs.promises.appendFile(filename, 'Salidos para Lucas Rueca')

    contenido =  await fs.promises.readFile(filename, 'utf-8')
    console.log('CONTENIDO NEW:', contenido);

    fs.promises.unlink(filename)
}

operacionAsync()
console.log('FIN');

