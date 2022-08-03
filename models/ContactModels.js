const mongoose= require('mongoose')

const Contactschema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    phoneNo: {
        type: Number,
        unique: true,
        required: true,
    }, 
    homeAddress: {
         type: String,
        required: true
    }, 
    officeAddress: {
        type: String,
        requires: true
    }
    });

module.exports= mongoose.model("contactDetails", Contactschema )