angular.module('myapp',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/',{
            templateUrl : 'app/views/list-jobs.html',
            controller : 'ListJobCtrl',
            controllerAs : 'vm'
        }).when('/jobs/:id',{
            templateUrl : 'app/views/single-job.html',
            controller : 'SingleJobCtrl',
            controllerAs : 'vm'
        }).when('/jobs1/create',{
            templateUrl : 'app/views/add-job.html',
            controller: 'AddJobCtrl',
            controllerAs : 'vm'
        }).when('/jobs2/:id/edit',{
            templateUrl : 'app/views/edit-job.html',
            controller: 'EditJobCtrl',
            controllerAs : 'vm'
        }).otherwise({
			redirectTo: '/'
		});

});