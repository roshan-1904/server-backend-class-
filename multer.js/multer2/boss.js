
// const exp=require("express")
// const multer =require("multer")
// const { upload } = require("./uploadfiles")

// const app =exp()

// app.use(exp.json())

// app.get('/',(req,res)=>{
//     res.send("runningytdtr")
// })

// app.post('/files',upload.single("imgs"),(req,res)=>{
//     res.send("uplaod a single img")
// })
// app.post('/photo/file',upload.array("photo",3),(req,res)=>{
//     res.send("upload thw 2 photes")
// })
// app.listen(5500,()=>{
//     console.log("runnin succfully");
    
// })



const express = require("express");
const fs = require("fs");
const path = require("path");
const { upload } = require("./uploadfiles");

const app = express();
const PORT = 5500;


const uploadDir = path.join(__dirname, "upload");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}


app.use(express.json());
app.use("/upload", express.static(uploadDir)); 

app.get("/", (req, res) => {
  res.send("Server is running...");
});


app.post("/files", upload.single("imgs"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const imageUrl = `http://localhost:${PORT}/upload/${req.file.filename}`;

  res.status(200).json({
    message: "Image uploaded successfully",
    url: imageUrl
  });
});


app.post("/photo/file", upload.array("photo", 3), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  const urls = req.files.map(file => `http://localhost:${PORT}/upload/${file.filename}`);

  res.status(200).json({
    message: "Multiple photos uploaded successfully",
    urls: urls
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
