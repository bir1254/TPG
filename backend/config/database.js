const mongoose=require("mongoose");

const url="mongodb://localhost:27017/StudentDetails";
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB connected.....")
})
.catch(function(err){
    console.log(err)
})