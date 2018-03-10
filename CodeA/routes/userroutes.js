
// Routing
const express = require("express");
const route = express.Router();
route.get('/login',(req,res)=>{
    res.send("This is Login...."+req.params("userid")+" "+req.params("pwd"));
});
route.get('/register',(req,res)=>{
    res.send('Register....');
});
route.post("/login",(req,res)=>{
var userid = req.body.userid;
var pwd = req.body.pwd;
if(userid == pwd){
    res.send("Welcome User "+userid);
}
else{
    res.send("Invalid Userid or Password");
}
});
module.exports = route;