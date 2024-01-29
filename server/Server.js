const express = require('express');
const cors = require('cors');
const db=require('./models');
const app=express();
const port=8000;
app.use(cors());


db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log("server is Running : ",port);
    })
});