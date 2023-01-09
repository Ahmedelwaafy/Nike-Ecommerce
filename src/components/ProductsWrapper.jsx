import Item from "./Utility Components/Item";
import Loader from "./Utility Components/Loader";

function ProductsWrapper({ pop, endpoint, isLoading, isError, error }) {
  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <h3>
        We're sorry, something went wrong, we work on that {error.message}
      </h3>
    );
  }
  return (
    <div>
      <h2>{pop ? "Popular Sales" : "Top Rated"}</h2>

      <div
        className={`grid items-center justify-items-center mt-7 gap-7 lg:gap-5 ${
          pop
            ? "grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
            : "grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
        }`}
      >
        {endpoint.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsWrapper;
