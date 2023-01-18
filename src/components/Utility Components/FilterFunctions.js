export const FilterByQuery = (items, query)=>{
const filterdItems = query
  ? [...items].filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()
    ))
  : items;
return filterdItems;
}