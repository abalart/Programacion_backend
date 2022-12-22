const fs = require('fs')

const filename = 'ejemplo.txt'

fs.writeFileSync(filename, 'Saludos a Valentin. Hiii =D')

if (fs.existsSync(filename)) {
    let contenido = fs.readFileSync(filename, 'utf-8')
    console.log('CONTENIDO:', contenido);

    fs.appendFileSync(filename, '\nMas saludos para los demas')

    contenido = fs.readFileSync(filename, 'utf-8')
    console.log('CONTENIDO NEW:', contenido);

    fs.unlinkSync(filename, 'utf-8') // Borrar archivo

} else {
    console.log('El arhivo no existe');
}

console.log('END!!');