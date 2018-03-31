app.controller("myctrl",function($scope,myfactory){
    $scope.doLogin=function(){
        var userObject = new User($scope.userid, $scope.pwd);
        var promise = myfactory.doLogin(userObject);
        promise.then(function(data){
            console.log("Back to Promise ... ",data);
            $scope.message = data.data.message;

        },function(err){
            $scope.error  = err;
        });
    }
    });