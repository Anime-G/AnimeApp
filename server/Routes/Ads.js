const express = require("express");
const { Adds } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Adds.findAll({order:['title']});
  
  res.json(result);
})
router.get('/find/:id',async(req,res)=>{
  const result=await Adds.findOne({where:{id:req.params.id}});
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { title,pic,Description } = req.body;
  console.log({ title,pic,Description });
  const count = await Adds.count({where:{ title }});
  if (count===0) {
    const result = await Adds.create({ title,pic,Description });
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
  const { title,id,Description,pic } = req.body;
  const count = await Adds.count({where:{ id }});
  if (count===1) {
    const result = await Adds.update({ title,Description,pic },{where: {id}});
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

  const result=await Adds.destroy({where:{id:req.params.id}});
  if (result) {
    res.json({ msg: "Ad deleted!" });
  } else {
    res.json({ err: "Ad is Not deleted!" });
  }

})

module.exports= router;
