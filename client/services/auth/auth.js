'use strict';

angular.module('fugitive')
  .service('auth', function ($cookieStore) {
    return {
      isLogged: $cookieStore.get('token') !== null
    }
  });