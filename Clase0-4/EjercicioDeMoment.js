 
const  moment = require('moment')
 
const fechaActual  = moment()  //Moment<2022-11-24T20:37:11-03:00>

console.log(fechaActual)

const miFechaDeNacimiento = moment('1991-10-02','YYYY-MM-DD') 
console.log(miFechaDeNacimiento)

const diferencia =  fechaActual.diff(miFechaDeNacimiento,'days')
console.log(diferencia)


const resultado = `Pasaron ${diferencia} dias desde mi nacimiento`
console.log(resultado)


/*
Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
Debe contar con una variable que almacene la fecha actual (utilizar moment())
Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.


*/