const secureMiddlewares = (req,res,next)=>{
    let password = "1111333433"
    let pass = req.headers.authorization
    if(password === pass){
        next();
    }else{
        res.send("You are not authorized to access this page");
    }

}

module.exports = secureMiddlewares;