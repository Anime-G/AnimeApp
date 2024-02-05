const express = require("express");
const { Rates } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Rates.findAll({order:['title']});
  
  res.json(result);
})
router.get('/find/:id',async(req,res)=>{
  const result=await Rates.findOne({where:{id:req.params.id}});
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { title } = req.body;
  const count = await Rates.count({where:{ title }});
  if (count===0) {
    const result = await Rates.create({ title });
    if (result) {
      res.json({ msg: "Rate Added!" });
    } else {
      res.json({ err: "Rate is Not Added!" });
    }
  }
  else{
    res.json({ err: "Rate is Already in List!" });
  }
});
router.patch("/update", async (req, res) => {
  const { title,id } = req.body;
  const count = await Rates.count({where:{ id }});
  if (count===1) {
    const result = await Rates.update({ title },{where: {id}});
    if (result) {
      res.json({ msg: "Rate Updated!" });
    } else {
      res.json({ err: "Rate is Not Updated!" });
    }
  }
  else{
    res.json({ err: "Rate is Not in List!" });
  }
});
router.delete("/delete/:id", async (req, res) => {

  const result=await Rates.destroy({where:{id:req.params.id}});
  if (result) {
    res.json({ msg: "Rate deleted!" });
  } else {
    res.json({ err: "Rate is Not deleted!" });
  }

})

module.exports= router;
