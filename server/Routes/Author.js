const express = require("express");
const { Author } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Author.findAll({order:['name']});
  
  res.json(result);
})
router.get('/find/:id',async(req,res)=>{
  const result=await Author.findOne({where:{id:req.params.id}});
  
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { name } = req.body;
  const count = await Author.count({where:{ name }});
  if (count===0) {
    const result = await Author.create({ name });
    if (result) {
      res.status(201).json({status:201, msg: "Author Added!" });
    } else {
      res.json({ err: "Author is Not Added!" });
    }
  }
  else{
    res.json({ err: "Author is Already in List!" });
  }
});

router.patch("/update", async (req, res) => {
  const { name,id } = req.body;
  const count = await Author.count({where:{ id }});
  if (count===1) {
    const result = await Author.update({ name },{where: {id}});
    if (result) {
      res.json({ msg: "Author Updated!" });
    } else {
      res.json({ err: "Author is Not Updated!" });
    }
  }
  else{
    res.json({ err: "Author is Not in List!" });
  }
});
router.delete("/delete/:id", async (req, res) => {

  const result=await Author.destroy({where:{id:req.params.id}});
  if (result) {
    res.json({ msg: "Author deleted!" });
  } else {
    res.json({ err: "Author is Not deleted!" });
  }

})

module.exports= router;
