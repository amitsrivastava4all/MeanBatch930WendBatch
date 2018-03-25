const UserCollection = require("./userschema");
const UserOperations ={
register(userObject,response){
UserCollection.create(userObject,function(err){
if(err){
    response.send("Can't Register Some Error Occured ",err);
}
else{
    response.send("Register SuccessFully....");
}
});
},
login(userObject,response){
    UserCollection.find({userid:userObject.userid,password:userObject.password},function(err,docs){
        if(err){
            response.send("Error Occured During Login ",err);
        }
        else{
            if(docs && docs.length>0){
                response.send("Welcome "+userObject.userid);
            }
            else{
                response.send("Invalid Userid or Password");
            }
        }
    })
}
}
module.exports = UserOperations;

