require('dotenv').config();
const express = require('express');
const { connectdb } = require('./db/db');
const app = express();


connectdb() //loading database connection file into the main file
.then(()=>{
    app.listen(`${process.env.PORT}`,()=>{
        console.log(`server is listening at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log('error connecting database!!!');
})


