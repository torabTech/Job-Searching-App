angular.module('myapp').controller('ListJobCtrl',function(JobFactory,$routeParams){
    const vm = this;

    JobFactory.getAllJobs().then(function(response){
        vm.jobs = response;
    });


});