const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodejsautocomplete')
    .then(()=> console.log('MongoDB Connected Successfully'))
    .catch(()=> console.error('Connection Failed!'));



app.listen(8000, ()=>{
    console.log("Server is Running!");
});













