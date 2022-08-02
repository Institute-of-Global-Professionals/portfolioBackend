const express = require("express");
const mongoose = require("mongoose")
const app = express();
app.use(express.json())

require('dotenv').config()
const userRoute = require("./routes/userRoutes");
mongoose.connect(process.env.DB)

app.use("/user", userRoute)

app.listen(process.env.PORT, () => {
    console.log("Listening..")
})


//Farija
// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const fs = require('fs')
// const multer = require('multer')

// const app = express();


// //Import Routes
// const userRoute = require("./routes/eduRoute")

// //Mongoose connect
// mongoose.connect(process.env.DB,
//     () => {
//         console.log("mongodb connected")
//     }, e => console.error(e)
// )

// //Middleware
// app.use(express.json())


// //Route Middlewares
// app.use("/api", userRoute);

// const PORT = process.env.PORT || 3000

// app.listen(PORT, () => {
//     console.log(`Server is on and running on ${PORT}`)
// })