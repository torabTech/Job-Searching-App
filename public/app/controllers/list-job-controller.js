angular.module('myapp').controller('ListJobCtrl',function(JobFactory,$route){
    const vm = this;

    JobFactory.getAllJobs().then(function(response){
        vm.jobs = response;
    });

    vm.deleteJob = function(id){
        JobFactory.deleteJob(id).then(function(response){
        $route.reload();
    });
    }
});