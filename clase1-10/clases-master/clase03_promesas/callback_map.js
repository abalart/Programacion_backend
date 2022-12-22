
const lista = [1, 2, 3, 4, 5]

const myMap = (lista, callback) => {
    const newList = []
    
    for (const element of lista) {
        const newValue = callback(element)
        newList.push(newValue)
    }

    return newList
}

const listaNueva = myMap(lista, x => x*3)
const listaNueva2 = myMap(lista, x => x*x)

console.log(listaNueva);
console.log(listaNueva2);

console.log('------------------');

Array.prototype.myMap = function (callback) {
    const newList = []

    for (let i = 0; i < this.length; i++) {
        element = this[i]
        const resultadoCallback = callback(element)
        newList.push(resultadoCallback)
    }
    return newList
}

const myList = [2, 4, 6, 8, 11]
const res = myList.myMap(x => x + 45)
const res2 = myList.myMap(x => x*2)
console.log(res, res2);
