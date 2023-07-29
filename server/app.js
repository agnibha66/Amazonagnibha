require("dotenv").config()
const express=require('express')
const app=express();
const mongoose=require("mongoose");
require("./db/conn");
const cookieParser=require("cookie-parser");
const Products=require("./models/productsSchema");

const DefaultData=require("./defaultdata")
const cors=require("cors");
const router=require("./routes/router")

app.use(express.json());
app.use(cookieParser(""));
app.use(cors({credentials:true, origin:'https://client-frontend-s26f.onrender.com/'}));
app.use(router); 

const port = 8005;
//for deployment


app.listen(port,()=>{
    console.log(`Server is running on port number ${port} `)
})
DefaultData();
