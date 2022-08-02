const mongoose = require('mongoose')


const instituteInfoSchema = new mongoose.Schema({
    institutionName: {
        type: String,
        required: false
    },
    passingDegreeName: {
        type: String,
        required: false
    },
    passingYear: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    }

})

const userSchema = new mongoose.Schema({
    educationalQualifications: [instituteInfoSchema]

});


module.exports = mongoose.model('Education', userSchema)