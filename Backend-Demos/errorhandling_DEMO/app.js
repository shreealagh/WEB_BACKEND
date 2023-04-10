const express = require('express');
const app = express();


app.get('/home', (req, res) => {
    
        const val = Math.floor(Math.random() * 100000);
        if (val % 3 === 0) {
            throw new Error('divisble by 3');
        }
        return res.status(200).send('Everything is okay!')
    
   
});
app.use((err,req,res,next)=>{
    console.log(err.message);
})


app.listen(3000,()=>{
  console.log('server started at port 3000');
});