const http = require('http')
const fs = require('fs')
// http.createServer((request, response, next)=>{
//     // request.params
//     // request.url
// })

// const PORT = 4000;
const PORT = process.env.PORT;
// const hostname = "localhost";

const home = fs.readFileSync("./index.html",'utf-8');

// console.log(__dirname);
// console.log(__filename);

const server = http.createServer((req, res)=>{
    // console.log(req.url)
    if(req.url==="/"){
        //return res.end("<h1>Home Page</h1>")
       return res.end(home);
    }
    if(req.url==="/about"){
       return res.end("<h1>About Page</h1>");
    }
    if(req.url==="/contact"){
       return res.end("<h1>Contact Page</h1>");
    }
    if(req.url==="/service"){
       return res.end("<h1>Service Page</h1>");
    }else{
        return res.end("<h1>404 Page not found</h1>");
    }
})

// server.listen(PORT, hostname, ()=>{
//     console.log(`server started at http://${hostname}:${PORT}`)
// })

server.listen(PORT, ()=>{
    console.log(`server started`)
})