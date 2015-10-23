
    /***********************************************************************************
    *   A joyride with AngularJS.
    *
    *   @type {module}
    ***********************************************************************************/
    var myModule = angular.module( 'chrisApp', [] );

    console.log( "myModule is: [" + myModule + "]" );

    myModule.controller(
        'ArticlesCtrl',
        function( $scope ) {
            $scope.articles = [
                {   id: 7,  name: "Pizza Vegetaria", price: 5    },
                {   id: 13, name: "Pizza Salami",    price: 5.5  },
                {   id: 19, name: "Pizza Thunfisch", price: 6    }
            ];
        }
    );

    myModule.controller(
        'FlyerArticlesCtrl',
        function( $scope, $http ) {

            $http.get( 'res/data/articles.json' ).then(
                function( articlesResponse ) {
                    $scope.flyerArticles = articlesResponse.data;
                }
            );



        }
    );



