import { Link } from "react-router-dom";
import { setAddItemToCart, setToggleCart } from "../../Features/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Item({ item, pop, name }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.Cart.cartState);
  const { title, text, rating, btn, img, price, color, shadow, id } = item;

  return (
    <div
      style={{
        background: `${color}`,
        boxShadow: `2px 7px 15px 0.11px ${shadow}`,
      }}
      className={`flex justify-start  items-center gap-3 rounded-xl py-4 px-5 transition-all duration-700 ease-in-out hover:scale-105  w-full cursor-pointer shadow-lg ${shadow} ${
        pop
          ? " relative h-40 max-w-[445px] "
          : "flex-col  max-w-[330px]  h-[350px]"
      }`}
    >
      {/**Content */}
      <div className={` ${pop ? "" : "text-center "}`}>
        <h3 className="text-cgray text-xl font-medium filter drop-shadow">
          <Link className="underline-gradient " to={`/${name}/${id}`}>
            {title}
          </Link>
        </h3>
        <h4 className="text-cgray  filter drop-shadow">{text}</h4>

        {/**Rating & Price */}
        <div
          className={`flex justify-between w-32 mt-2 ${
            pop ? "" : "mx-auto mt-4"
          } `}
        >
          <div className="blur-gray px-1 rounded-md font-medium"> ${price}</div>
          <div className="flex items-center gap-1">
            <img src="../assets/star.svg" alt="star-icon" />
            <p className="text-cgray ">{rating}</p>
          </div>
        </div>
        {/**Buttons */}
        <div
          className={`flex justify-between w-32 mt-3   ${
            pop ? "" : "mx-auto mt-4 mb-4"
          }`}
        >
          <button
            type="button"
            className="blur-gray box-shadow  py-1 px-1.5 rounded-md active:scale-90 transition-all duration-100 ease-in-out"
            onClick={() => dispatch(setAddItemToCart(item))}
          >
            <img className="w-5 h-5 " src="../assets/cart.svg" alt="cart" />
          </button>
          <button
            type="button"
            className="blur-gray box-shadow py-1 px-2 rounded-md font-medium active:scale-90 transition-all duration-100 ease-in-out"
            onClick={() => {
              dispatch(setAddItemToCart(item));
              dispatch(setToggleCart(!cartState));
            }}
          >
            {btn}
          </button>
        </div>
      </div>

      {/**Image */}
      <div
        className={` ${pop ? " absolute top-5 right-1 -rotate-[45deg]" : ""}`}
      >
        <img
          className={`w-64 transition-all duration-700 ease-in-out  ${
            pop
              ? " hover:scale-110 hover:-translate-x-8 sm:hover:scale-100 sm:hover:-translate-x-0 "
              : "hover:-rotate-[15deg]"
          } `}
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
}

export default Item;
