// Entry Point of Server

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
app.use('/',userRoute);
app.use('/admin',adminRoute);
// Middleware code ends
console.log("App is ",typeof app);



app.listen(1234,()=>console.log("Server Start...."));

