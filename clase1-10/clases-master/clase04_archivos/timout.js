
const temporizador = (callback) => {
    setTimeout(callback, 0)
}

const operacion = () => console.log('Boooooomm');

console.log('Tik Tick');

temporizador(operacion)


console.log('Finalizar proceso');