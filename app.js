const http = require('http');

const server = http.createServer((req, resp) => {
    if(req.url === './'){
        resp.end(`Welcome to our homepage`)
    }
else if(req.url === './about'){
    resp.end(`This is about page`)
}
resp.end(`
<h1>Oops!!</h1>
<p>We can't see the page your are looking for</p>
<a href="/">back home</a>`)

})

server.listen(2000)