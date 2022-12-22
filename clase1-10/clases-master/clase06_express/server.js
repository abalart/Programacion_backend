const http = require('http')

const server = http.createServer((request, response) => {
    response.end('Mi primer server con mi amigo Maximo Ariel 22 !!!')
})

server.listen(8080, () => {
    console.log('Listening on port 8080 ...');
})

/**
 * http://127.0.0.1:8080/
 * http://localhost:8080/
 * 
 * NODEMON
 * npm install -g  nodemon
 * nodemon server.js
 * 
 * Linux/Mac: ifconfig
 * Windows:   ipconfig
 * 
 * 192.168.0.7:8080
 * 
 */
// 
