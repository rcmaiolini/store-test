function BeerdetailsController(ngCart, BeersService, $stateParams) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'Beer Details';
  vm.beerId = $stateParams.id;
  var id = vm.beerId;
  vm.beerDetails = [];
  vm.price = localStorage.getItem('price');
  vm.brewery = localStorage.getItem('brewery');

  BeersService.beer().get({id: id}, (data) => {
    vm.beerDetails = data.data;
    console.log(vm.beerDetails)
  });
}

export default {
  name: 'BeerdetailsController',
  fn: BeerdetailsController
};
