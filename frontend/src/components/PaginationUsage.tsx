//https://codesandbox.io/s/tekvwr?file=/demo.js:509-1077

function PaginationUsage(items: unknown, current_page: unknown, per_page_items: unknown) {
  let page = current_page || 1
  let per_page = per_page_items || 2
  let offset = (page - 1) * per_page
  //console.log(items)
  let paginatedItems = [];
  if (items.length > 0) {
    paginatedItems = items.slice(offset).slice(0, per_page_items)
  }
  let total_pages = Math.ceil(items.length / per_page);
  console.log(paginatedItems)

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
  };
}

export default PaginationUsage