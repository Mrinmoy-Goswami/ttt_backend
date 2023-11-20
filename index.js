const express = require("express");
const PORT = 4000
const dotenv = require('dotenv');
const userRoute = require("./Routes/userRoute")
const cors = require('cors');
const mongoose = require('mongoose')

const app = new express();

app.use(express.json())
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to Database")).catch((error)=>console.log(error));

app.use('/api',userRoute);

app.listen(PORT,()=>{
    console.log("Server started ")
})

