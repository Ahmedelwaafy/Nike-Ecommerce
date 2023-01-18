import { search } from "../../Features/FilterSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
function FilterView() {
  const dispatch = useDispatch();
  const word = useSelector((state) => state.Filter.search);
  console.log(word)
  function handlePriceChange(params) {}
  function handleSizeChange(params) {}
  function handleRangeChange(params) {}
  return (
    <div>
      {/**Sorting */}
      <div>
        <h3 className="text-xl font-medium">Price</h3>
        <hr className="w-2/4 my-2 " />
        <div className="flex-col">
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="radio"
              name="price"
              value="lth"
              onChange={() => handlePriceChange()}
            />
            <input type="text"  onChange={(e) => dispatch(search(e.target.value))} />
            <span className="text-sm">Low to High</span>
          </label>
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="radio"
              name="price"
              value="htl"
              onChange={() => handlePriceChange()}
            />
            <span className="text-sm">High to Low</span>
          </label>
        </div>
      </div>

      {/**Size */}
      <div className="my-8">
        <h3 className="text-xl font-medium">Size</h3>
        <hr className="w-2/4 my-2" />
        <div className="flex-col">
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="checkbox"
              onChange={() => handleSizeChange()}
              //checked={c}
            />
            <span className="text-sm">S</span>
          </label>
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="checkbox"
              onChange={() => handleSizeChange()}
              //checked={c}
            />
            <span>M</span>
          </label>
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="checkbox"
              onChange={() => handleSizeChange()}
              //checked={c}
            />
            <span>L</span>
          </label>
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="checkbox"
              onChange={() => handleSizeChange()}
              //checked={c}
            />
            <span>XL</span>
          </label>
        </div>
      </div>

      {/**Price Range */}
      <div>
        <h3 className="text-xl font-medium">Range</h3>
        <hr className="w-2/4 my-2 " />
        <div className="flex-col">
          <label className="flex-col items-center gap-3" htmlFor="">
            <span className="text-sm">Low to High</span>
            <input
              type="range"
              name="price"
              value="lth"
              onChange={() => handleRangeChange()}
            />
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterView;
