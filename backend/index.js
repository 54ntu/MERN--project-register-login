require('dotenv').config();
const express = require('express');
const { connectdb } = require('./db/db');
const { router } = require('./routes/auth-routes');
const cors = require('cors')
const app = express();


app.use(express.json());
app.use(cors());

app.use('/api/v1',router);

connectdb() //loading database connection file into the main file
.then(()=>{
    app.listen(`${process.env.PORT}`,()=>{
        console.log(`server is listening at port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log('error connecting database!!!');
})


