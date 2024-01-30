const express = require("express");
const { Author } = require("../models");
const router = express.Router();

router.get('/',async(req,res)=>{
  const result=await Author.findAll({order:['name']});
  
  res.json(result);
})

router.post("/add", async (req, res) => {
  const { name } = req.body;
  console.log(name);
  const count = await Author.count({where:{ name }});
  if (count===0) {
    const result = await Author.create({ name });
    if (result) {
      res.json({ msg: "Author Added!" });
    } else {
      res.json({ err: "Author is Not Added!" });
    }
  }
  else{
    res.json({ err: "Author is Already in List!" });
  }
});

module.exports= router;
