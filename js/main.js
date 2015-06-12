var portfolioApp = angular.module('portfolioApp', ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'easypiechart']);

// functions
var check404 = function ($location) {
    if($location.url() !== '/' && $location.url() !== '') {
       $location.path('/404');
    }
};



// directives
portfolioApp.directive('subPages', [function ($animate) {
    return {
        restrict: 'E',
        scope: { includeFile: "=src" },
        link: function (scope, element, attrs) {
            if (scope.includeFile !== undefined) {

            }
        },
        template: '<div ng-include="includeFile" class="subPageContentWrp" onload="activate(this)" ></div>'
    }
}]);





// Route Config
portfolioApp.config(function($routeProvider, $locationProvider){


    $routeProvider

        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'HomeController'
        })

        .when('/about', {
            templateUrl: 'templates/about.html',
            controller: 'AboutController'
        })

        .when('/portfolio', {
            templateUrl: 'templates/portfolio.html',
            controller: 'PortfolioController'
        })

        .when('/portfolio/:subPage', {
            templateUrl: 'templates/portfolio.html',
            controller: 'SubPageController'
        })

        .when('/contact', {
            templateUrl: 'templates/contact.html',
            controller: 'ContactController'
        })

        .when('/404', {
            templateUrl: 'templates/404.html',
            controller: 'ErrorController'
        })

        .otherwise({
            resolve: {
                factory: check404
            }
        });

    $locationProvider.html5Mode(true);

});






// Controllers
portfolioApp.controller('MasterController', function($rootScope, $scope) {
    $scope.isCollapsed = true;
    $scope.isCollapsed2 = true;
    $scope.animateSubPage = false;
    $rootScope.pageClass = "";
    $rootScope.headerAnimated = false;
    $rootScope.options = {
        trackColor: '#cfcfcf',
        barColor:'#16A085',
        scaleColor:false,
        lineWidth:10,
        lineCap:'butt',
        animate: {
            duration: 3000,
            enabled: true
        },
        easing: 'ease-in'
    };

    $scope.activate = function (element) {
        element.addClass('active');
    };
});

portfolioApp.controller('HeaderController', function($scope, $location) {

    $scope.isActive = function(viewlocation) {
        return viewlocation === $location.path();
    };

    if ($location.path() === '/') {
        $scope.animateImg = true;
    }

});

portfolioApp.controller('HomeController', function($rootScope) {
    if($rootScope.headerAnimated === true) {
        $rootScope.pageClass = "home";
    }
});

portfolioApp.controller('AboutController', function($rootScope, $scope) {
    $rootScope.pageClass = "about";
    $rootScope.headerAnimated = true;
    $scope.animateTitle = true;
    $scope.textAnimate = true;
});

portfolioApp.controller('PortfolioController', function($rootScope, $scope) {
    $rootScope.pageClass = "portfolio";
    $rootScope.headerAnimated = true;
    $scope.animateTitle = true;
});

portfolioApp.controller('SubPageController', function($rootScope, $scope, $routeParams) {
    $rootScope.pageClass = "portfolio";
    $rootScope.headerAnimated = true;
    //$scope.includeFile = $routeParams.subPage !== '' || $routeParams.subPage !== undefined ? 'templates/partials/' + $routeParams.subPage + '.html' : '';

    if ($routeParams.subPage !== '' || $routeParams.subPage !== undefined) {
        $scope.animateSubPage = true;
    }

    $scope.subPage = $routeParams.subPage;
});

portfolioApp.controller('ContactController', function($rootScope, $scope) {
    $rootScope.pageClass = "contact";
    $rootScope.headerAnimated = true;
    $scope.animateTitle = true;
    $scope.textAnimate = true;
});

portfolioApp.controller('ErrorController', function($rootScope) {
    $rootScope.pageClass = "error";
    $rootScope.headerAnimated = true;
});







// easy Chart controllers
portfolioApp.controller('chartHtmlCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 99;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartHamlCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 99;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartCssCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 99;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartSassCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 98;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartJqueryCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 98;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartAngularCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 85;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartBackboneCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 70;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartPhpCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 96;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartMysqlCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 80;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartMongodbCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 75;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartPhotoshopCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 90;
    $scope.options = $rootScope.options;
}]);

portfolioApp.controller('chartIllustratorCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.percent = 50;
    $scope.options = $rootScope.options;
}]);

