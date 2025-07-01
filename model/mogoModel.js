let mongoose = require("mongoose")
let userSchema =mongoose.Schema (
    {
      name:{type:String,required:[true,"name is requried"]},
      email:{type:String,required :[true,"email is requried"]},
      phone:{type:Number,required :[true,"phone is must"],unique:true}
    }
)
const User = mongoose.model('User',userSchema)

module.exports=User






