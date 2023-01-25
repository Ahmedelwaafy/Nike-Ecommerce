import { sort, size, color, reset } from "../../Features/FilterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function FilterView() {
  const dispatch = useDispatch();
  const sorted = useSelector((state) => state.Filter.sort);
  const sized = useSelector((state) => state.Filter.size);
  const colored = useSelector((state) => state.Filter.color);

  return (
    <div>
      <button
        className="absolute right-4 top-5 md:top-[22px]  flex gap-1 items-center justify-center"
        onClick={() => dispatch(reset())}
      >
        <img
          src="../assets/reset.svg"
          alt="reset"
          className="hover:scale-110 transition duration-300"
        />
        <span className="md:hidden ">Reset</span>
      </button>
      {/**Sorting */}
      <div className="mt-4">
        <h3 className="text-xl font-medium">Price</h3>
        <hr className="w-2/4 mb-4 mt-2" />

        <div className="wrapper  ">
          <input
            type="radio"
            value="lth"
            name="price"
            id="lth"
            onChange={() => dispatch(sort("lth"))}
            checked={sorted === "lth"}
          />
          <input
            type="radio"
            value="htl"
            name="price"
            id="htl"
            onChange={() => dispatch(sort("htl"))}
            checked={sorted === "htl"}
          />

          <label htmlFor="lth" className="option px-3 py-1 sm:px-1 option-1">
            <span className="text-base sm:text-sm">Low to High</span>
          </label>
          <label htmlFor="htl" className="option px-3 sm:px-1 py-1 option-2">
            <span className="text-base sm:text-sm">High to Low</span>
          </label>
        </div>
      </div>

      {/**Size */}
      <div className="my-6">
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
              checked={sized.includes("s")}
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
              checked={sized.includes("m")}
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
              checked={sized.includes("l")}
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
              checked={sized.includes("xl")}
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className="ml-8 text-base">XL</span>
          </label>
        </div>
      </div>

      {/**Color */}
      <div className="my-6">
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
              checked={colored.includes("Blue")}
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base sm:text-sm">Blue</span>
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
              checked={colored.includes("Red")}
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base sm:text-sm">Red</span>
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
              checked={colored.includes("White")}
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base sm:text-sm">White</span>
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
              checked={colored.includes("Black")}
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base sm:text-sm">Black</span>
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
              checked={colored.includes("Green")}
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base sm:text-sm">Green</span>
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
              checked={colored.includes("Gray")}
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base sm:text-sm">Gray</span>
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
              checked={colored.includes("Orange")}
            />
            <div className="line"></div>
            <div className="line line-indicator"></div>
            <span className=" ml-8 text-base sm:text-sm">Orange</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default FilterView;
