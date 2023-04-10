const express= require('express');

const app=express();


app.use((req,res)=>{
    const myurl=req.url;
    switch(myurl)
    {
        case '/': res.send('home route');
        break;
        case '/about':res.send('hello ji hello ji kese h sabke sab kya haal chaal sabke mitro');
        break;
        default :
        
        res.send('invalid route!!!!!');
       
    }

});


app.listen(3000,()=>{
    console.log('server listing to port 3000');
})