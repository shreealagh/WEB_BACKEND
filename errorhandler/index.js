const express=require('express');

const app=express();


app.get('/',(req,res,next)=>{

    next();
   console.log("abhishek conqueror");
},(req,res,next)=>{
     console.log('hello');
     next();
},(req,res,next)=>{
    console.log('hey');
    next(new Error('Internal Server Error'));
})



app.use((err,req,res,next)=>{
     const msg=err.message;

    res.status(400).json(
        {
            message:msg
        }
    )
})


app.listen(3000,()=>{console.log("server running at 3000...")});

