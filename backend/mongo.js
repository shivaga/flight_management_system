const mongoose=require("mongoose")

//Configuring environment files
require("dotenv").config();
const MONGO_URI =process.env.db_api_access;
mongoose.connect(MONGO_URI)
.then(()=>{
    console.log("mongodb connected");
})
.catch((e)=>{
    console.log("error",e)

    console.log('failed');
})


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String,
    },
    isVerified:{
        type:Boolean,
        default:false
    }
})

const usercollection = mongoose.model("usercollection",userSchema)


const adminSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const admincollection = mongoose.model("admincollection",adminSchema)

module.exports={usercollection,admincollection}