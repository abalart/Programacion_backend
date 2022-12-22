const crypto = require('crypto')

const DB = []
class UserManager {

    getUsers = () => {
        return DB
    }

    inserUser = user => {

        user.salt = crypto.randomBytes(128).toString('base64')
        user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')

        DB.push(user)

        return user
    }

    validateUser = (username, password) => {
        const user = DB.find(u => u.username == username)
        if(!user) {
            console.log('User not found');
            return
        }

        const newHash = crypto.createHmac('sha256', user.salt).update(password).digest('hex')

        if(newHash == user.password) console.log('Logged!');
        else console.log('Invalid pass');
    }

}

const manager = new UserManager()

manager.inserUser({
    name: 'Jhonathan',
    lastname: 'Pintos',
    username: 'jpintos',
    password: '123456'
})
console.log(manager.getUsers());

manager.validateUser('jpintos', '12345')