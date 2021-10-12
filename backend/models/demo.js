const mongoose=require("mongoose");
let uesrSchema=mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},


})
module.exports=mongoose.model('demo',uesrSchema);//(table_name,Schema_name)