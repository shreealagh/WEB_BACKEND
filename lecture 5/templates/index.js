const express=require('express');
const path=require('path');

const app=express();


app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/g',(req,res)=>{
    res.render('index');
})

app.listen(8000,()=>{
    console.log('server listening to port 8000...');
})