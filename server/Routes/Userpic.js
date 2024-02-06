const express = require("express");
const { Userpic } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Userpic.findAll({order:['name']});
  
  res.json(result);
})
router.get('/find/:id',async(req,res)=>{
  const result=await Userpic.findOne({where:{id:req.params.id}});
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { name,pic } = req.body;
  console.log({ name,pic });
  const count = await Userpic.count({where:{ name }});
  if (count===0) {
    const result = await Userpic.create({ name,pic });
    if (result) {
      res.json({ msg: "Userpic Added!" });
    } else {
      res.json({ err: "Userpic is Not Added!" });
    }
  }
  else{
    res.json({ err: "Userpic is Already in List!" });
  }
});
router.patch("/update", async (req, res) => {
  const { name,id,pic } = req.body;
  const count = await Userpic.count({where:{ id }});
  if (count===1) {
    const result = await Userpic.update({ name,pic },{where: {id}});
    if (result) {
      res.json({ msg: "Userpic Updated!" });
    } else {
      res.json({ err: "Userpic is Not Updated!" });
    }
  }
  else{
    res.json({ err: "Userpic is Not in List!" });
  }
});
router.delete("/delete/:id", async (req, res) => {

  const result=await Userpic.destroy({where:{id:req.params.id}});
  if (result) {
    res.json({ msg: "Userpic deleted!" });
  } else {
    res.json({ err: "Userpic is Not deleted!" });
  }

})

module.exports= router;
