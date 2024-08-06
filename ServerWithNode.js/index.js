const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url
    if (url == "/index") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to index page.</h1>");
    } else if (url == "/aboutme") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to about me page.</h1>");
    } else if (url == "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to contact page.</h1>");
    }
    
    res.end()
})

const port = 5000
server.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})