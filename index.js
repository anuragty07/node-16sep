const express=require('express');
const connection =require('./connection');
const student = require('./routes/student');
const app=express();
connection();
app.use(express.json());
app.use(student);

app.listen(3001,(err)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log("SERVER IS RUNNING ON PORT 3000")
    }
})
