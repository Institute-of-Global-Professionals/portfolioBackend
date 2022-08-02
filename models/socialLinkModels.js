const mongoose=require('mongoose');
//......
    const linkSchema = new mongoose.Schema({
        Facebook: {
                type: String,
                required: false
              },
      
        Instagram: {
                type: String,
                required: false
                },
        Linkedin: {
               type: String,
               required: false
               }
         });

    const linksSchema = new mongoose.Schema ({
        links: linkSchema
         })



module.exports= mongoose.model("Link", linksSchema )