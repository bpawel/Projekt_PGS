angular.module('app.services', []).factory('User', function($resource) {
  return $resource('/app/part1/users/:id', { id: '@id' }, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
