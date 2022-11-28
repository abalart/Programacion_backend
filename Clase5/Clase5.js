 
/*

//Ejercicio array con numeros aleatorios donde se  cuenten las ocurrencias de cada numero
const obj={}
 

for (var i = 0; i < 1000; i++){

    const numero= parseInt(Math.random()*20+1)

    if(!obj[numero])
        obj[numero] = 1
}
console.log(obj);

*/


//Modulos nativos de Nodejs

//Uso de Crypto
//import crypto from 'crypto';
const crypto = require('crypto-js')


const DB = []
class UserManager {

    getUsers = () => {
        return DB
    }

    insertUsers = user =>{

        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256',user.salt).update(user.password).digest('hex')

        DB.push(user)

        return user
    }

    validateUser = (username,password) => {
        const user = DB.find(u => u.username == username)
        if(!user){
            console.log('usuario no encontrado')
    }

    }


}


    const manager = new UserManager()

    manager.insertUsers({

        name: 'usuario',
        lastname: 'usuario',
        username: 'admin',
        password: 'admin',
    })	
    console.log(manager.getUsers())
