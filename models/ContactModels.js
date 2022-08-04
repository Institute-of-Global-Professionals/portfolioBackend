const mongoose= require('mongoose')

const Contactschema = new mongoose.Schema({
    email: {
        type: String,
        // unique: true,
        // lowercase: true,
        required: false
    },
    phoneNo: {
        type: String,
        // unique: true,
        required: false,
    }, 
    homeAddress: {
         type: String,
        required: false
    }, 
    officeAddress: {
        type: String,
        requires: false
    }
    });
    const ContactListschema = new mongoose.Schema ({
        contact: Contactschema
         })
module.exports= mongoose.model("contactDetails", ContactListschema )