const express = require("express");
const { Generes } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Generes.findAll({order:['title']});
  
  res.json(result);
})
router.get('/find/:id',async(req,res)=>{
  const result=await Generes.findOne({where:{id:req.params.id}});
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { title } = req.body;
  const count = await Generes.count({where:{ title }});
  if (count===0) {
    const result = await Generes.create({ title });
    if (result) {
      res.json({ msg: "Genere Added!" });
    } else {
      res.json({ err: "Genere is Not Added!" });
    }
  }
  else{
    res.json({ err: "Genere is Already in List!" });
  }
});
router.patch("/update", async (req, res) => {
  const { title,id } = req.body;
  const count = await Generes.count({where:{ id }});
  if (count===1) {
    const result = await Generes.update({ title },{where: {id}});
    if (result) {
      res.json({ msg: "Genere Updated!" });
    } else {
      res.json({ err: "Genere is Not Updated!" });
    }
  }
  else{
    res.json({ err: "Genere is Not in List!" });
  }
});
router.delete("/delete/:id", async (req, res) => {

  const result=await Generes.destroy({where:{id:req.params.id}});
  if (result) {
    res.json({ msg: "Genere deleted!" });
  } else {
    res.json({ err: "Genere is Not deleted!" });
  }

})

module.exports= router;
