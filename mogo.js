let exp=require("express")
let bd=require('body-parser')
let mongoose=require('mongoose')
let User =require('./model/mogoModel')

let  app=exp()
app.use(bd.json())
app.use(bd.urlencoded())
app.get("/",(req,res) => {
    res.send({message:"welcome"})
    
}) ;
// add data 
app.post("/add", async(req,res) => {

try {
    
    let user = await User.create(req.body)
    res.status(200).json(user)
} catch (error) {
    res.status(500).json({message:error.message})
}
})

app.get('/get',async (req,res) => {
    try {
        let user = await User.find({})
        res.status(200).json(user) 
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
})

mongoose.connect("mongodb://localhost:27017/project",{
   
})
.then(() =>{
    console.log("DB connect");
    
    app.listen(2323,() =>{
        console.log("is running");   
    })
})
.catch((error) =>{
    console.log("failed");
    
})