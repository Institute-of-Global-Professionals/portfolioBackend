const express = require('express')
const mongoose = require('mongoose')
const multer = require("multer")
const Cryptr = require('cryptr')
const User = require('../models/userSchema');
const userSchema = require('../models/userSchema');


const cryptr = new Cryptr('hello');
const postView = async (req, res) => {

    const user = new User({
        educationalQualifications: req.body.educationalQualifications,

    });
    try {
        const saveUser = await user.save();
        console.log(saveUser);
        if (saveUser) {
            res.send(cryptr.encrypt(saveUser._id))
        }
    } catch (err) {
        res.status(400).send(err);
    }
}


const putView = async (req, res) => {
    const eid = req.body.eid
    const index = req.body.index

    const id = cryptr.decrypt(eid)
    const user = await User.findOne({ _id: id })

    //console.log(user)

    const arrayLength = user.educationalQualifications.length
    //console.log(length) console.log(user.educationalQualifications[index].institutionName)
    if (index < arrayLength) {
        user.educationalQualifications[index].institutionName = req.body.educationalQualifications.institutionName || user.educationalQualifications[index].institutionName
        user.educationalQualifications[index].passingDegreeName = req.body.educationalQualifications.passingDegreeName || user.educationalQualifications[index].passingDegreeName
        user.educationalQualifications[index].passingYear = req.body.educationalQualifications.passingYear || user.educationalQualifications[index].passingYear
        user.educationalQualifications[index].address = req.body.educationalQualifications.address || user.educationalQualifications[index].address
        console.log(user.educationalQualifications[index].address)
    }
    const updateUser = await user.save();
    console.log(updateUser);
    if (updateUser) {
        res.send(cryptr.encrypt(updateUser._id))
    }

}


const deleteView = async (req, res) => {

    const index = req.body.index


    // const id = req.body.id
    const eid = req.body.eid
    const id = cryptr.decrypt(eid)

    if (!await User.findById({ _id: id })) {
        res.send("Not found")
    } else {

        const user = await User.findOne({ _id: id });
        //console.log(user)
        if (index) {
            user.educationalQualifications[index].institutionName = "Not set"
            user.educationalQualifications[index].passingDegreeName = "Not set"
            user.educationalQualifications[index].passingYear = "Not set"
            user.educationalQualifications[index].address = "Not set"
            // await User.findByIdAndDelete({ _id: id });
            // console.log("Deleted")
        }
        await user.save()
        res.send(user._id)
    }
}


module.exports = { postView, putView, deleteView }
