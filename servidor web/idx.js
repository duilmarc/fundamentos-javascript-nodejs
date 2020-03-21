const http = require('http');
const fs   = require('fs');
// // DEFINING THE ROUTES 
// const home  = fs.readFileSync('./index.html');
// const about = fs.readFileSync('./about.html');

// // PATRON DE CREATE ES BUILDER
// http
// .createServer((request, response) => {

//     const {url} = request;
//     if(url == "/"){
//         response.writeHead(200,{"Content-Type" : "text/html"});
//         response.write(home);
//     }
//     else if(url == "/about")
//     {
//         response.writeHead(200,{"Content-Type" : "text/html"});
//         response.write(about)
//     } else {
//         response.writeHead(404,{"Content-Type" : "text/html"});
//         response.write("Page not Found");
//     }

//     response.end();
// })
// .listen(8080);




