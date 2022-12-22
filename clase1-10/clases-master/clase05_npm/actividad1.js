

const obj = {}

for (let i = 0; i < 1000; i++) {
    const numero = parseInt(Math.random() * 20 + 1)
    
    if(!obj[numero]) obj[numero] = 1
    else obj[numero]++
}

console.log(obj);