const express = require('express');
const app = express();
const data = require('./milestones.json');
const port = process.env.PORT || 3000;

app.get("/index",(req,res)=>{
    res.json(data);
    });

app.listen(port, ()=>{
    console.log("working");
})