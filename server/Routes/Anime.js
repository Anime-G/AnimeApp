const express = require("express");
const { Anime,AuthorAnime,StudioAnime,GeneresAnime } = require("../models");
const router = express.Router();
router.post("/add",async(req,res)=>{
    //Input the Data AuthorId,GenereId,RateId,TypeId,status,name,pic,description
    //first the Anime Add 
    //status,name,pic,description,RateId,TypeId
    const {AuthorId,GenereId,StudioId,RateId,TypeId,status,name,pic,description}=req.body;
    const count=await Anime.count({where:{title:name}});
    console.log(StudioId);
    if(count===0)
    {
        //insert the Data
        const result=await Anime.create({RateId,TypeId,status,title:name,pic,description}).then((result)=>{
            const AnimeId=result.id;
            for(let i=0;i<GenereId.length;i++)
            {
                GeneresAnime.create({AnimeId,GenereId:GenereId[i]});
            }
            for(let i=0;i<AuthorId.length;i++)
            {
                AuthorAnime.create({AnimeId,AuthorId:AuthorId[i]});
            }
            for(let i=0;i<StudioId.length;i++)
            {
                StudioAnime.create({AnimeId,StudioId:StudioId[i]});
            }
            return result
        })
        if(result)
        {
            res.json({msg:"anime Added"})
        }
        else{
            res.json({err:"anime is Not Added!"})

        }
    }
    else{
        res.json({err:"Anime Is Repeated!"})
    }

});

module.exports=router;