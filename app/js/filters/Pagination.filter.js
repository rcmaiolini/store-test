function PaginationFilter() {

  return (input, currentPage, pageSize) => {
    if(angular.isArray(input)) {
      let start = (currentPage - 1) * pageSize;
      let end = currentPage * pageSize;
      return input.slice(start, end);
    }
  }

}

export default {
  name: 'PaginationFilter',
  fn: PaginationFilter
};
