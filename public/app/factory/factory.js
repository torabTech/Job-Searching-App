angular.module('myapp')
    .factory('JobFactory',function($http){

    function getAll(){
        return $http.get('/api/jobs').then(succeeded).catch(failed);
    }

    function getOne(id){
        return $http.get('/api/jobs/'+id).then(succeeded).catch(failed);
    }

    function addOne(data){
        return $http.post('/api/jobs',data).then(succeeded).catch(failed);
    }

    function deleteOne(id){
        return $http.delete('/api/jobs/'+id).then(succeeded).catch(failed);
    }

    function updateOne(id,data){
        return $http.put('/api/jobs/'+id,data).then(succeeded).catch(failed);
    }

    //implementation details 
    succeeded = function(response){
        return response.data;
    }

    failed = function(error){
        return error;
    }

    return {
        getAllJobs : getAll,
        getOneJob : getOne,
        addJob : addOne,
        deleteJob: deleteOne,
        updateJob: updateOne
    }


});