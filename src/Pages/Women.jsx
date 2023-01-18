import { useState } from "react";
import axios from "axios";
import Items from "../components/Utility Components/Items";
import { useEffect } from "react";
import FilterView from "../components/Utility Components/FilterView";

function Women() {
  const [women, setWomen] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
const name = "women";
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `${process.env.REACT_APP_WOMEN}?q=${query}&_limit=15&_page=${page}`
      );
      setWomen(res.data);

      return res.data;
    }
    fetchData();
  }, [page, query]);

  return (
    <main className="my-[78px]    justify-center">
      <div className="f-col ">
        <h1 className="  font-bold font-Anton text-3xl -mb-3 ">Nike</h1>
        <h2 className="font-medium ">The Best Shoes Ever and Forever</h2>
        <div className="z-20 flex gap-5  justify-end items-center ">
          <div className="group">
            <svg className="icon " aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>

            <input
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              className="input"
            />
          </div>

          <button onClick={() => setQuery("")} className="">
            reset
          </button>
        </div>
        <div className="flex items-center ">
          <p className="">Trending:&nbsp;</p>
          <button
            onClick={() => {
              setQuery("sneaker");
            }}
            className="underline opacity-75 hover:opacity-100  "
          >
            Sneaker
          </button>
          <span>&nbsp; &nbsp;</span>
          <button
            onClick={() => {
              setQuery("nike");
            }}
            className="underline opacity-75 hover:opacity-100"
          >
            Nike{" "}
          </button>
          <span>&nbsp; &nbsp;</span>
          <button
            onClick={() => {
              setQuery("air");
            }}
            className="underline opacity-75 hover:opacity-100"
          >
            Air
          </button>
          <span>&nbsp; &nbsp;</span>
          <button
            onClick={() => {
              setQuery("jordan");
            }}
            className="underline opacity-75 hover:opacity-100"
          >
            Jordan
          </button>
        </div>
      </div>
      <img
        className=" z-[-1] w-full absolute top-[78px] right-0 left-0  h-[500px] object-cover"
        src="../assets/covers/women.svg"
        alt="women-cover"
      />

      <section className="   flex w-full justify-between gap-12">
        <aside className="w-1/6 sticky top-[520px] left-0 h-auto bg-orange-500 flex justify-center"> <FilterView/> </aside>
        <div className="w-5/6 mr-5">
          <Items type={women} name={name} setPage={setPage} />
        </div>
      </section>
    </main>
  );
}

export default Women;
