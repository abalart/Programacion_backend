const fs = require('fs')

const obj = {
    name: 'R2',
    lastname: 'Verbel',
    age: 15
}

// Exportar objetos a archivos
const objStr = JSON.stringify(obj)
fs.writeFileSync('objecto.json', objStr)

// Leer objetos de archivos
const contentStr = fs.readFileSync('objecto.json', 'utf-8')
console.log(contentStr);
const objNew = JSON.parse(contentStr)

console.log(objNew);