export const FilterByQuery = (items, query) => {
  const filterdItems = query
    ? [...items].filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : items;
  return filterdItems;
};

export const SortByPrice = (items, sort) => {
  const sortedItems = [...items].sort((item1, item2) =>
    sort === "lth"
      ? item1.price - item2.price
      : sort === "htl"
      ? item2.price - item1.price
      : items
  );
  return sortedItems;
};

export const SortBySize = (items, size) => {
  const sortedItems = [...items].filter((item) =>
    size.length > 0 ? size.includes(item.size) : items
  );
  return sortedItems;
};

export const SortByColor = (items, color) => {
  const sortedItems = [...items].filter((item) =>
    color.length > 0 ? color.includes(item.shoeColor) : items
  );
  return sortedItems;
};
