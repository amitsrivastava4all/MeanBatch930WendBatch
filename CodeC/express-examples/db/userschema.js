const mongoose = require("./connection");
var Schema = mongoose.Schema;
var UserSchema = new Schema({userid:String,password:String,name:String});
var UserCollection = mongoose.model("users",UserSchema);
module.exports = UserCollection;
