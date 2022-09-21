const exp=require('express')
const app=exp();
// add body parser
app.use(exp.json())
require("dotenv").config()

const mclient=require("mongodb").MongoClient;
const path=require("path")
// conect react build with http server
app.use(exp.static(path.join(__dirname,'./build/ ')))

const dburl=process.env.DB_URL

mclient.connect(dburl)
.then(client=>{
    // get database obj
    let dbObj=client.db("appdata")
    // get collection obj
    let usercollectionObj=dbObj.collection("usercollection")
    // share to userApi
    app.set("usercollectionObj",usercollectionObj)

    console.log("Databse connection success")
})
.catch(err=>{console.log("err in database", err)})

// dealing with invalid path
// app.use("**",(req,res,next)=>{
//     res.send({message:"Inavlid path"})
// })

// error handler
app.use((err,req,res,next)=>{
    res.send({message:err.message})
})

const userApp=require('./APIs/userApi')
const productApp=require('./APIs/productApi')


app.use('/user',userApp)
app.use('/product',productApp)

//align port number
const port=process.env.PORT;
app.listen(port,()=>console.log(`server listening on port ${port}`)) 