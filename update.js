const dbConnect= require('./mongodb')

const updateOne=async ()=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        { name:'singh'},
        {
            $set:{name:'neha', city:'varanshi'}
        }
        )
    console.log(result)
}

updateOne();