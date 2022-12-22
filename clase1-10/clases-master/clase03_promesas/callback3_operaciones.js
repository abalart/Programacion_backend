const sumar = (num1, num2) => num1 + num2
const restar = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2


const realizarOperacion = (num1, num2, operacion) => {
    console.log('Vamos a ejecutar la operacion, no se cual es, pero vamos a EXEC'); 
    const resultado = operacion(num1, num2)

    console.log('El resultado de la operacion es', resultado + '\n');
}

realizarOperacion(3, 7, sumar)
realizarOperacion(3, 7, restar)
realizarOperacion(3, 7, multiplicar)
realizarOperacion(3, 7, dividir)

