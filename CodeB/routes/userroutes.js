
// Routing
const express = require("express");

const route = express.Router();
route.get('/login',(req,res)=>{
    res.send("This is Login...."+req.params("userid")+" "+req.params("pwd"));
});
route.get('/register',(req,res)=>{
    // Inline HTML
    res.send('<h1>Register....</h1>');
});
route.post("/login",(req,res)=>{
var userid = req.body.userid;
var pwd = req.body.pwd;
if(userid == pwd){
   var menu = [{name:'Home',url:'/home.html'},{name:'AboutUs',url:'/aboutus.html'}];
    res.render('welcome',{"username":userid,"menu":menu});
    //res.send("Welcome User "+userid);
}
else{
    res.send("Invalid Userid or Password");
}
});
module.exports = route;