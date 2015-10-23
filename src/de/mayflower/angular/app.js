
    /***********************************************************************************
    *   A joyride with AngularJS.
    *
    *   @type chrisApp
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

    myModule.factory(
        'Cart',
        function() {

            var items = [];
            return {
                getItems: function() {
                    return items;
                },
                addArticle: function( article ) {
                    items.push( article );
                },
                sum: function() {
                    return items.reduce(
                        function( total, article ) {
                            return total + article.price;
                        },
                        0
                    );
                }
            };
        }
    );

    myModule.controller(
        'CartArticlesCtrl',
        function( $scope, $http, Cart ) {

            $scope.cart = Cart;

            $http.get( 'res/data/cartArticles.json' ).then(
                function( articlesResponse ) {
                    $scope.cartArticles = articlesResponse.data;
                }
            );
        }
    );





