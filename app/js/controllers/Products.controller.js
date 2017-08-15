function ProductsController(ngCart) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.title = 'Products';
  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);

}

export default {
  name: 'ProductsController',
  fn: ProductsController
};
