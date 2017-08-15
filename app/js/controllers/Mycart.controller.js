function MycartController(ngCart) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'Mycart';
  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);

}

export default {
  name: 'MycartController',
  fn: MycartController
};
