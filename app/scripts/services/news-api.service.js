(function () {
  'use strict';

  angular
    .module('interview1App')
    .service('NewsApi', NewsApi);

  NewsApi.inject = ['http'];

  const API_KEY = "845f3235b9ac48df980627e7353b79f6"

  function NewsApi(http) {
    var service = {
      categories,
      articles
    }

    return service;

    function categories() {
      let params = {
      };
      return http.get(params, 'https://newsapi.org/v1/sources?language=en')
    }

    function articles(categoryId) {
      let params = {
        source: categoryId,
        apiKey: API_KEY
      };
      return http.get(params, 'https://newsapi.org/v1/articles')
    }
  }
})();
