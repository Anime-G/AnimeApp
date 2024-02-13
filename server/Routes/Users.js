const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { Users,Userpic } = require("../models");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/ValidateToken");
const { Op } = require("sequelize");
const { count } = require("console");

//Routes for User
//emailid validation
router.post("/find_emailid", async (req, res) => {
  const count = await Users.count({ where: { emailid: req.body.emailid } });
  res.json(count);
});
//get

//post
router.post("/register", async (req, res) => {
  let { emailid, name, password } = req.body;
  const pwd = await bcrypt.hash(password, 10);
  emailid = emailid.toLowerCase();
  name = name.toLowerCase();
  const result = await Users.create({ password: pwd, emailid, name });
  res.json(result);
});
router.patch("/changepass", async (req, res) => {
  let { password, npassword, id } = req.body;
  const encryPassword = await Users.findOne({
    where: { id },
    attributes: ["password"],
  });

  const match = await bcrypt.compare(password, encryPassword.password);
  if (match) {
    const pwd = await bcrypt.hash(npassword, 10);
    const result = await Users.update({ password: pwd }, { where: { id } });
    res.json({ msg: "password have been changed SuccessFully Login Again!" });
  } else {
    res.json({ err: "Old Password is Wrong!" });
  }
});
router.patch("/updatepic",async(req,res)=>{
  const {id,UserpicId}=req.body;
  const result=await Users.update({UserpicId},{where:{id}})
  res.json({msg:"Profile pic Updated SuccessFully"})
});
router.patch("/removeprofile",async(req,res)=>{
  const {id}=req.body;
  const result=await Users.update({UserpicId:null},{where:{id}})
  res.json({msg:"Profile pic Removed!"})

});
router.patch("/update", async (req, res) => {
  let { name, emailid, id } = req.body;
  const checkid = await Users.count({
    where: { emailid, id: { [Op.not]: id } },
  });
  if (checkid > 0) {
    res.json({ err: "Email id Is Already in Use!" });
  } else {
    const result = await Users.update({ name, emailid }, { where: { id } });
    if (result) {
      res.json({ msg: "Data have been changed SuccessFully Login Again!" });
    } else {
      res.json({ err: "Data is Not Updated!" });
    }
  }
});
//login
router.post("/login", async (req, res) => {
  let { emailid, password } = req.body;
  const user = await Users.findOne({ where: { emailid } });
  if (user) {
    const pwd = await bcrypt.compare(password, user.password);
    if (pwd) {
      const user = await Users.findOne({
        where: { emailid },
        attributes: { exclude: ["password"] },
      });
      
      const { id, name, status,UserpicId } = user;
      let Userpicurl={pic:"https://i.pinimg.com/564x/b7/21/57/b72157473ae510c74e7a96ccb8bd0e38.jpg"};
      if(UserpicId!==null)
      {
        const data=await Userpic.findOne({where:{id:UserpicId}});
        //console.log({pic:data.pic});
        Userpicurl={pic:data.pic};
      }
      const token = sign({ id, name,Userpicurl, emailid, status }, "UltraEgo");
      res.json({ msg: "user Logged in", token, Userpicurl,emailid, id, name, status });
    } else {
      res.json({ err: "Invalid Emailid or password" });
    }
  } else {
    res.json({ err: "Invalid Emailid or password" });
  }

  // emailid=emailid.toLowerCase();
  // name=name.toLowerCase();
  // const result=await Users.create({password:pwd,emailid,name});
  // res.json(result);
});
//find
router.get("/find/:id", async (req, res) => {
  const data = await Users.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["password", "status"] },
  });
  res.json(data);
});
//patch

//delete

//Authenticate user
router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
