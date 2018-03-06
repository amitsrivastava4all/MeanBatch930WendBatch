const http = require("http");

// http.createServer(handleReqRes);
// function handleReqRes(req,res){

// }
http.createServer((req,res)=>{
    
    var url = req.url;
    const urlObj = require("url");
   
    const urlDetails = urlObj.parse(url,true);
    //console.log("PATH IS ",urlDetails);
    console.log("Url is ",url);
    if(url=='/hello'){
        res.write("Hello User");
        res.end();
    }
    else
    if(url=='/welcome'){
        res.write("Welcome User");
        res.end();
    }
    
    else
    if(url=='/userjson'){
        var userObject = [{id:1001,name:'Ram',salary:49999},{id:1002,name:'Shyam',salary:39999},{id:1003,name:'Mike',salary:29999}];
    res.end(JSON.stringify(userObject));
    }
    else
    if(url=='/login'){
        var postData = "";
        req.on("data",(chunk)=>{
            postData+=chunk;
        });
        req.on("end",()=>{
            console.log("DATA Collected ",postData);
            const queryString = require("querystring");
            var queryStringObject  = queryString.parse(postData);
            console.log('Query String is ',queryStringObject);
            var userid = queryStringObject.userid;
            var password = queryStringObject.password;
            if(userid==password){
                res.write("Welcome "+userid);
            }
            else{
                res.write("Invalid Userid or Password");
            }
            res.end();
        });
        
    //if(urlDetails.pathname=='/login'){
       // var userid = urlDetails.query.userid;
        //var pwd = urlDetails.query.password;
        console.log("Request is ",req);

        // if(userid==pwd){
        //     res.write("Welcome "+userid);
        // }
        // else{
        //     res.write("Invalid Userid or Password");
        // }
        //res.write("Login with Post");
        //console.log("Request Rec ",urlDetails);
       
        // console.log("Request Rec ",req);
        //res.write("Login....");
        //res.end();
    }
    else
    if(url=='/index.html'){
        res.writeHead(200,{'content-type':'text/html'});
        const path = require("path");
        console.log("Current Dir ",__dirname);
        var fullPath = path.join(__dirname,"/public"+url);
        const fs = require("fs");
        var readStream = fs.createReadStream(fullPath);
        readStream.pipe(res);
    }
    // else{
    //     res.write("Hi User");
    //     res.end();
    // }
}).listen(process.env.PORT || 5000,()=>{
    console.log("Server Start...");
});
// const server = http.createServer(takeRequestGiveResponse);
// function takeRequestGiveResponse(request, response){
// response.write("Hello User");
// response.end();
// }
// server.listen(5000);


