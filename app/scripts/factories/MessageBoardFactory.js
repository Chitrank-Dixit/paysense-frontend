'use strict';

app
  .factory('MessageBoard', function ($http, $q) {

    return {
      get_messages: function (url) {
        return $http({
          method  : 'GET',
          url     : url,
          headers : { "Content-Type": "application/json"  }
        });
      },

      delete_message: function(url, data) {
        return $http({
          method  : 'DELETE',
          url     : url,
          data    : data,
          headers : { "Content-Type": "application/json",  }
        });
      },

      delete_all_messages: function(url, data) {
        return $http({
          method  : 'DELETE',
          url     : url,
          data    : data,
          headers : { "Content-Type": "application/json",  }
        });
      },

      create_message: function(url, data) {
        return $http({
          method  : 'POST',
          url     : url,
          data    : data,
          headers : { "Content-Type": "application/json"  }
        });
      },

      get_user_ip: function(url) {
        return $http({
          method  : 'GET',
          url     : url,
          headers : { "Content-Type": "application/json"  }
        });
      }

    }
  });
