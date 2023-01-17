import Item from "./Item";

function Items({type, name, setPage}) {
  
    if (type.length===0) {
      return <h2 className="text-center mt-16 text-xl">No Items Found! Try Trending Instead</h2>;
    }
  return (
    <>
      <div className="grid items-center justify-items-center mt-7 w-full     grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-10">
        {/*searchShoe.get("search") ? filteredShoes() : allShoes()*/}
        {type.map((item) => (
          <Item item={item} name={name} key={item.id} />
        ))}
      </div>

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
    </>
  );
}

export default Items;
