function  log(req,res,next) {
    console.log("logiing......");
    next();
}

module.exports=log;