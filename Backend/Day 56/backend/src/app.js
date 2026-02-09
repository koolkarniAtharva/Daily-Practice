const express = require("express");
const { models } = require("mongoose");
const noteModel = require("./models/note.models");
const cors = require("cors");
const path = require("path");

const app = express()
app.use(cors())
app.use(express.json());
app.use(express.static("./public"))
//POST api/notes

app.post('/api/notes', async (req,res)=>{
    const {title,description} = req.body ;
    const note = await  noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"Note Created Successfully",
        note
    });
})

//GET all the notes in DB
app.get("/api/notes",async(req,res)=>{
    const note = await noteModel.find()

    res.status(200).json({
        message:"Note fetched sucessfully",
        note
    })
})


//DELETE /api/notes
app.delete("/api/notes/:id", async (req,res)=>{
    const id = req.params.id
    
    const note = await noteModel.findByIdAndDelete(id)
    
    res.status(200).json({
        message:"note Deletd sucessfully",
        note
    })

})

//Update /api/notes
app.patch("/api/notes/:id", async(req,res)=>{
    const id = req.params.id
    const {description} = req.body
    await noteModel.findByIdAndUpdate(id,{description})
    
    res.status(200).json({
        message:"Note Updated sucessfully"
    })
})


app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})

module.exports = app;