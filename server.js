const express = require("express"),
app = express();
require("dotenv").config()

app.get("*",(req,res)=>{
    res.send("hello")
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`listenning to port ${PORT}`);
})