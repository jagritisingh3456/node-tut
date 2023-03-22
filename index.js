        //  For Import File
// let app=require('./app')
// console.log(app.x)


        //    Core Module       
// const fs=require('fs');
// fs.writeFileSync("File.txt","Jagriti")


        //    Arrow function
// const http=require('http');
// http.createServer((req,resp)=>{
//         resp.write("<h1> Hello df this side Jagriti Singh </h1>");
//         resp.end("hi dd");
// }).listen(3000);



          // color
// const colors=require('colors');
// console.log("Jagriti".green);




         //API Create
// const http=require('http');
// http.createServer((req,resp)=>{
//         resp.writeHead(200,{'content-Type':'application\json'});
//         resp.write(JSON.stringify({name:'Jagriti Singh',email:'nehasingh@gmail.com'}));
//         resp.end();
// }).listen(4000);




          //API with import file data.js
// const http=require('http');
// const data=require('./data');
// http.createServer((req,resp)=>{
//         resp.writeHead(200,{'content-Type':'application\json'});
//         resp.write(JSON.stringify(data));
//         resp.end();
// }).listen(4000);




          //Input from commond line
// console.log(process.argv[2]) 




         //Create file
// const fs=require('fs')
// const input=process.argv;
// fs.writeFileSync(input[2],input[3])




// const fs=require('fs')
// const input=process.argv;
// if(input[2]=='add'){
//         fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//         fs.unlinkSync(input[3])
// }
// else{
//         console.log('invalid input')
// }




         // Create multiple files in one time
// const fs=require('fs');   
// const path=require('path');
// const dirPath=path.join(__dirname,'files'); 
// for(i=0;i<5;i++){
//         fs.writeFileSync(dirPath+"/my folder hello"+i+".txt",'This is hello file')
// }  




         // To read in terminal or to see the files in terminal
// fs.readdir(dirPath,(err,files)=>{
//         files.forEach((items)=>{
//                 console.log('file name is',items)
//         })
// })



             //CURD
// const fs=require('fs');
// const { resolve } = require('path');
// const path=require('path');
// const dirPath=path.join(__dirname,'curd');
// const filePath = `${dirPath}/curd.txt`;

// fs.writeFileSync(filePath,'This is curd file');      //To Create File    

// fs.readFile(filePath,'utf8',(err,item)=>{
//         console.log(item)
// })                                                     // To Read File

// fs.appendFile(filePath,' and data to append',(err)=>{
//         if(!err)console.log("fileis updated")
// })                                                   //To Upda  te Text in file

// fs.rename(filePath,`${dirPath}/frits.txt`,(err)=>{
//         if(!err)console.log("file name is updated")
// })                                                       //Remane file name

// fs.unlinkSync(`${dirPath}/frits.txt`)           //To Delete the file





                // Drowback of Asynchronous
// let a=20;
// let b=0;
//  setTimeout(()=>{
//         b=30;
//  },2000)

//  console.log(a+b);




               //Handling Asynchronous Data
// let a=20;
// let b=0;

// let waitingData=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 resolve(30)
//         },2000)
// })

// waitingData.then((b)=>{        
//         console.log(a+b)
// })



                         //Express.js   //Page Router With Node.js
// const express=require('express');
// const app=express();

// app.get('',(req,resp)=>{
//         resp.send(`
//         <h1>Hello,This is home page</h1>
//         <a href="/">Home Page</a>
//         `);
// });

// app.get('/about',(req,resp)=>{
//         resp.send('<h1>Welcome,This is about page</h1>');
// })

// app.get('/help',(req,resp)=>{
//         resp.send(`
//         <input type="text" placeholder="user" />
//         <button>submit</button>`);
// })

// app.get('/contact',(req,resp)=>{
//         resp.send('<input type="text" placeholder="name" /><button>submit</button>');
// })

// app.get('/mis',(req,resp)=>{
//         resp.send([{
//                 name:'Jagriti',
//                 email:'jagritisingh@gmail.com'
//         },
//         {
//                 name:'Jagriti',
//                 email:'jagritisingh@gmail.com'
//         }]);
// })

// app.listen(5000);



                            //Atteach HTML file
// const express=require('express')
// const path=require('path')

// const app=express()
// const publicPath=path.join(__dirname,'public')

