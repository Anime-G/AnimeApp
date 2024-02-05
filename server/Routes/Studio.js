const express = require("express");
const { Studio } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Studio.findAll({order:['name']});
  
  res.json(result);
})
router.get('/find/:id',async(req,res)=>{
  const result=await Studio.findOne({where:{id:req.params.id}});
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { name } = req.body;
  const count = await Studio.count({where:{ name }});
  if (count===0) {
    const result = await Studio.create({ name });
    if (result) {
      res.json({ msg: "Studio Added!" });
    } else {
      res.json({ err: "Studio is Not Added!" });
    }
  }
  else{
    res.json({ err: "Studio is Already in List!" });
  }
});
router.patch("/update", async (req, res) => {
  const { name,id } = req.body;
  const count = await Studio.count({where:{ id }});
  if (count===1) {
    const result = await Studio.update({ name },{where: {id}});
    if (result) {
      res.json({ msg: "Studio Updated!" });
    } else {
      res.json({ err: "Studio is Not Updated!" });
    }
  }
  else{
    res.json({ err: "Studio is Not in List!" });
  }
});
router.delete("/delete/:id", async (req, res) => {

  const result=await Studio.destroy({where:{id:req.params.id}});
  if (result) {
    res.json({ msg: "Studio deleted!" });
  } else {
    res.json({ err: "Studio is Not deleted!" });
  }

})

module.exports= router;
