const express=require('express');
const path=require('path');

const app=express();

app.get('/',(req,res)=>{
    res.send('WELCOME TO EXPRESS');
})

app.listen(8000,()=>{
    console.log('server listning to port 8000');
})
