let cadena = "                      Hola :)"

console.log(cadena.trim());

const mensajes = []
const mensaje = "                             "

if(mensaje.trim().length > 0) mensajes.push(mensaje)
else console.log('Mensaje vacio, no se puede enviar');

console.log(mensajes);

console.log("   asdasd      asdasd     ".trim(), "FIN");

// Volvemos a 20:21 args

// FLAT
const arrayAnidado = [1, 32, 45, 889, [1, 4, 5, 6, 7], 1231, 11, 22, [9, 11, 808, 8],  9]

console.log(arrayAnidado.flat());