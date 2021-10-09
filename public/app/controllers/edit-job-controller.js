angular.module('myapp').controller('EditJobCtrl',function(JobFactory,$routeParams){
    
    const vm = this;

    vm.showJob = function(){
    
        //title, salary, location, description, experience, skills, postDate
        const id = $routeParams.id;
        JobFactory.getOneJob(id).then(function(response){
            vm.title = response.title;
            vm.salary = response.salary;
            vm.expreience = response.expreience;
            vm.description = response.description;
            vm.postDate = new Date(response.postDate)
            console.log(response)
        });
    }

   

    vm.updateJob = function(){
        const data = {
            title: vm.title, 
            salary: vm.salary, 
            postDate : vm.postDate,
            expreience: vm.expreience,
            description: vm.description
        }

        JobFactory.updateJob($routeParams.id,data).then(function(response){
            window.location.href = '/'
        });
    }


});