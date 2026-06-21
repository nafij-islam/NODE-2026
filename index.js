const express = require("express"); 
const bankamountcontroller = require("./controllers/bankamount");
const secureMiddlewares = require("./middlewares/secureMiddlewares");

const app = express();


app.use(express.json()); 


app.post('/greeting',(req,res)=>{

    const {name,email} = req.body;

    if(!name && !email){
        res.send("Please provide both name and email");
    }
})


app.post('/login',(req,res)=>{
    const {name,email} = req.body;
    
    res.send(`Welcome ${name}, your email is ${email}`);

})


app.get('/bankamount',secureMiddlewares,bankamountcontroller)


app.listen(5000,()=>{
    console.log("server is running on port 5000")
})


