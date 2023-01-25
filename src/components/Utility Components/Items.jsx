import Item from "./Item";
import Loader from "./Loader";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {
  FilterByQuery,
  SortByPrice,
  SortBySize,
  SortByColor,
} from "./FilterFunctions";
import { useSelector } from "react-redux";

function Items({ searchShoe, name }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("");
  const sort = useSelector((state) => state.Filter.sort);
  const size = useSelector((state) => state.Filter.size);
  const color = useSelector((state) => state.Filter.color);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        ` https://nike-api-render.onrender.com/${name}?_limit=15&_page=${page}`
      );
      setLoading(false);
      setData(res.data);

      return res.data;
    }
    fetchData();
  }, [page, name]);
  const ItemsFilterdByQuery = FilterByQuery(data, searchShoe.get("search"));
  const ItemsSortedByPrice = SortByPrice(ItemsFilterdByQuery, sort);
  const ItemsSortedBySize = SortBySize(ItemsSortedByPrice, size);
  const ItemsSortedByColor = SortByColor(ItemsSortedBySize, color);

  if (loading) {
    return <Loader />;
  }
  if (ItemsSortedByColor.length === 0) {
    return (
      <h2 className="text-center mt-16 text-xl">
        No Items Found! Try Trending Instead
      </h2>
    );
  }
  return (
    <>
      <div className="grid items-center justify-items-center mt-7 w-full     grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-10">
        {/*searchShoe.get("search") ? filteredShoes() : allShoes()*/}
        {ItemsSortedByColor.map((item) => (
          <Item item={item} name={name} key={item.id} />
        ))}
      </div>
      {ItemsSortedByColor.length > 1 && (
        <div className="flex  justify-center gap-4 mt-16">
          <button
            className="bg-cblue text-csky w-8 h-8 rounded-md shadow-sm shadow-slate-500 text-xl hover:bg-blue-400 "
            onClick={() => setPage(1)}
          >
            1
          </button>
          <button
            className="bg-cblue text-csky w-8 h-8 rounded-md shadow-sm shadow-slate-500 text-xl hover:bg-blue-400 "
            onClick={() => setPage(2)}
          >
            2
          </button>
        </div>
      )}
    </>
  );
}

export default Items;
