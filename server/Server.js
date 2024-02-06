const express = require('express');
const cors = require('cors');
const db=require('./models');
const app=express();
app.use(express.json());
app.use(cors());
const port=8000;
const users=require('./Routes/Users');
const Author=require('./Routes/Author');
const Studio=require('./Routes/Studio');
const Type=require('./Routes/Type');
const Rate=require('./Routes/Rate');
const Genere=require('./Routes/Genere');
const Ads=require('./Routes/Ads');
const Userpic=require('./Routes/Userpic');
const Anime=require('./Routes/Anime');

app.use('/users',users)
app.use('/Authors',Author)
app.use('/Studios',Studio)
app.use('/Types',Type)
app.use('/Rates',Rate)
app.use('/Generes',Genere)
app.use('/Ads',Ads)
app.use('/Userpic',Userpic)
app.use('/Animes',Anime)
db.sequelize.sync().then(()=>{
    app.listen(port,()=>{
        console.log("Port: ",port);
    })
});