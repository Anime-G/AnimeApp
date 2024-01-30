const express = require('express');
const cors = require('cors');
const db=require('./models');
const app=express();
app.use(express.json());
app.use(cors());
const port=8000;
const users=require('./Routes/Users');

app.use('/users',users)
db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log("server is Running : ",port);
    })
});