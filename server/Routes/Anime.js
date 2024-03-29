const express = require("express");
const {
  Anime,
  AuthorAnime,
  Rates,
  Types,
  Studio,
  Author,
  Generes,
  StudioAnime,
  GeneresAnime,
  Episode,
  sequelize
} = require("../models");
const _ =require('lodash');
const { Op } = require("sequelize");
const router = express.Router();

router.get("/", async (req, res) => {
  const anime = await Anime.findAll({ order: ["title"] });

  const TotalData = [];
  let Studios = [];
  let generes = [];
  let Authors = [];
  let Rate = {};
  let Type = {};
  let result, s, G, A, TotalObject;
  for (let i = 0; i < anime.length; i++) {
    Studios = [];
    generes = [];
    Authors = [];
    Rate = {};
    Type = {};
    result;
    //Rate
    result = await Rates.findOne({
      where: { id: anime[i].RateId },
      attributes: { exclude: ["id", "createdAt", "updatedAt"] },
    });
    Rate = result;
    //Type
    result = await Types.findOne({
      where: { id: anime[i].TypeId },
      attributes: { exclude: ["id", "createdAt", "updatedAt"] },
    });
    Type = result;
    //Studio id of This Anime
    result = await StudioAnime.findAll({ where: { AnimeId: anime[i].id } });
    s = result;

    for (let is = 0; is < s.length; is++) {
      result = await Studio.findOne({
        where: { id: s[is].StudioId },
        attributes: { exclude: ["id", "createdAt", "updatedAt"] },
      });

      Studios.push(result);
    }
    //Author id of this Anime
    result = await AuthorAnime.findAll({ where: { AnimeId: anime[i].id } });
    A = result;
    for (let ia = 0; ia < A.length; ia++) {
      result = await Author.findOne({
        where: { id: A[ia].AuthorId },
        attributes: { exclude: ["id", "createdAt", "updatedAt"] },
      });
      Authors.push(result);
    }
    //Author id of this Anime
    result = await GeneresAnime.findAll({ where: { AnimeId: anime[i].id } });
    G = result;
    for (ig = 0; ig < G.length; ig++) {
      result = await Generes.findOne({
        where: { id: G[ig].GenereId },
        attributes: { exclude: ["id", "createdAt", "updatedAt"] },
      });
      generes.push(result);
    }
    const { id, title, description, pic, status } = anime[i];
    TotalObject = {
      id,
      title,
      description,
      pic,
      status,
      Type,
      Rate,
      generes,
      Authors,
      Studios,
    };
    // //console.log("Data ", TotalObject);
    TotalData.push(TotalObject);
  }
  res.json(TotalData);
});
router.post("/add", async (req, res) => {
  //Input the Data AuthorId,GenereId,RateId,TypeId,status,name,pic,description
  //first the Anime Add
  //status,name,pic,description,RateId,TypeId
  const {
    AuthorId,
    GenereId,
    StudioId,
    RateId,
    TypeId,
    status,
    name,
    pic,
    description,
  } = req.body;
  const count = await Anime.count({ where: { title: name } });
  //console.log(StudioId);
  if (count === 0) {
    //insert the Data
    const result = await Anime.create({
      RateId,
      TypeId,
      status,
      title: name,
      pic,
      description,
    }).then((result) => {
      const AnimeId = result.id;
      for (let i = 0; i < GenereId.length; i++) {
        GeneresAnime.create({ AnimeId, GenereId: GenereId[i] });
      }
      for (let i = 0; i < AuthorId.length; i++) {
        AuthorAnime.create({ AnimeId, AuthorId: AuthorId[i] });
      }
      for (let i = 0; i < StudioId.length; i++) {
        StudioAnime.create({ AnimeId, StudioId: StudioId[i] });
      }
      return result;
    });
    if (result) {
      res.json({ msg: "anime Added" });
    } else {
      res.json({ err: "anime is Not Added!" });
    }
  } else {
    res.json({ err: "Anime Is Repeated!" });
  }
});
router.patch("/update", async (req, res) => {
  const {
    id,
    AuthorId,
    GenereId,
    StudioId,
    RateId,
    TypeId,
    status,
    name,
    pic,
    description,
  } = req.body;
 {
    //insert the Data
    const result = await Anime.update(
      {
        RateId,
        TypeId,
        status,
        title: name,
        pic,
        description,
      },
      { where: { id } }
    ).then(async (result) => {
      const AnimeId = id;
      await GeneresAnime.destroy({ where: { AnimeId } });
      await AuthorAnime.destroy({ where: { AnimeId } });
      await StudioAnime.destroy({ where: { AnimeId } });

      for (let i = 0; i < GenereId.length; i++) {
        GeneresAnime.create({ AnimeId, GenereId: GenereId[i] });
      }
      for (let i = 0; i < AuthorId.length; i++) {
        AuthorAnime.create({ AnimeId, AuthorId: AuthorId[i] });
      }
      for (let i = 0; i < StudioId.length; i++) {
        StudioAnime.create({ AnimeId, StudioId: StudioId[i] });
      }
      return result;
    });
    if (result) {
      res.json({ msg: "anime Updated!" });
    } else {
      res.json({ err: "anime is Not Updated!" });
    }
  } 
});
router.get("/find/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Anime.findOne({
    where: { id },
    attributes: { exclude: ["RateId", "TypeId"] },
    include: [
      { model: Author, attributes: ["id"], through: { attributes: [] } },
      { model: Generes, attributes: ["id"], through: { attributes: [] } },
      { model: Studio, attributes: ["id"], through: { attributes: [] } },
      { model: Rates, attributes: ["id", "title"] },
      { model: Types, attributes: ["id", "name"] },
    ],
    // Including the Author model
  });
  res.json(result);
});
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Anime.destroy({ where: { id } });
  if (result) {
    res.json({ msg: "Anime is Delete with All It's Episode" });
  } else {
    res.json({ err: "Anime is not Deleted!" });
  }
});
router.get("/top/:limit",async(req,res)=>{
  const limit=req.params.limit;
  //console.log(limit);
  const result = await Anime.findAll({
    
    attributes: { exclude: ["RateId", "TypeId"] },
    include: [
      { model: Author, attributes: ["name"], through: { attributes: [] } },
      { model: Generes, attributes: ["Title"], through: { attributes: [] } },
      { model: Studio, attributes: ["name"], through: { attributes: [] } },
      { model: Episode,attributes:['id']},
      { model: Rates, attributes: [ "title","Description"] },
      { model: Types, attributes: ["name"] },
    ],
    limit:parseInt(limit),
    // Including the Author model
  });
  
  res.json(result);
})
router.post("/Animescards",async(req,res)=>{
  const id=req.body.id;
  //console.log(id);
  const result = await Anime.findAll({
    where:{id:{[Op.notIn]:id}},
    attributes: { exclude: ["RateId", "TypeId"] },
    include: [
      { model: Author, attributes: ["name"], through: { attributes: [] } },
      { model: Generes, attributes: ["Title"], through: { attributes: [] } },
      { model: Studio, attributes: ["name"], through: { attributes: [] } },
      { model: Episode,attributes:['id']},
      { model: Rates, attributes: [ "title","Description"] },
      { model: Types, attributes: ["name"] },
    ],
    limit:25,
    // Including the Author model
  });
  
  res.json(result);
})
//get Only those Anime which have the Episodes
router.get("/getAnimeWithEps",async(req,res)=>{
  const result=await Episode.findAll({ attributes:  [[sequelize.fn('DISTINCT', sequelize.col('AnimeId')), 'AnimeId']]})
  const AnimeId=[];
  result.forEach(element => {
      AnimeId.push(element.AnimeId)
  });
  const Animedata=await Anime.findAll({where:{id:AnimeId},attributes:['id','title']});
  res.json(Animedata)
})

router.get("/GetDataAnime/:id",async(req,res)=>{
  
  const id=req.params.id;
  //console.log(id);
  const result = await Anime.findAll({
    where:{id},
    attributes: { exclude: ["RateId", "TypeId"] },
    include: [
      { model: Author, attributes: ["name"], through: { attributes: [] } },
      { model: Generes, attributes: ["Title"], through: { attributes: [] } },
      { model: Studio, attributes: ["name"], through: { attributes: [] } },
      { model: Episode,order:['createdAt']},
      { model: Rates, attributes: [ "title","Description"] },
      { model: Types, attributes: ["name"] },
    ],
    limit:25,
    // Including the Author model
  });
  
  res.json(result);
})
module.exports = router;
