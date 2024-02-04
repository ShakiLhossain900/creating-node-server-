const http = require('http') //imported

//create server
// function rqListener (req, res){
// }
// http.createServer(rqListener);

const server = http.createServer((req,res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit(); // server er event loop ke exit kore and program shut down kore

})
server.listen(3000); //any port ami chaile use korte parbu