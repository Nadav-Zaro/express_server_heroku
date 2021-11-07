const express = require("express"),
    PORT = 3000,
    app = express();

app.get("*",(req,res)=>{
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`listenning to port ${PORT}`);
})