// app.use(express.static(publicPath))
// app.listen(5000);


                   //Remove Extension from URl(html)
// const express=require('express')
// const path=require('path')

// const app=express()
// const publicPath=path.join(__dirname,'public')

// app.get('/about',(_,resp)=>{
//         resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('/help',(_,resp)=>{
//         resp.sendFile(`${publicPath}/help.html`)
// })

// app.get('/contact',(_,resp)=>{
//         resp.sendFile(`${publicPath}/contact.html`)
// })

// app.get('*',(_,resp)=>{
//         resp.sendFile(`${publicPath}/nopage.html`)
// })

// app.listen(5000);  




                      //EJS Engine      //Profile.ejs

// const express=require('express')
// const path=require('path')
                      
// const app=express()
// const publicPath=path.join(__dirname,'public')                      
// app.set('view engine','ejs'); //important to import 240 line in this EJS engine

// app.get('/profile',(_,resp)=>{
//         const user={
//                 name:'Jagriti Singh',
//                 email:'jagritisingh3456@gmail.com',
//                 contact:'942345677',
//                 city:'lko',
//                 color:'yellow'
//         }
//         resp.render('profile',{user})
// });

// app.get('/login',(_,resp)=>{
//         resp.render('login')
// });

// app.listen(5000);




                   //Middleware Basic
                   
// const express = require('express');
// const app = express();
// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("Please provide your age")
//     }
//     else if (req.query.age<18) {
//         resp.send("You are under aged")
//     }
//     else {
//         next();
//     }
// }

// app.use(reqFilter);

// app.get('/', (res, resp) => {
//     resp.send('Welcome to Home page')
// });

// app.get('/users', (res, resp) => {
//     resp.send('Welcome to Users page')
// });

// app.get('/about', (res, resp) => {
//     resp.send('Welcome to About page')
// });
// app.listen(5000)




                           //Middleware Route Level

// const express = require('express');
// const app = express();
// const reqFilter=require('./middleware')

// app.get('/users',reqFilter, (res, resp) => {
//     resp.send('Welcome to Users page')
// });

// app.get('/about', (res, resp) => {
//     resp.send('Welcome to About page')
// });
// app.listen(5000)





   //To get data from mongodb compress

// const {MongoClient} = require('mongodb');
// const url= 'mongodb://127.0.0.1:27017';
// const database='e-comm'
// const client= new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('product');
//     let response = await collection.find({name:"shyam"}).toArray();
//     console.log(response);
// }
// getData();


    


          //Read mongodb file(mongodb.js)

// const dbConnect=require('./mongodb')
// const main=async()=>{
//         let data=await dbConnect();
//         data=await data.find().toArray();
//         console.log(data);
// }
// main();

       


       //To read mongodb data

// const dbConnect= require('./mongodb');

// dbConnect().then((resp)=>{
// resp.find().toArray().then((data)=>{
// console.log(data)
// })
// })
// const main=async ()=>{
//    let data = await dbConnect();
//    data = await data.find().toArray();
//    console.log(data)
// }

// main()




// const mongoose = require('mongoose');

// const main=async()=>{
//         await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
//         const ProductSchema=new mongoose.Schema({
//                 name:String,
//                 price:Number
//         });
//         const ProductModel = mongoose.model('product',ProductSchema);
//         let data = new ProductsModel({name:"mataji",price:1000});
//         let result = await data.save();
//         console.log(result)
// }  

// main()



          // CURD with Mongoose

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/e-comm');
// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String

// });

// const saveInDB = async () => {
//     const Product = mongoose.model('products', productSchema);
//     let data = new Product({
//         name: "max 100",
//         price: 200,
//         brand: 'maxx',
//         category: 'Mobile'
//     });
//     const result = await data.save();
//     console.log(result);
// }

// const updateInDB =async  () => {
//     const Product = mongoose.model('products', productSchema);
//     let data =await  Product.updateOne(
//         { name: "max 6" },
//         {
//             $set: { price: 550,name:'max pro 6' }
//         }
//     )
//     console.log(data)
// }

// const deleteInDB = async ()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = await Product.deleteOne({name:'max 100'})
//     console.log(data);
// }
// const findInDB = async ()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = await Product.find({name:'max pro 611'})
//     console.log(data);
// }

// findInDB();



