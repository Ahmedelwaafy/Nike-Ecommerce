import Items from "../components/Utility Components/Items";
import FilterView from "../components/Utility Components/FilterView";
import { search } from "../Features/FilterSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
function Kids() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.Filter.search);
  const [searchShoe, setSearchShoe] = useSearchParams();

  const name = "kids";
  const findShoe = () => {
    setSearchShoe({ search: query });
  };
  const dispatchKey = (key) => {
    dispatch(search(key));
    setSearchShoe({ search: key });
  };

  return (
    <main className="my-[78px] relative   justify-center">
      <div className="f-col ">
        <h1 className="  font-bold font-Anton text-3xl -mb-3 ">Nike</h1>
        <h2 className="font-medium ">The Best Shoes Ever and Forever</h2>
        <div className="z-20 flex gap-5  justify-end items-center ">
          <div className="group">
            <img
              src="../assets/search.svg"
              alt="search"
              className="icon cursor-pointer"
              onClick={() => findShoe()}
            />

            <input
              placeholder="Search"
              name="Search"
              value={query}
              onChange={(e) => dispatch(search(e.target.value))}
              type="text"
              className="input"
              autoComplete="on"
              autoFocus
            />
          </div>

          <button
            onClick={() => {
              dispatch(search(""));
              setSearchShoe("");
            }}
            className=""
          >
            Reset
          </button>
        </div>
        <div className="flex items-center ">
          <p className="">Trending:&nbsp;</p>
          <button
            onClick={() => dispatchKey("Sneaker")}
            className="underline opacity-75 hover:opacity-100  "
          >
            Sneaker
          </button>
          <span>&nbsp; &nbsp;</span>
          <button
            onClick={() => dispatchKey("Nike")}
            className="underline opacity-75 hover:opacity-100"
          >
            Nike
          </button>
          <span>&nbsp; &nbsp;</span>
          <button
            onClick={() => dispatchKey("Air")}
            className="underline opacity-75 hover:opacity-100"
          >
            Air
          </button>
          <span>&nbsp; &nbsp;</span>
          <button
            onClick={() => dispatchKey("Jordan")}
            className="underline opacity-75 hover:opacity-100"
          >
            Jordan
          </button>
        </div>
      </div>
      <img
        className=" z-[-1] w-full absolute top-0 right-0 left-0  h-[500px] object-cover"
        src="../assets/covers/kids.svg"
        alt="kids-cover"
      />

      <div className="sticky top-0">
        <aside
          style={{
            background: "linear-gradient(90deg,#FDFC47 0%,#24FE41 100%)",
          }}
          className="w-1/6  top-[78px]  absolute  left-0 h-auto  flex justify-center sm:w-28 shadow-lg shadow-slate-500"
        >
          <FilterView />
        </aside>
      </div>
      <section className="     flex w-full justify-end gap-16">
        <div className="w-5/6 px-10 ss:px-12  pt-12 ">
          <Items searchShoe={searchShoe} name={name} />
        </div>
      </section>
    </main>
  );
}

export default Kids;
