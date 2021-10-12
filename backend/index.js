const express=require("express");
const app=express();
const mongoose=require("mongoose");
//required function for accept data from html body
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//connet Database
require("./config/database");

//fetch studentSchema
const studentdata=require("./models/studentdata");
const demo=require("./models/demo");



//Create new student data with the help of schemamodels
app.post("/register",function(req,res){

    const newData=new studentdata({
    
        _id:new mongoose.Types.ObjectId,
        name:req.body.name,
        gender:req.body.gender,
        dob:req.body.dob,
        department:req.body.department,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword
    })
    newData.save().then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        console.warn(err)
    });
    
})



//student login
app.post("/stlogin",async(req,res)=>{
   try{
       const email=req.body.email;
       const password=req.body.password;
       const st= await studentdata.findOne({email:email});
       if(st.password === password){
           res.send(st);
       }
       else{
           res.send("Invalid user Detail");
       }
   } 
   catch(err){
       res.status(400).send("Invalid Email");
   }

})



// //Find data from data base
app.get('/studentdata',function(req,res){
   // studentdata.findOne({email:"guptabirbalkumar@gmail.com"})//.select('name')
   studentdata.find() 
   .then((data)=>{
        res.json(data);
    })
})

// //DeleteData from database collection
// app.get("/deletestdata",function(req,res){

//     studentdata.deleteOne({email:"guptabirbalkumar@gmail.com"})
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch(err=>{
//         console.log(err);
//     })

// })

//Update Student Data
app.get("/updatestdata",function(req,res){

    studentdata.updateOne({email:"testudal@gmail.com"},
    {$set : {name:"UDAL KUMAR"}}
    ).then((result)=>{
    res.send(result);
    })
    .catch((err)=>{
        console.log(err);
    })

})

app.listen(3000);