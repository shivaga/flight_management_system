const express = require("express")
const cors = require("cors")

// Creating instance of an express application
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


// Get request on the server side
app.get('/',(req,res)=>{
  console.log("Server started");
  res.send("Server side");
})


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
