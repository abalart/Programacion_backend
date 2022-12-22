
new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1200)
})
    .then(result => {
        console.log("Res: ", result);
        return result * 2
    })
    .then(result => {
        console.log("Res segunda parte: ", result);
        return result * 3
    })
    .then(result => {
        console.log("Res tercera parte: ", result);
    })
    .catch(error => {
        console.log(error);
    })


console.log("FIN");

// Volvemos 20:10 args