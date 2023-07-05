const express = require('express');


const cors = require('cors');

app.use(cors);

const app =express();
const port = process.env.PORT || 5000;


const apiData= require('./data.json');

app.listen(port,()=>{

});

app.get('/',function(req,resp){

 
});


app.get('/service',function(req,resp){

 resp.send(apiData);

});