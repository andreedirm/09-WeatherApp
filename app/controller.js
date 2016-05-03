(function() {

    'use strict';

    angular
        .module('app')
        .controller('WeatherCtrl', WeatherCtrl);

    WeatherCtrl.$inject = ['WeatherFactory'];

    /* @ngInject */
    function WeatherCtrl(WeatherFactory) {
        var vm = this;
        vm.title = 'WeatherCtrl';

        activate();

        function activate() {
        	WeatherFactory.getWeather().then(
        		function(response) {
        			vm.WeatherResponse = response.data;
        		},
        		function(error) {
        			$log.error('failed to get weatherAPI', error)
        		});
        }
    }

    // $scope.citySearch = function() {}

})();