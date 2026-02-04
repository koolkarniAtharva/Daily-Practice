const express =  require("express");
const nodeModel = require("./models/notes.model");

const app = express();

app.use(express.json())


// notes created using Post
app.post("/notes", async (req,res)=>{
    const {title,description} = req.body

    const note = await nodeModel.create({
        title,description
    })

    res.status(201).json({
        message:"Note Created Succesfully",
        note
    })
})

app.get

module.exports = app;
