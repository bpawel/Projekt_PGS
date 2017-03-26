angular.module('navController', [])
	.controller('nav', function($scope, $state) {
		$scope.title = 'Baza danych';

		// returns true if the current url matches the passed in url
		$scope.isUrl = function(url) {
			if (url === '#') return false;
			return ('#' + $state.$current.url.source + '/').indexOf(url + '/') === 0;
		};

		$scope.pages = [
			{
				name: 'Home',
				url: '#/'
			},
			{
				name: 'Użytkownicy',
				url: '#/users'
			}
		]
	});
