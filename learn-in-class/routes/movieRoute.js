
// const express = require("express");
// const route = express.Router();
// const movies = require("../Moviesdata")
// const moment = require("moment");

// //get all movies
// route.get("/movies",(req,res) =>{
//     res.json(movies)
// })

// //get single movie
// route.get("/movies/:id",(req,res)=>{
//     const found = movies.some(movie => movie.id === parseInt(req.params.id));
//    if(found){
//     res.json(movies.filter(movie => movie.id === parseInt(req.params.id)));
//    }else{
//     res.status(400).json(`Bad Request!! on this id ${req.params.id}`)
//    }
// });

// module.exports = route;