
import express from 'express'
import fetch from 'node-fetch'
import os from 'os'


const app = express()
const PORT = 3000


app.get('/',(req, res)=>{
    const msg = `VERSION 2 :  Hello from ${os.hostname()}`
    console.log(msg);
    res.send(msg)
})

app.get('/nginx',async (req,res)=>{
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})


app.listen(PORT, ()=>{
    console.log(`Listening at port ${PORT}`);
})