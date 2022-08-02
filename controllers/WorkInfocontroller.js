const mongoose=require('mongoose');
const WorkInfo = require('../models/WorkInfoModels')
const express =require('express');
const app =express();



//Create Data
const WorkInfoCreate=("/create", (req, res,next) => {
  const user = new WorkInfo({
    WorkInfo:req.body.WorkInfo
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
const WorkInfoUpdate=async (req, res) => {
  const id = req.body.id;
  let user =  await WorkInfo.findOne({_id : id})
  let index= req.body.index; 
  user.WorkInfo[index]["Cname"] = req.body.WorkInfo.Cname || user["WorkInfo"][index]["Cname"];
  user.WorkInfo[index]["Position"] = req.body.WorkInfo.Positon || user["WorkInfo"][index]["Position"];
  user.WorkInfo[index]["Year"] = req.body.WorkInfo.Year || user["WorkInfo"][index]["Year"];
  user.WorkInfo[index]["Address"] = req.body.WorkInfo.Address || user["WorkInfo"][index]["Address"];
   user.save();
  res.json(user)
  };



//Delete Data
     const WorkInfoDelete=async(req,res)=>{
        const id = req.body.id;
        let user =  await WorkInfo.findOne({_id : id})
        let i = req.body.index; 
        user.WorkInfo[i]["Cname"] = "Not Set";
        user.WorkInfo[i]["Position"] = "Not Set";
        user.WorkInfo[i]["Year"] = "Not Set";
        user.WorkInfo[i]["Address"] = "Not Set";
        await user.save();
       res.json(user)
      // console.log(user)
      //  res.send(user.WorkInfo[i]["Cname"])
    };


 

module.exports ={WorkInfoCreate,WorkInfoUpdate,WorkInfoDelete}