const express = require("express"); 

const app = express();

app.use(express.json()); 

app.get('/greeting',(req,res)=>{
    const {name,email} = req.body;
    console.log(name,email);
})

app.listen(5000,()=>{
    console.log("server is running on port 5000")
})


