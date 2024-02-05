// const http = require('http') //imported

// //create server
// // function rqListener (req, res){
// // }
// // http.createServer(rqListener);

// const server = http.createServer((req,res) => {
//     console.log(req.url, req.method, req.headers);
//     // process.exit(); // server er event loop ke exit kore and program shut down kore
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My First Page</title></head>');
//     res.write('<body><h1>Hello from my Node.js Server</h1></body>');
//     res.write('</html>');
// });
// server.listen(3000); //any port ami chaile use korte parbu

//ROUTING REQUEST
// const http = require("http");

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Enter Message</title><head>");
//     res.write(
//       '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }

//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body><h1>Hello from my Node.js Server</h1></body>");
//   res.write("</html>");
// });
// server.listen(3000); //any port ami chaile use korte parbu





//10 Redirecting Request 
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

if (url ==='/message' && method ==='POST'){
  const body = [];
  req.on('data', (chunk)=>{
    console.log(chunk);
   body.push(chunk);
  })
  req.on('end', ()=>{
   const parsedBody = Buffer.concat(body).toString();
   console.log(parsedBody);
  })

  fs.writeFileSync('message.txt',' this is shkail ');
  res.statusCode = 302;
  res.setHeader('Location', '/');
  return res.end();
}

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server</h1></body>");
  res.write("</html>");
});
server.listen(3000);
