import { setToggleCart, setClearCartItems } from "../Features/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartItem from "./Utility Components/CartItem";

import { Player } from "@lottiefiles/react-lottie-player";
function CartView() {
  const dispatch = useDispatch();
 const cartState = useSelector((state) => state.Cart.cartState);
 const totalQTY = useSelector((state) => state.Cart.totalQTY);
 const cartItems = useSelector((state) => state.Cart.cartItems);
 
 

  return (
    <section
      className={`fixed top-0 right-0 w-full  bg-cblue/60 h-screen z-[100] duration-500    ${
        cartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      } overflow-y-scroll scroll-smooth scroll-hidden`}
    >
      <div
        className="  w-full hfull
           "
        onClick={() => dispatch(setToggleCart(!cartState))}
      ></div>
      {/**CartSection */}
      <div
        className={`max-w-xl w-full absolute right-0 top-0 h-auto min-h-screen duration-500 bg-cgray  ${
          cartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        } `}
      >
        {/**Cart Count */}
        <div className="flex justify-between items-center w-full h-11 bg-csky shadow-sm shadow-csky sticky top-0 right-0 px-3 z-[100] ">
          <div className=" flex items-center justify-between gap-3">
            <img
              className="cursor-pointer hover:scale-110 transition-all duration-300 bg-cblue px-[10px] py-2 rounded-md"
              src="../assets/back.svg"
              alt="back"
              onClick={() => dispatch(setToggleCart(!cartState))}
            />
            <p className="font-medium">
              {" "}
              Your Cart{" "}
              <span className="bg-cgray text-sm rounded px-1 py-0.5">
                ({totalQTY} Items)
              </span>
            </p>
          </div>
          <img
            src="../assets/closeCart.svg"
            alt="closeCart"
            onClick={() => dispatch(setClearCartItems())}
            className="cursor-pointer hover:scale-110 transition-all duration-300 bg-cblue px-2 py-2 rounded-md"
          />
        </div>

        {/**Cart Items / Empty */}
        {cartItems?.length === 0 ? (
          <div className="flexCol gap-3">
            <div>
              <Player
                src="https://assets4.lottiefiles.com/packages/lf20_qh5z2fdq.json"
                style={{ height: "500px", width: "500px" }}
                loop
                autoplay
              />
            </div>
            <button
              className="cssbuttons-io-button "
              onClick={() => dispatch(setToggleCart(!cartState))}
            >
              {" "}
              Back To Nike Store
              <div className="backicon flip">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <div className="px-4  ">
            {cartItems?.map((item, i) => (
              <CartItem item={item} key={i} />
            ))}
          </div>
        )}
        {cartItems?.length === 0 ? (
          ""
        ) : (
          <div className=" w-full h-auto bg-csky sticky bottom-0  right-0 px-3 py-3 z-[100] ">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold">SUBTOTAL</p>
              <p className="blur-gray text-base font-medium px-1 rounded-md">
                $1700
              </p>
            </div>
            <div className="flexCol gap-2 mt-2">
              <p>Taxes and Shipping Will be Calculated At Shipping</p>
              <button className="c-button c-button--gooey ">
                {" "}
                Checkout{" "}
                <div className="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button>
              <svg
                style={{ display: "block", height: "0", width: "0" }}
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="goo">
                    <feGaussianBlur
                      result="blur"
                      stdDeviation="10"
                      in="SourceGraphic"
                    ></feGaussianBlur>
                    <feColorMatrix
                      result="goo"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                      mode="matrix"
                      in="blur"
                    ></feColorMatrix>
                    <feBlend in2="goo" in="SourceGraphic"></feBlend>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CartView;
