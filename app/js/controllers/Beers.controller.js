function BeersController(ngCart, BeersService) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.currentPage = 1;
  vm.numPerPage = 10;
  vm.maxSize = 5;

  vm.title = 'Discover Beers';
  vm.beers = [];
  vm.prices = [
    {price: parseFloat(32.50).toFixed(2)},
    {price: parseFloat(34.81).toFixed(2)},
    {price: parseFloat(12.40).toFixed(2)},
    {price: parseFloat(15.38).toFixed(2)},
    {price: parseFloat(20.37).toFixed(2)},
    {price: parseFloat(14.48).toFixed(2)},
    {price: parseFloat(32.23).toFixed(2)},
    {price: parseFloat(14.50).toFixed(2)},
    {price: parseFloat(22.77).toFixed(2)},
    {price: parseFloat(29.88).toFixed(2)},
    {price: parseFloat(18.70).toFixed(2)},
    {price: parseFloat(11.72).toFixed(2)},
    {price: parseFloat(16.13).toFixed(2)},
    {price: parseFloat(30.02).toFixed(2)},
    {price: parseFloat(28.48).toFixed(2)},
    {price: parseFloat(14.12).toFixed(2)},
    {price: parseFloat(21.18).toFixed(2)},
    {price: parseFloat(12.57).toFixed(2)},
    {price: parseFloat(33.86).toFixed(2)},
    {price: parseFloat(27.76).toFixed(2)},
    {price: parseFloat(34.06).toFixed(2)},
    {price: parseFloat(29.04).toFixed(2)},
    {price: parseFloat(35.41).toFixed(2)},
    {price: parseFloat(20.17).toFixed(2)},
    {price: parseFloat(14.12).toFixed(2)}
  ];

  vm.getBeers = () => {
    BeersService.api().query({}, (data) => {
      data = [data.data];
      vm.beers = data[0];
      //console.log(vm.beers)
    });
  }
  vm.getBeers();

  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);

}

export default {
  name: 'BeersController',
  fn: BeersController
};
