import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.status(200).json(
        {
            message:'Hello World!'
        }
    )
})
app.get('/api/data',(req,res)=>{
    const data = {
        id :1,
        name :'sample data',
        description : 'This is a sample data response from the API' 
    };
    res.status(200).json(data)
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))