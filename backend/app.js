const express = require("express")
const cors = require("cors")
const nodemailer=require("nodemailer");
const {usercollection,admincollection,flightcollection,bookingcollection} = require("./mongo")
// Creating instance of an express application
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())




app.get("/",cors(),(req,res)=>{

})
// app.get("/flights",)

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await usercollection.findOne({email:email,password:password})

        if(check){
            if(check.isVerified){
                res.json("exist");
            }
            else{
                res.json("NotVerified")
            }
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await usercollection.findOne({email:email})

        if(check){
            if(!check.isVerified){
                res.json("NotVerified");
            }
            else{
                res.json("exist");
            }
        }
        else{
            const OTP = Math.floor(1000 + Math.random() * 9000).toString();
            try{
                sendotp(OTP,email);
            }
            catch(e){
                console.log(e);
            }
            res.json("accountcreated");
            data.isVerified=false;
            data.otp=OTP;
            await usercollection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/signup_after_otp",async(req,res)=>{
    const{email,password,otp}=req.body
    // console.log(req.body);

    const data={
        email:email,
        password:password
    }

    try{
        const check=await usercollection.findOne({email:email,password:password})

        if(check){
            if(check.isVerified){
                res.json("Verified");
            }
            else if(check.otp===otp){
                const result = await usercollection.updateOne({email:email,password:password},{isVerified:true});
                res.json("Verified");
            }
            else if(check.otp!==OTP){
                res.json("WrongOTP");
            }
        }
        else{
            res.json("Wrongdetails");
            // await usercollection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/admin_login",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await admincollection.findOne({email:email,password:password})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
        res.json("fail")
    }

})

async function sendotp(OTP,email) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.useremail, // generated ethereal user
        pass: process.env.password, // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: process.env.useremail, // sender address
      to: email, // list of receivers
      subject: "OTP Authentication", // Subject line
      html:`Your OTP for verification is <span style="font-weight:bold;text-decoration:underline;color:royalblue;"> ${OTP}</span>. Use this OTP to validate your login.<div>  <br>  </div><div style="font-weight:bold">This is system generated mail. Please don't reply to this mail.</div><br><br><div>Regards</div><div style="font-weight:bold">Team SecurityHelp</div>`, // plain text body
    });
    // console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


app.get('/flights', async (req, res) => {
    const flights = await flightcollection.find();
    res.json(flights);
});
  
app.post('/flights', async (req, res) => {
    const flight = new flightcollection(req.body);
    await flight.save();
    res.status(201).json(flight);
});
  
app.put('/flights/:id', async (req, res) => {
    const { id } = req.params;
    const updatedFlight = await flightcollection.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedFlight);
});
  
app.delete('/flights/:id', async (req, res) => {
    const { id } = req.params;
    await flightcollection.findByIdAndDelete(id);
    res.status(204).send();
});

app.get('/search', async (req, res) => {
    // console.log("Here");
    try {
        const query = req.query;
        // console.log(query);
        const results = await flightcollection.find({startingPoint:query.sl,endingPoint:query.el,date:query.dt});
        // console.log(results);
        res.json(results);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/bookings', async (req, res) => {
    // console.log("Here");
    try {
        const query = req.query;
        // console.log(query);
        const results = await bookingcollection.find({useremail:query.email});
        // console.log(results);
        res.json(results);
    } catch (error) {
        res.status(500).send(error);
    }
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});