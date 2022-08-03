const express = require("express");
const mongoose = require("mongoose")
const app = express();
app.use(express.json())



require('dotenv').config()
const userRoute = require("./routes/userRoutes");
const workExp=require("./routes/workExp");
const socialLinkRoutes  =require("./routes/socialLinkRoutes");
const contactRoutes  =require("./routes/contactRoutes");


//DB cpnnection 
mongoose.connect(process.env.DB)

app.use("/user", userRoute,workExp)

//social link path
app.use("/socialLink",socialLinkRoutes)
app.use("/contactDetails",contactRoutes)

app.listen(process.env.PORT, ()=>{
    console.log("Listening..")
})                                                                                  