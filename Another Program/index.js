const express = require("express");
const path = require("path");
// const exphbs = require("express-handlebars")
const logger = require("./middleware/logger")
const app = express();

// handlebars middlebars
// app.engine("handlebars",exphbs({defaultLayout:"main"}));
// app.set("view engine", "handlebars");


//body parse middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));    

//set static folder
app.use(express.static(path.join(__dirname,"public",)))

//members Api routes
app.use('/app/members',require("./routes/api/members"))

const port = process.env.port || 5500;

app.listen(port,() => console.log(`Hey Buddy server start ${port}`));