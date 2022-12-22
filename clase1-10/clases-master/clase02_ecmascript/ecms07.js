
//Exponencial
const valoresBase = [1, 2, 3, 4, 5, 6, 7]
let newValues = valoresBase.map((element, idx) => element ** idx)
console.log(newValues);

const names = ['Alejo Bentos', 'Juan Rodriguez', 'Daniela Boso', 'Mariano Cuartero', 'Lucas Ruedas']
if( names.includes('Daniela Boso') ) {
    console.log('Daniela esta en la party !!');
} else {
    console.log('Daniela is not at the party :(');
}
