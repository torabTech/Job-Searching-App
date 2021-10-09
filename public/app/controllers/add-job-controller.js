angular.module('myapp').controller('AddJobCtrl',function(JobFactory,$routeParams){
    const vm = this;
    console.log('reacheds')

    vm.addJob = function(){

        const data = {
            title : vm.jobTitle,
            postDate : vm.jobPostDate,
            salary : vm.jobSalary,
            expreience: vm.jobExperience,
            description: vm.jobDescription
        }
        console.log(data);
        JobFactory.addJob(data).then(function(response){
            alert(response.message);
            window.location.href='/';
        });
    } 
});