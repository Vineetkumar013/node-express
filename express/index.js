const express = require("express");
const app = express();
const students = require("./Students");

const logger = require("./middleware/logger");

const port = process.env.port || 4500;
app.listen(4500,() => console.log(`server start ${port}`));

app.use("/api/students")