
const originales = [1, 2, 3, 4, 5, 6, 7]

const callback = (element) => {
    return element + 1
}
const nuevosValores = originales.map(callback)
console.log(nuevosValores);

const nuevoValores2 = originales.map(x => x * 2)
console.log(nuevoValores2);

const valores3 = originales.map(x => "a")
console.log(valores3)
