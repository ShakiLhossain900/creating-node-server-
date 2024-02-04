const http = require('http') //imported

//create server
// function rqListener (req, res){
// }
// http.createServer(rqListener);

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // server er event loop ke exit kore and program shut down kore
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server</h1></body>');
    res.write('</html>');
});
server.listen(3000); //any port ami chaile use korte parbu