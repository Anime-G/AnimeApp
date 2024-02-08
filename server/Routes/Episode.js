const express = require("express");
const { Episode } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Episode.findAll({order:['Epno']});
  res.json(result);
})
router.get('/find/:id',async(req,res)=>{
  const result=await Episode.findOne({where:{id:req.params.id}});
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { title,url,AnimeId } = req.body;
  console.log({ title,url,AnimeId });
  const count = await Episode.count({where:{ title }});
  if (count===0) {
    const result = await Episode.create({ title,url,AnimeId });
    if (result) {
      res.json({ msg: "Ad Added!" });
    } else {
      res.json({ err: "Ad is Not Added!" });
    }
  }
  else{
    res.json({ err: "Ad is Already in List!" });
  }
});
router.patch("/update", async (req, res) => {
  const { title,id,AnimeId,url } = req.body;
  const count = await Episode.count({where:{ id }});
  if (count===1) {
    const result = await Episode.update({ title,AnimeId,url },{where: {id}});
    if (result) {
      res.json({ msg: "Ad Updated!" });
    } else {
      res.json({ err: "Ad is Not Updated!" });
    }
  }
  else{
    res.json({ err: "Ad is Not in List!" });
  }
});
router.delete("/delete/:id", async (req, res) => {

  const result=await Episode.destroy({where:{id:req.params.id}});
  if (result) {
    res.json({ msg: "Ad deleted!" });
  } else {
    res.json({ err: "Ad is Not deleted!" });
  }

})

module.exports= router;
