const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cookieParser=require("cookie-parser")
const cors=require('cors');
const app=express();
const userRoutes = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
// connect to database
const connectToDb=require("./db/db");
connectToDb();

app.get("/",(req,res)=>{
    res.send("working...... :)")
})
app.use('/users',userRoutes)



module.exports = app;