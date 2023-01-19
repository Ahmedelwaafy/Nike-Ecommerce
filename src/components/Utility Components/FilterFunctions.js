export const FilterByQuery = (items, query)=>{
const filterdItems = query
  ? [...items].filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()
    ))
  : items;
return filterdItems;
}

export const SortByPrice = (items, sort)=>{
const sortedItems = [...items].sort((item1, item2) =>
  sort === "lth"
    ? item1.price - item2.price
    : sort === "htl"
    ? item2.price - item1.price
    : items
);
return sortedItems;
}