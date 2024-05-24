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

