const dividir = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 == 0) return reject("No se puede dividir entre 0")
        return resolve(num1 / num2)
    })
}
const sumar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 == 0 || num2 == 0) reject('Operacion innecesaria')
        else resolve(num1 + num2)
    })
}
const restar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 == 0 || num2 == 0) reject('Operacion invalida')
        else {
            const resultado = num1 - num2
            if (resultado < 0) reject("La calc solo trabaja con positivos")
            else resolve(resultado)
        }
    })
}
const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num1 < 0 || num2 < 0) reject('Operacion invalida')
        else {
            const producto = num1 * num2
            if (producto < 0) reject("La calc solo trabaja con positivos")
            else resolve(producto)
        }
    })
}

async function calculos() {
    try {
        console.log(await sumar(2, 4))
        console.log(await restar(4, 2))
        console.log(await multiplicar(2, 4))
        console.log(await dividir(2, 4))
    } catch (error) {
        console.error("ERROR: ",error);
    }
}

calculos()