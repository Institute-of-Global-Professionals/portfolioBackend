const mongoose=require('mongoose');

        const Arrayschema = new mongoose.Schema({
            Name: {
                type: String,
                required: true
            },
            Description: {
                type: String,
                required: true
            }
            });

            const servicesSchema= new mongoose.Schema({
           serviceOne: Arrayschema,
           serviceTwo: Arrayschema,
           serviceThree: Arrayschema
            })

        const serviceSchema = new mongoose.Schema ({
            services: servicesSchema
        })



module.exports= mongoose.model("Service", serviceSchema )