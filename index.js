        //  For Import File
// let app=require('./app')
// console.log(app.x)


        //    Core Module       
// const fs=require('fs');
// fs.writeFileSync("File.txt","Jagriti")

const http=require('http');

http.createServer((req,resp)=>{
        resp.write("<h1> Hello df this side Jagriti Singh </h1>");
        resp.end("hi dd");
}).listen(3000);