// SPREAD
const obj1 = {
    propiedad1: 2,
    propiedad2: "My Property",
    propiedad3: true
}

const obj2 = {
    propiedad4: "Casas",
    propiedad5: [2, 3, 4, 5, 6, 7, 8]
}

let {propiedad1, propiedad2} = obj1
console.log(propiedad1, propiedad2);

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const obj4 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const {a, ...rest} = obj4
console.log(a);
console.log(rest);
console.log('-------------------------------------------------');
const obj5 = {...obj4}
obj5.a = 22222

console.log("Obj 4: ", obj4);
console.log("Obj 5: ", obj5);