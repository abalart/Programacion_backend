
const temporizador = () => {
    let counter = 1
    console.log('Inciando temporizar');
    const timer = setInterval(() => {
        console.log(counter++);
        if (counter > 5) {
            clearInterval(timer)
        }
    }, 1500)
}


console.log('Tik Tick');

temporizador()


console.log('Finalizar proceso');