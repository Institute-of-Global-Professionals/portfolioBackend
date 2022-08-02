const mongoose=require('mongoose');
const SocialLink = require('../models/socialLinkModels')
const express =require('express');
const app =express();



//Create social Links
const linkCreateController=("/create", (req, res,next) => {
  const user = new SocialLink({
    links:req.body.links
  });
   user.save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Created user successfully",
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});


//Update data by using Index
const linkUpdateController=async (req, res) => {
  const id = req.body.id;
  let user =  await SocialLink.findOne({_id : id})
   let links= req.body.links; 
  user.links["Facebook"] = req.body.links.Facebook || user["links"]["Facebook"];
  user.links["Instagram"] = req.body.links.Instagram || user["links"]["Instagram"];
  user.links["Linkedin"] = req.body.links.Linkedin || user["links"]["Linkedin"];
   user.save();
  res.json(user)
  };



//Delete Data
     const linkDeleteController=async(req,res)=>{
        const id = req.body.id;
        let user =  await SocialLink.findOne({_id : id})
        user.links["Facebook"] = "Not Set";
        user.links["Instagram"] = "Not Set";
        user.links["Linkedin"] = "Not Set";
        await user.save();
       res.json(user);
    };


 

module.exports ={linkCreateController,linkUpdateController,linkDeleteController}