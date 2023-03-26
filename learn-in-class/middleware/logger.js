const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get("host")}:${moment().format()}`);
    next();
}
// app.use(logger);

module.exports = logger;
