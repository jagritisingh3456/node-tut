// const express=require('express')
// const dbConnect= require('./mongodb')
// const app = express();

// app.use(express.json());

// app.get('/',async(res,resp)=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     resp.send(data)
// });

// app.post('/',async(req,resp)=>{
//     console.log(req.body)
//     resp.send({name:'jiggi'})
// });

// app.listen(5000)


const dbConnect = require('./mongodb');
const express = require('express');
const mongodb = require('mongodb')
const app = express();

app.use(express.json());
app.get('/',async (res,resp)=>{
    let data = await dbConnect();
    data= await data.find().toArray();
    resp.send(data);
});


app.post("/", async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)

})

app.put('/:name',async (req,resp)=>{
    let data= await dbConnect();
    let result=data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    )
    resp.send(result)
})

app.delete("./id",async(req,resp)=>{
    console.log(req.params.id)
    const data=await dbConnect();
    const result=data.deleteOne({id: new mongodb.objectId(req.params.id)})
    resp.send(result)
})

app.listen(5000)

