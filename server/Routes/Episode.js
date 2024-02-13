const express = require("express");
const { Episode } = require("../models");
const { Op } = require("sequelize");
const router = express.Router();

router.get("/", async (req, res) => {
  const result = await Episode.findAll({ order: ["Epno"] });
  res.json(result);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Episode.findAll({
    where: { AnimeId: id },
    order: ["Epno"],
  });
  res.json(result);
});
router.get("/find/:id", async (req, res) => {
  const result = await Episode.findOne({ where: { id: req.params.id } });
  res.json(result);
});
router.get("/findbyAnimeId/:id", async (req, res) => {
  const result = await Episode.findOne({ where: { AnimeId: req.params.id },order:['createdAt'] });
  res.json(result);
});
router.post("/add", async (req, res) => {
  const { title, url, AnimeId, Epno } = req.body;
  //console.log({ title, url, AnimeId, Epno });
  const count = await Episode.count({ where: { Epno, AnimeId } });
  if (count === 0) {
    const result = await Episode.create({ title, url, AnimeId, Epno });
    if (result) {
      res.json({ msg: "Episode Added!" });
    } else {
      res.json({ err: "Episode is Not Added!" });
    }
  } else {
    res.json({ err: "Episode No is repeating!" });
  }
});
router.patch("/update", async (req, res) => {
  const { title, Epno, id, AnimeId, url } = req.body;
  const count = await Episode.count({ where: { id } });
  if (count === 1) {
    const countEp = await Episode.count({ where: { Epno, AnimeId,id:{[Op.not]:id}}});
    
    if (countEp === 0) {  
      const result = await Episode.update(
        { Epno, title, AnimeId, url },
        { where: { id } }
      );
      if (result) {
        res.json({ msg: "Episode Updated!" });
      } else {
        res.json({ err: "Episode is Not Updated!" });
      }
    } else {
      res.json ({ err: "Episode No is Repeated!" });
    }
  } else {
    res.json({ err: "Episode is Not in List!" });
  }
});
router.delete("/delete/:id", async (req, res) => {
  const result = await Episode.destroy({ where: { id: req.params.id } });
  if (result) {
    res.json({ msg: "Episode deleted!" });
  } else {
    res.json({ err: "Episode is Not deleted!" });
  }
});

module.exports = router;
