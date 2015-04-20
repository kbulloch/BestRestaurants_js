restaurantList.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [
    { name: "Dr Taco", cuisine: "Mexican", bar: true },
    { name: "Jack in the Crack", cuisine: "Trash", bar: false },
    { name: "Bridge Brews", cuisine: "Pub", bar: true },
    { name: "McCoodle's", cuisine: "Noodles", bar: false },
    { name: "Matadoir", cuisine: "Mexican", bar: true }
  ];
})
