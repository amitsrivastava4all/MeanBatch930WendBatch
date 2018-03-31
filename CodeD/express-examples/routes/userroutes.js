
// Routing
const express = require("express");

const route = express.Router();
// route.get('/login',(req,res)=>{
//     res.send("This is Login...."+req.params("userid")+" "+req.params("pwd"));
// });
route.get('/register',(req,res)=>{
    // Inline HTML
    res.send('<h1>Register....</h1>');
});
route.post("/register",(req,res)=>{
    var userid = req.body.userid;
    var pwd = req.body.pwd;
    const UserOperations = require("../db/useroperations");
const User = require("../models/User");
var userObject = new User(userid, pwd);
UserOperations.register(userObject, res);
});
route.post("/login",(req,res)=>{
var userid = req.body.userid;
var pwd = req.body.pwd;
console.log("Userid "+userid +" Password "+pwd);
const UserOperations = require("../db/useroperations");
const User = require("../models/User");
var userObject = new User(userid, pwd);
UserOperations.login(userObject, res);
/*if(userid == pwd){
   var menu = [{name:'Home',url:'/home.html'},{name:'AboutUs',url:'/aboutus.html'}];
    res.render('welcome',{"username":userid,"menu":menu});
    //res.send("Welcome User "+userid);
}
else{
    res.send("Invalid Userid or Password");
}*/
});
module.exports = route;