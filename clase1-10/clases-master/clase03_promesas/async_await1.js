const dividir = (num1, num2) => {

    return new Promise((resolve, reject) => {
        if(num2 == 0) reject("No se puede dividir entre 0")
        else {
            setTimeout(() => resolve(num1 / num2), 2000)
            
        }
    })
}

const funcAsync = async () => {
    try {
        resultado = await dividir(3, 0)
        console.log(resultado);

        console.log("FIN de la funcion asincrona");
    } catch(error) {
        console.log("ERROR: ", error);
    }
}

funcAsync()
console.log("FIN del archivo");