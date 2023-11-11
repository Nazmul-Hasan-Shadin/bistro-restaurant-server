const express= require('express')
const app= express()
const cors = require('cors')
require('dotenv').config()
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('server is running')
})



app.listen(port,()=>{
    console.log('bistro boss is running');
})


