const http = require('http')

const server = http.createServer((request, response) => {
response.end('Mi primer server papu')

})

server.listen(8000,() => {
    console.log('Server listening on port 8000')    
})

