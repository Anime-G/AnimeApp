const express = require("express");
const { Types } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Types.findAll({order:['name']});
  
  res.json(result);
})
router.get('/find/:id',async(req,res)=>{
  const result=await Types.findOne({where:{id:req.params.id}});
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { name } = req.body;
  const count = await Types.count({where:{ name }});
  if (count===0) {
    const result = await Types.create({ name });
    if (result) {
      res.json({ msg: "Types Added!" });
    } else {
      res.json({ err: "Types is Not Added!" });
    }
  }
  else{
    res.json({ err: "Types is Already in List!" });
  }
});
router.patch("/update", async (req, res) => {
  const { name,id } = req.body;
  const count = await Types.count({where:{ id }});
  if (count===1) {
    const result = await Types.update({ name },{where: {id}});
    if (result) {
      res.json({ msg: "Types Updated!" });
    } else {
      res.json({ err: "Types is Not Updated!" });
    }
  }
  else{
    res.json({ err: "Types is Not in List!" });
  }
});
router.delete("/delete/:id", async (req, res) => {

  const result=await Types.destroy({where:{id:req.params.id}});
  if (result) {
    res.json({ msg: "Types deleted!" });
  } else {
    res.json({ err: "Types is Not deleted!" });
  }

})

module.exports= router;
