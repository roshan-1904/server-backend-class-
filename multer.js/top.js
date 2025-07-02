//  import the express
const exp= require("express")
// next inst
 const app=exp()

const  multer =require("multer")

const upload =multer({dest :"imges12/"});
// middleware 
 app.use(exp.json())
// general route
 app.get('/',(req,res)=>{
     res.send("running")
    })
// get single img
app.post('/upload/file',upload.single("img"),(req,res)=>{
    res.send("single file done")
})  
// multiple uploads
app.post('/photo/file',upload.array("photo",3),(req,res)=>{
    res.send("img is updoads")
})
//  port run
 app.listen(3000,()=>{
    console.log("port is running");
    
 });