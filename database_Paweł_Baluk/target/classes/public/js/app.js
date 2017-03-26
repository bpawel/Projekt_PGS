(function() {
	var app = angular.module('app', ['ui.router', 'navController', 'ngAnimate', 'ui.bootstrap', 'ngResource', 'app.controllers', 'app.services'])

	app.config(function($stateProvider){

		$stateProvider
			// you can set this to no template if you just want to use the html in the page
			.state('home', {
				url: "/",
				templateUrl:'views/home.html',
			})
			.state('users',{
	        url:'/users',
	        templateUrl: 'views/users.html',
	        controller:'UserListController'
	    }).state('viewUser',{
	       url:'/users/:id/view',
	       templateUrl: 'views/view.html',
	       controller:'UserViewController'
	    }).state('newUser',{
	        url:'/users/new',
	        templateUrl: 'views/add.html',
	        controller:'UserCreateController'
	    }).state('editUser',{
	        url:'/users/:id/edit',
	        templateUrl: 'views/edit.html',
	        controller:'UserEditController'
	    })
	})

}());
