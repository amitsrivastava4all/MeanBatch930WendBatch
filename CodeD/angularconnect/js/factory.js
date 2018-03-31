app.factory("myfactory",function($http,$q,URL){
    const object = {    
        doLogin(userObject){
            var defer = $q.defer();
            $http.post(URL,userObject).then(function(data){
                console.log("Success ",data);
                    defer.resolve(data);
            },function(error){
                console.log("Error ",error);
                defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})