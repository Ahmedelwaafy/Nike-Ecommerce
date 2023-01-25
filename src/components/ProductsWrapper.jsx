import Item from "./Utility Components/Item";
import Loader from "./Utility Components/Loader";

function ProductsWrapper({ pop, endpoint, isLoading, isError, error }) {
  const name = "top";
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <h3>
        We're sorry, something went wrong, we work on that {error.message}
      </h3>
    );
  }
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold sm:text-3xl sm:text-center">
        {pop ? "Popular Sales" : "Top Rated"}
      </h2>

      <div
        className={`grid items-center justify-items-center mt-7 gap-7  ${
          pop
            ? "grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-10"
            : "grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        }`}
      >
        {endpoint.map((item) => (
          <Item name={name} pop={pop} item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsWrapper;
