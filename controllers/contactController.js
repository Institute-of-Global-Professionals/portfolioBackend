const mongoose=require('mongoose');
const Contact = require('../models/ContactModels')
const express =require('express');
const app =express();



//Create Contact details of User .../..
const contactCreateController=("/create", (req, res,next) => {
  const user = new  Contact({
    contact :req.body.contact
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
const contactUpdateController=async (req, res) => {
  const id = req.body.id;
  let user =  await Contact.findOne({_id : id})
   let contact= req.body.contact; 
  user.contact["email"] = req.body.contact.email || user["contact"]["email"];
  user.contact["phoneNo"] = req.body.contact.phoneNo || user["contact"]["phoneNo"];
  user.contact["homeAddress"] = req.body.contact.homeAddress || user["contact"]["homeAddress"];
  user.contact["officeAddress"] = req.body.contact.officeAddress || user["contact"]["officeAddress"];
   user.save();
  res.json(user)
  };



//Delete Data
     const contactDeleteController=async(req,res)=>{
        const id = req.body.id;
        let user =  await Contact.findOne({_id : id})
        user.contact["email"] = "Not Set";
        user.contact["phoneNo"] = "Not Set";
        user.contact["homeAddress"] = "Not Set";
        user.contact["officeAddress"] = "Not Set";
        await user.save();
       res.json(user);
    };

module.exports ={contactCreateController,contactUpdateController,contactDeleteController}