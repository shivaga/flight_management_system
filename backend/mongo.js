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

const flightSchema = new mongoose.Schema({
    flightId: { type: String, required: true },
    startingPoint: { type: String, required: true },
    endingPoint: { type: String, required: true },
    seats: { type: Number, required: true },
    price: { type: Number, required: true },
    time: { type: String, required: true },
    duration:{type:String, required:true},
    date:{type:String,required:true}
    
});
  
const flightcollection = mongoose.model("flightcollection",flightSchema)

const bookingSchema=new mongoose.Schema({
    useremail:{
        type:String,
        required:true
    },
    bookings:[flightSchema]
});

const bookingcollection=mongoose.model("bookingcollection",bookingSchema);

module.exports={usercollection,admincollection,flightcollection,bookingcollection};