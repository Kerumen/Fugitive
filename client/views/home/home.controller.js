'use strict';

angular.module('fugitive')
  .controller('HomeCtrl', function ($http) {

    var vm = this;

    vm.lognup = function () {
      $http.post('/lognup')
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    vm.lognupFake = function (token) {
      window.location.replace("http://localhost:9000/auth/" + token);
    };

  });
