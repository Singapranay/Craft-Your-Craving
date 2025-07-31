const mongoose=require('mongoose')
const path=require("path");
require("dotenv").config()
const MONGOURI=process.env.MONGO_URI;
mongoose.connect(MONGOURI)
.then(()=>{
    console.log("Connected Successfully");
})
.catch(()=>{
    console.log("Error in connecting to DB");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
        
    },
    email:{
        type:String,
        
    },
    phone:{
        type:Number,
       
    },
    password:{
        type:String,
       
    }
},{ collection: 'Users' });


const LogInCollection=new mongoose.model("LogIn",LogInSchema)
module.exports=LogInCollection;