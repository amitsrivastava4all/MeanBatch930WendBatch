// Entry Point of Server
//const ejs = require("ejs");
const express = require("express");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userroutes");
const adminRoute = require("./routes/adminroutes");
console.log("Express ",typeof express);
const app= express();
// Using Middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Custom Middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/',userRoute);
app.use('/admin',adminRoute);
// Using Template
app.set('views', './views');
app.set('view engine', 'ejs');
// 404 Middleware
app.use(function(req,res,next){
res.send("OOPS U TYPE SOMETHING WRONG IN URL ");
next();
});
// Middleware code ends
console.log("App is ",typeof app);

function cache(){
    // CALL DB AND STORE DATA IN ARRAY
    console.log("Cache Call...");
}

app.listen(1234,()=>{
    console.log("Server Start....");
    cache();

});

