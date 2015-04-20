restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [
    { name: "Dr Taco", cuisine: "Mexican", bar: true },
    { name: "Jack in the Crack", cuisine: "Trash", bar: false },
    { name: "Bridge Brews", cuisine: "Pub", bar: true },
    { name: "McCoodle's", cuisine: "Noodles", bar: false },
    { name: "Matadoir", cuisine: "Mexican", bar: true }
  ];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, cuisine: $scope.cuisine, bar: $scope.bar });
    $scope.restaurantName = null;
    $scope.cuisine = null;
    $scope.bar = false;
  };
  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  }
});
