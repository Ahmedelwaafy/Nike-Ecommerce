import { sort, size, color } from "../../Features/FilterSlice";
import { useDispatch } from "react-redux";
function FilterView() {
  const dispatch = useDispatch();

  return (
    <div>
      {/**Sorting */}
      <div>
        <h3 className="text-xl font-medium">Price</h3>
        <hr className="w-2/4 mb-4 mt-2" />

        <div className="wrapper  ">
          <input
            type="radio"
            value="lth"
            name="price"
            id="lth"
            onChange={() => dispatch(sort("lth"))}
          />
          <input
            type="radio"
            value="htl"
            name="price"
            id="htl"
            onChange={() => dispatch(sort("htl"))}
          />

          <label htmlFor="lth" className="option px-3 py-1 option-1">
            <span className="text-base">Low to High</span>
          </label>
          <label htmlFor="htl" className="option px-3 py-1 option-2">
            <span className="text-base">High to Low</span>
          </label>
        </div>
      </div>

      {/**Size */}
      <div className="my-8">
        <h3 className="text-xl font-medium">Size</h3>
        <hr className="w-2/4 my-2" />
        <div className="flex-col">
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="s"
          >
            <input
              id="s"
              name="s"
              type="checkbox"
              onChange={(e) =>
                dispatch(size({ key: "s", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">S</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="m"
          >
            <input
              id="m"
              name="m"
              type="checkbox"
              onChange={(e) =>
                dispatch(size({ key: "m", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">M</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="l"
          >
            <input
              id="l"
              name="l"
              type="checkbox"
              onChange={(e) =>
                dispatch(size({ key: "l", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">L</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="xl"
          >
            <input
              id="xl"
              name="xl"
              type="checkbox"
              onChange={(e) =>
                dispatch(size({ key: "xl", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className="ml-8 text-base">XL</span>
          </label>
        </div>
      </div>

      {/**Color */}
      <div className="my-8">
        <h3 className="text-xl font-medium">Color</h3>
        <hr className="w-2/4 my-2 " />
        <div className="flex-col">
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="Blue"
          >
            <input
              id="Blue"
              name="Blue"
              type="checkbox"
              onChange={(e) =>
                dispatch(color({ key: "Blue", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">Blue</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="Red"
          >
            <input
              id="Red"
              name="Red"
              type="checkbox"
              onChange={(e) =>
                dispatch(color({ key: "Red", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">Red</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="White"
          >
            <input
              id="White"
              name="White"
              type="checkbox"
              onChange={(e) =>
                dispatch(color({ key: "White", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">White</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="Black"
          >
            <input
              id="Black"
              name="Black"
              type="checkbox"
              onChange={(e) =>
                dispatch(color({ key: "Black", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">Black</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="Green"
          >
            <input
              id="Green"
              name="Green"
              type="checkbox"
              onChange={(e) =>
                dispatch(color({ key: "Green", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">Green</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="Gray"
          >
            <input
              id="Gray"
              name="Gray"
              type="checkbox"
              onChange={(e) =>
                dispatch(color({ key: "Gray", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">Gray</span>
          </label>
          <label
            className="labelcontainer flex items-center gap-3 mb-2"
            htmlFor="Orange"
          >
            <input
              id="Orange"
              name="Orange"
              type="checkbox"
              onChange={(e) =>
                dispatch(color({ key: "Orange", check: e.target.checked }))
              }
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base">Orange</span>
          </label>
         
        </div>
      </div>
    </div>
  );
}

export default FilterView;
