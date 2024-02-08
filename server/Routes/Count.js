const db = require("../models");
const express = require("express");
const router = express.Router();

//   Anime, ✅
//   Users,✅
//   Rates,✅
//   Types,✅
//   Studio,✅
//   Author,✅
//   Generes,✅
//   Userpic,✅
//   Adds✅


  router.get("/",async (req, res) => {

    const Studios = await db.Studio.count();
    const Types = await db.Types.count();
    const Rates = await db.Rates.count();
    const Users = await db.Users.count({ where: { status: 0 } });
    const Authors = await db.Author.count()
    const userpic = await db.Userpic.count();
    const Generes = await db.Generes.count();
    const Adds = await db.Adds.count();
    const Animes = await db.Anime.count();
    const data={Studios,Types,Rates,Users,Authors,userpic,Generes,Adds,Animes}
    res.json(data);

  });
  
  
module.exports = router;
