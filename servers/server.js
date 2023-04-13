const express = require("express");

const app = express();

const bcrypt = require("bcrypt")

const cors = require('cors');


app.use(cors());

const jwt = require("jsonwebtoken");

app.use(express.json());



const dbcon = require("./DB/dbconnect");

const User = require("./DB/Models/user")

dbcon();

app.post('/register',async (req,res)=>{
   const userexists = await User.findOne({"email":req.body.email})
   if(userexists){
    res.status(200).send("User already exists");
   }
   else{
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password,salt);
     const createuser = await User.create({
        "firstname":req.body.firstname,
        "lastname":req.body.lastname,
        "email":req.body.email,
        "password":hashedpassword
     })
    await createuser.save()
    res.status(200).json({"message":"User usercreation successfullu"});
    
   }
})

app.post('/login',async(req,res)=>{
    const userexist = await User.findOne({"email":req.body.email})
    if(userexist){
        const passwordmatch = await bcrypt.compare(req.body.password,userexist.password);
        if(passwordmatch){
            const token = await jwt.sign({"firstname":userexist.firstname,"email":userexist.email},"This is the secret key user for encryptio")
            res.json({"message":"Logged in","token":token});
        }
        else{
            res.status(200).send("Incorrect Credentials")
        }
    }
    else{
        res.status(203).send("Email doesnot exists")
    }
})

app.post("/test",async (req,res)=>{
    console.log(req.body);
})

app.listen(3002,(err)=>{
    if(!err){
        console.log("Server Running on port 3002")
    }
    else{
        console.log("Error starting the server : ")
    }
})

