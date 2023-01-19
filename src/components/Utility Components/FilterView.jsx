import { sort, size } from "../../Features/FilterSlice";
import {useDispatch} from "react-redux";
function FilterView() {
  const dispatch = useDispatch();
  
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
              onChange={() => dispatch(sort("lth"))}
            />

            <span className="text-sm">Low to High</span>
          </label>
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="radio"
              name="price"
              value="htl"
              onChange={() => dispatch(sort("htl"))}
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
              onChange={(e) =>
                dispatch(size({ key: "s", check: e.target.checked }))
              } //checked={c}
            />
            <span className="text-sm">S</span>
          </label>
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch(size({ key: "m", check: e.target.checked }))
              }
              //checked={c}
            />
            <span>M</span>
          </label>
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch(size({ key: "l", check: e.target.checked }))
              } //checked={c}
            />
            <span>L</span>
          </label>
          <label className="flex items-center gap-3" htmlFor="">
            <input
              type="checkbox"
              onChange={(e) =>
                dispatch(size({ key: "xl", check: e.target.checked }))
              } //checked={c}
            />
            <span>XL</span>
          </label>
        </div>
      </div>

      {/**Price Range */}
    </div>
  );
}

export default FilterView;
