const express = require('express');

const app = express() 

app.use(express.json()) 

const notes = [];

app.get('/',(req,res)=>{
    res.send("heyy")
})

app.post("/notes",(req,res)=>{
    console.log(req.body)
    
    notes.push(req.body);

    res.send("notes Created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.listen(3000);
