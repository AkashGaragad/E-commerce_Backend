const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const Product = require("./models/Product");
const cors = require("cors");


const PORT=3000;

dotenv.config();
const app=express()
app.use(express.json());
app.use(cors());
app.get("/",(req,res) =>{
res.json({
    messege:"server is running",
});
});

app.use("/products",productRoutes);
app.use("/auth", authRoutes);

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("connect mongodb successfully");

app.listen(PORT,()=>{
    console.log("server is running fine and good");
    
});
})
.catch((err)=>{
    console.error("failed to connect");
    console.log(err.messege);
});


