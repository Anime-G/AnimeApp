const express = require("express");
const { Watchlist ,Anime,
    
    Rates,
    Types,
    Studio,
    Author,
    Generes,
    } = require("../models");
const e = require("express");
const { includes } = require("lodash");

const router = express.Router();
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const result = await Anime.findAll({
    attributes: { exclude: ["RateId", "TypeId"] },
    include: [
      { model: Watchlist,where:{UserId:id}},
      { model: Author, attributes: ["id"], through: { attributes: [] } },
      { model: Generes, attributes: ["id"], through: { attributes: [] } },
      { model: Studio, attributes: ["id"], through: { attributes: [] } },
      { model: Rates, attributes: ["id", "title"] },
      { model: Types, attributes: ["id", "name"] },
    ],
    
  });
  res.json(result);
});
router.post("/find", async (req, res) => {
  const { AnimeId, UserId } = req.body;
  const result = await Watchlist.count({ where: { UserId, AnimeId } });
  console.log(result);
  res.json(result);
});
//add
router.post("/add", async (req, res) => {
  const { AnimeId, UserId } = req.body;
  const result = await Watchlist.create({ AnimeId, UserId });
  if (result) {
    res.json({ msg: "Added to WitchList!" });
  } else {
    res.json({ err: "Failed To Add in WitchList!" });
  }
});
//delete
router.delete("/delete/:UserId/:AnimeId/", async (req, res) => {
  const { AnimeId, UserId } = req.params;
  const result = await Watchlist.destroy({ where: { AnimeId, UserId } });
  if (result) {
    res.json({ msg: "Removed from WitchList!" });
  } else {
    res.json({ err: "Failed To Removed from WitchList!" });
  }
});
module.exports = router;
