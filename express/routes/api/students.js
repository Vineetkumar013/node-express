const express = require ("express");
const router = express.Router();

//get all students
app.get("/",(req,res)=> res.json(students));

//get single student
app.get("/:id",(req,res)=> {
const found = students.some(student => student.id === parseInt(req.params.id));
if(found){
    res.json(students.filter(student => student.id === parseInt(req.params.id)));
}else{
    res.status(400).json({msg:`No member with id of ${req.params.id}`});
}
});