const express = require("express");
const app = express();
const movies = require("./Moviesdata")
const moment = require("moment");
const logger = require("./middleware/logger")


const port = process.env.port || 3500;

app.listen(3500,()=> console.log(`server ${port}`));
 

//get all movies
app.get("/movies",(req,res) =>{
    res.json(movies)
})

//get single movie
app.get("/movies/:id",(req,res)=>{
    const found = movies.some(movie => movie.id === parseInt(req.params.id));
   if(found){
    res.json(movies.filter(movie => movie.id === parseInt(req.params.id)));
   }else{
    res.status(400).json(`Bad Request!! on this id ${req.params.id}`)
   }
});


// create Member
// app.post("/",(req,res) => {
//     const newMovie = {
//         id : uuid.v4(),
//         title : req.body.title,
//         year : req.body.year,
//         director : req.body.director
//     }
//     movies.push(newMovie);
//     res.json(movies)
// })