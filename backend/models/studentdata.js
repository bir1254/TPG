const mongoose=require("mongoose");
let uesrSchema=mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    name:{type:String,required:true},
    gender:{type:String,required:true},
    dob:{type:Date, required:true},
    department:{type:String,required:true},
    email:{type:String,required:true, unique:true},
    phone:{ type:Number, required:true, unique:true},
    password:{ type:String, required:true},
    confirmpassword:{type:String, required:true}

})
module.exports=mongoose.model('studentdata',uesrSchema);//(table_name,Schema_name)