angular.module('myapp').controller('SingleJobCtrl',function(JobFactory,$routeParams){
    const vm = this;
    const id = $routeParams.id;

    JobFactory.getOneJob(id).then(function(response){
        vm.job = response;
    });
})