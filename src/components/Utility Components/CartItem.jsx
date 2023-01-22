import { setRemoveItemFromCart } from "../../Features/CartSlice";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, title, text, img, color, shadow, price, cartQTY } = item;
  return (
    <div className="flex items-center justify-between gap-4 my-8 ">
      <div
        className="flex items-center justify-center w-48 h-28 rounded-md hover:scale-105 transition duration-500 relative "
        style={{
          background: `${color}`,
          boxShadow: `2px 7px 15px 0.11px ${shadow}`,
        }}
      >
        <div className="blur-gray rounded px-0.5 absolute top-1 right-1 text-sm">
          ${price}
        </div>
        <img src={img} alt="CartItem" className="h-20" />
      </div>
      <div className="flex justify-between w-80  ">
        <div className="cartItemCol items-start  gap-4">
          <div className="text-start">
            <h2 className="font-semibold  text-lg">{title}</h2>
            <p className="text-sm">{text}</p>
          </div>
          <div className="flex items-center justify-evenly gap-3">
            <p className="bg-cblue text-cgray px-[6px] py-2 rounded-md leading-3  text-3xl cursor-pointer active:scale-90 transition duration-300  ">
              -
            </p>
            <p className="bg-csky text-cblue w-9  h-9 flex items-center justify-center rounded-md leading-3  text-xl   ">
              {cartQTY}
            </p>
            <p className="bg-cblue text-cgray px-[6px] py-2 rounded-md leading-3  text-3xl cursor-pointer active:scale-90 transition duration-300  ">
              +
            </p>
          </div>
        </div>

        <div className="flexCol gap-9">
          <p className=" text-lg font-semibold">$ {price * cartQTY}</p>
          <img
            onClick={() => dispatch(setRemoveItemFromCart(item))}
            src="../assets/remove.svg"
            alt="remove"
            className="bg-red-500 px-2 py-2 rounded-md cursor-pointer active:scale-90 transition duration-300 "
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
