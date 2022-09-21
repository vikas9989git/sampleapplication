const exp=require('express')
const productApp=exp.Router();

let products=[
    {
        pId:10,
        name:"tv",
        price:20000
    }
]

let middleware1=(req,res,next)=>{
    console.log("Middleware 1 is executed");
    // for ware require obj to next middleware  
    next()
}
let middleware2=(req,res,next)=>{
    console.log("Middleware 2 is executed");
    next()
}
productApp.use(middleware1) 
productApp.use(middleware2)


productApp.get('/getproducts',(req,res)=>{
    res.send({message:"all Products data",payload:products})
})
productApp.get('/getproduct/:id',(req,res)=>{
    productId=(+req.params.id);

    let product =products.find((obj)=>obj.pId===productId)

    if(product===undefined){
        res.send({message:"user not found"})
    }
    else{
    res.send({message:"Product data",payload:product})
    }
})

// for post request

productApp.post('/create-product',(req,res)=>{
    let product=req.body
    products.push(product);
    res.send({message:"product created successfully"})
})
// for put Request

productApp.put('/update-product/:id',(req,res)=>{
    let productId=(+req.params.id)
    let modifiedProduct=req.body
    let productIndex=products.findIndex(obj=>obj.pId===productId)
    if(productIndex===-1){
        res.send({message:"product not found"})
    }
    else{
        products.splice(productIndex,1,modifiedProduct)
        res.send({message:"product updated"})
    }
})

// for delete rquest

productApp.delete('/delete-product/:id',(req,res)=>{
    let productId=(+req.params.id)
    let productIndex=products.findIndex(obj=>obj.pId===productId)
    if(productIndex===-1){
        res.send({message:"product not found to delete"})
    }
    else{
        products.splice(productIndex,1)
        res.send({message:"product deleted"})
    }
})

module.exports=productApp