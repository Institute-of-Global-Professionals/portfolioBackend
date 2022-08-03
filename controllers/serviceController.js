const mongoose=require('mongoose');
const Services = require('../models/ServiceModels')
const express =require('express');
const app =express();

//Create Data
const serviceCreateController=("/create", (req, res,next) => {
    const user = new Services({
        services:req.body.services
    });
     user.save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: "Created services successfully",
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
  const servicetUpdateController = async (req, res) => {
    const id = req.body.id;
    let user =  await Services.findOne({_id : id})
    let index= req.body.index; 
    user.services[index]["serviceOne"] = req.body.services.Name || user["services"][index]["Name "];
    user.services[index]["serviceTwo"] = req.body.services.serviceTwo || user["services"][index]["serviceTwo"];
    user.services[index]["serviceThree"] = req.body.services.serviceThree || user["services"][index]["serviceThree"];
     user.save();
    res.json(user)
    };
  
  
  
  //Delete Data
       const serviceDeleteController = async(req,res)=>{
          const id = req.body.id;
          let user =  await Services.findOne({_id : id})
          let i = req.body.index; 
          user.Services[i]["Cname"] = "Not Set";
          user.Services[i]["Position"] = "Not Set";
          user.Services[i]["Year"] = "Not Set";
          user.Services[i]["Address"] = "Not Set";
          await user.save();
         res.json(user)
        // console.log(user)
        //  res.send(user.Services[i]["Cname"])
      };
  
  

module.exports ={serviceCreateController,servicetUpdateController,serviceDeleteController}