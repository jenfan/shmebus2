angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "templates/index.html"
    })
    .state('levels', {
      url: "/levels",
      templateUrl: "templates/levels.html",
      controller: function($scope) {
        $scope.levels = levels;
      },
      controllerAs: "tab"
    })
    .state('levels_show', {
      url: "/levels_show/:levelId",
      templateUrl: "templates/levels_show.html",
      controller: function ($scope, $stateParams) {
        $scope.level = levels[$stateParams.levelId-1];
        $scope.rebuses = $scope.level.rebuses;
      }
    })
    .state('rebus', {
      url: "/rebus/:rebusId",
      templateUrl: "templates/rebus.html",
      controller: function ($scope, $stateParams) {
        $scope.rebus = rebuses[$stateParams.rebusId-1];
        // $scope.review = {};

        $scope.proverka = function(otvet){
          if (otvet == $scope.rebus.otvet)
          {
            alert("Ура! Вы выиграли автомобиль!");
          }
        };
      }
    });


   $urlRouterProvider.otherwise("/");

});







var levels = [
  {
    "id": 1,
    "title": "01",
    "name": "First level",
    "description": "This is awesome.",
    "rebuses" : [
    { "id": 1, "thumb": "/images/1.jpg" },
    { "id": 2, "thumb": "/images/1.jpg" },
    { "id": 3, "thumb": "/images/1.jpg" },
    { "id": 4, "thumb": "/images/1.jpg" },
    { "id": 5, "thumb": "/images/1.jpg" }
    ]
  },
  {
    "id": 2,
    "title": "02",
    "name": "Second level",
    "description": "This is also okay.",
    "rebuses": [
    { "id": 1, "thumb": "/images/1.jpg" },
    { "id": 2, "thumb": "/images/1.jpg" },
    { "id": 3, "thumb": "/images/1.jpg" },
    { "id": 4, "thumb": "/images/1.jpg" },
    { "id": 5, "thumb": "/images/1.jpg" },
    { "id": 6, "thumb": "/images/1.jpg" },
    { "id": 8, "thumb": "/images/1.jpg" }
    ]
  },
  {
    "id": 3,
    "title": "03",
    "name": "Second level",
    "description": "This is also okay.",
    "rebuses": [
    { "id": 1, "thumb": "/images/1.jpg" },
    { "id": 2, "thumb": "/images/1.jpg" },
    { "id": 3, "thumb": "/images/1.jpg" },
    { "id": 4, "thumb": "/images/1.jpg" },
    { "id": 5, "thumb": "/images/1.jpg" },
    { "id": 6, "thumb": "/images/1.jpg" },
    { "id": 8, "thumb": "/images/1.jpg" }
    ]
  }
];

var rebuses = [
  {
    "id": 1,
    "name": "First rebus",
    "description": "This is awesome.",
    "url" : "/images/1.JPG",
    "otvet" : "123"
  },
  {
    "id": 2,
    "name": "Second rebus",
    "description": "This is also okay.",
    "url" : "/images/1.JPG"
  },
  {
    "id": 3,
    "name": "3 rebus",
    "description": "This is also okay."
  },
  {
    "id": 4,
    "name": "4 rebus",
    "description": "This is also okay."
  },
  {
    "id": 5,
    "name": "5 rebus",
    "description": "This is also okay."
  },
  {
    "id": 8,
    "name": "8 rebus",
    "description": "This is also okay."
  }
];