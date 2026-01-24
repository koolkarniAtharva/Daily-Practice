const express = require('express');

const app = express() // server ka instance create karna

app.get('/',(req,res)=>{
    res.send("HEYY")
})

app.listen(3000);
