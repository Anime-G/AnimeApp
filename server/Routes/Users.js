const bcrypt = require('bcrypt');
const express = require('express');
const router=express.Router();

const {Users}=require('../models');
const { sign } = require('jsonwebtoken');
const { validateToken } = require('../middleware/ValidateToken');

//Routes for User
//emailid validation
router.post("/find_emailid",async(req,res)=>{
    const count=await Users.count({where:{emailid:req.body.emailid}});
    res.json(count);
})
//get

//post
router.post("/register",async(req,res)=>{
    let {emailid,name,password}=req.body;
    const pwd=await bcrypt.hash(password,10);
    emailid=emailid.toLowerCase();
    name=name.toLowerCase();
    const result=await Users.create({password:pwd,emailid,name});
    res.json(result);
})
//login
router.post("/login",async(req,res)=>{
    let {emailid,password}=req.body;
    const user=await Users.findOne({where:{emailid}});
    if(user)
    {
        const pwd=await bcrypt.compare(password,user.password);
        if(pwd)
        {
            const user=await Users.findOne({where:{emailid},attributes:{exclude : ['password'] }});
            const {id,name,status}=user;
            const token=sign({id,name,emailid,status},"UltraEgo");
            res.json({msg:"user Logged in",token,id,name,status})
        }
        else{

            res.json({err:"Invalid Emailid or password"})
        }

    }
    else{

        res.json({err:"Invalid Emailid or password"})
    }

    // emailid=emailid.toLowerCase();
    // name=name.toLowerCase();
    // const result=await Users.create({password:pwd,emailid,name});
    // res.json(result);
})
//patch
//delete

//Authenticate user
router.get("/auth",validateToken,(req,res)=>{
    res.json(req.user);
})

module.exports=router;