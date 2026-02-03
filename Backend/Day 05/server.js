const app = require("./src/app");

const mongoose = require("mongoose");

function connectToDb(){
    mongoose.connect("mongodb+srv://evilofheaven11419_db_user:5tHEjb3KTGf3MZl4@cluster0.ocxjnyg.mongodb.net/day-5")
    .then(()=>{
        console.log("Connected to Database")
    })
}
connectToDb();

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});