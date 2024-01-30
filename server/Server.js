const express = require('express');
const cors = require('cors');
const db=require('./models');
const app=express();
app.use(express.json());
app.use(cors());
const port=8000;
const users=require('./Routes/Users');
const Author=require('./Routes/Author');

app.use('/users',users)
app.use('/Authors',Author)
db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log("server is Running : ",port);
    })
});