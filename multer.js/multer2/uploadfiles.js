// const multer = require("multer")
// const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./upload");
//     },
//     filename: (req, file, cb) => {
//         const extenstion = path.extname(file.originalname);
//         const newName = `${Date.now()} ${extenstion}`
//         cb(null, newName);
//     },
// });


// exports.upload = multer({
//     storage: storage,
// });

// uploadfiles.js
const multer = require("multer");
const path = require("path");

// Storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload"); // Save files to /upload folder
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    const newName = `${Date.now()}${extension}`;
    cb(null, newName);
  }
});

// Export the configured multer instance
const upload = multer({ storage });

module.exports = { upload };

