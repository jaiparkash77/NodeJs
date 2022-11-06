//(1) File based Module_
// const a = 20;
// const b = {
//     average: (a,b)=>{
//         console.log((a+b)/2);
//     },
//     percentage: (a,b)=>{
//         console.log((a/b)*100);
//     }
// }
// module.exports = a;
// module.exports = b;

//-----------------------------------------------------------------------------
//(2)Build In Module -> file system (fs)

//--------------------fs---------------
// const fs = require('fs')
// console.log(fs)
// fs.readFile("./sample.txt", 'utf-8',(err, data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data);
// })

// const {readFileSync} = require('fs')
// const data = readFileSync("./sample.txt",'utf-8');
// console.log(data)

// const txt = "this is jai parkash maurya !"

// fs.writeFile("./sample2.txt",txt, ()=>{
//     console.log("written")
// })

// fs.writeFileSync("./sample2.txt",txt)

//--------------------path---------------
// const path = require('path')

// const result = path.extname("./index.js")

// console.log(result)


//--------------------os---------------

// const os = require('os')

// console.log(os.freemem())
// console.log(os.hostname())
// console.log(os.totalmem())


//--------------------http---------------

// const http = require('http')


//-----------------------------------------------------------------------------
//(3)Third-Party Module -> express, mongoose, gulp

//npm i pokemon
const pokemon = require('pokemon')

// console.log(pokemon.random())
// console.log(pokemon.all())

//npm i nodemon -> This package is used for restarting server whenever any changes done and saved
