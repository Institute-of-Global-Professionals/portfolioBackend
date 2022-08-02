const mongoose=require('mongoose');


        const Arrayschema = new mongoose.Schema({
            Cname: {
                type: String,
                required: false
            },
            Position: {
                type: String,
                required: false
            }, 
            Year: { type: String,
                required: false
            }, 
            Address: {
                type: String,
                required: false
            }
            });

        const WorkSchema = new mongoose.Schema ({
            WorkInfo: [Arrayschema]
        })

module.exports= mongoose.model("Arr", WorkSchema )