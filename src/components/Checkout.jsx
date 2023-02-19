import { setClearChekoutItems, setGetTotals } from "../Features/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartItem from "./Utility Components/CartItem";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

function Checkout() {
  const [online, setOnline] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector((state) => state.Cart.cartTotalAmount);
  const cartItems = useSelector((state) => state.Cart.cartItems);
  const detectDimensions = () => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    dispatch(setGetTotals());
    window.addEventListener("resize", detectDimensions);
    return () => {
      window.removeEventListener("resize", detectDimensions);
    };
  }, [cartItems, dispatch]);

  const {
    register,
    trigger,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const navigateto = () =>
    setTimeout(() => {
      navigate("/", { replace: true });
      dispatch(setClearChekoutItems());
    }, 6000);
  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
    toast.success(`Your Payment Done Successfully`);
    setShowConfetti(true);
    navigateto();
  };

  return (
    <div className="flexCol">
      {showConfetti && (
        <Confetti
          className="max-w-full"
          width={dimension.width}
          height={dimension.height}
          tweenDuration={5000}
        />
      )}

      <div className="flex justify-between gap-20 w-5/6 mx-auto pt-16 md:flexCol md:py-16">
        {/**Form */}
        <div className="w-7/12 md:w-fit">
          <h1 className=" text-2xl font-semibold ">
            Final step, make the payment...
          </h1>
          <p className="text-cblue/70 my-2">
            To finalize your order, kindly complete the following fields.
          </p>
          <h2 className="text-xl font-medium mb-3 mt-10 ss:text-center">
            Payment Details
          </h2>

          <form
            className="bg-white rounded-xl shadow-lg shadow-slate-300 px-12 py-5"
            target="_blank"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
          >
            {/**1st Row */}
            <div className="flex justify-between gap-3">
              {/**Name */}
              <div className="flexCol items-start">
                {" "}
                <label className="my-1 text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="on"
                  placeholder="Name"
                  {...register("name", { required: true, maxLength: 40 })}
                  className="w-52 sm:w-40 border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                />
                {errors.name && (
                  <p className="text-pink-600 mt-1 text-xs">
                    {errors.name.type === "required" &&
                      "This field is required."}
                    {errors.name.type === "maxLength" &&
                      "Max length is 40 char."}
                  </p>
                )}
              </div>



              {/**Mobile Number */}

              <div className="flexCol items-start">
                {" "}
                <label className="my-1 text-sm" htmlFor="mobile">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  autoComplete="on"
                  placeholder="(000) 000-0000"
                  {...register("mobile", {
                    required: true,
                    pattern: /^\([\d]{3}\) [\d]{3}-[\d]{4}/,
                    maxLength: 20,
                  })}
                  className="w-52 sm:w-40   border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                />
                {errors.mobile && (
                  <p className="text-pink-600 pt-1 text-xs">
                    {errors.mobile.type === "required" &&
                      "This field is required."}
                    {errors.mobile.type === "maxLength" &&
                      "Max length is 20 char."}
                    {errors.mobile.type === "pattern" &&
                      "No. format is (000) 000-0000 ."}
                  </p>
                )}
              </div>
            </div>

            {/**2nd Row */}
            {online && (
              <div className="flex justify-between mt-3 gap-3">
                {/**Credit Card Number */}

                <div className="flexCol items-start">
                  {" "}
                  <label className="my-1 text-sm" htmlFor="Card">
                    Credit Card Number
                  </label>
                  <input
                    type="tel"
                    id="Card"
                    autoComplete="on"
                    placeholder="XXXX XXXX XXXX XXXX"
                    {...register("Card", {
                      required: true,
                      pattern: /^[\d]{4} [\d]{4} [\d]{4} [\d]{4}/,
                    })}
                    className="w-52 sm:w-40   border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                  />
                  {errors.Card && (
                    <p className="text-pink-600 pt-1 text-xs">
                      {errors.Card.type === "required" &&
                        "This field is required."}
                      {errors.Card.type === "pattern" &&
                        " Invalid Card Number."}
                    </p>
                  )}
                </div>

                <div className="flex justify-between w-52 sm:w-40   gap-3">
                  {/**Expiry Date */}

                  <div className="flexCol items-start">
                    {" "}
                    <label className="my-1 text-sm" htmlFor="expiry">
                      Expiry Date{" "}
                    </label>
                    <input
                      type="tel"
                      id="expiry"
                      autoComplete="on"
                      placeholder="MM/YY"
                      {...register("expiry", {
                        required: true,
                        pattern: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                      })}
                      className="w-24 sm:w-20 border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                    />
                    {errors.expiry && (
                      <p className="text-pink-600 pt-1 text-xs">
                        {errors.expiry.type === "required" &&
                          "This field is required."}
                        {errors.expiry.type === "pattern" &&
                          " Invalid Expiry Date."}
                      </p>
                    )}
                  </div>

                  {/**CVV */}

                  <div className="flexCol items-start">
                    {" "}
                    <label className="my-1 text-sm" htmlFor="cvv">
                      CVV{" "}
                    </label>
                    <input
                      type="tel"
                      id="cvv"
                      autoComplete="on"
                      placeholder="XXX"
                      {...register("cvv", {
                        required: true,
                        pattern: /^[\d]{3}/,
                      })}
                      className="w-20 sm:w-16 border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                    />
                    {errors.cvv && (
                      <p className="text-pink-600 pt-1 text-xs">
                        {errors.cvv.type === "required" &&
                          "This field is required."}
                        {errors.cvv.type === "pattern" && " Invalid CVV."}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/**3rd Row */}
            <div className="flex justify-between mt-3 gap-3">
              {/**Email */}
              <div className="flexCol items-start">
                {" "}
                <label className="my-1 text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="on"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  className="w-52 sm:w-40   border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                />
                {errors.email && (
                  <p className="text-pink-600 mt-1 text-xs">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      " Invalid Email Address."}
                  </p>
                )}
              </div>

              {/**City */}

              <div className="flexCol items-start">
                {" "}
                <label className="my-1 text-sm" htmlFor="city">
                  City{" "}
                </label>
                <input
                  type="text"
                  id="city"
                  autoComplete="on"
                  placeholder="Phoenix"
                  {...register("city", {
                    required: true,
                    maxLength: 20,
                  })}
                  className="w-52 sm:w-40   border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                />
                {errors.city && (
                  <p className="text-pink-600 pt-1 text-xs">
                    {errors.city.type === "required" &&
                      "This field is required."}
                    {errors.city.type === "maxLength" &&
                      "Max length is 20 char."}
                  </p>
                )}
              </div>
            </div>

            {/**4th Row */}
            <div className="flex justify-between mt-3 gap-3">
              {/**Address */}

              <div className="flexCol items-start">
                {" "}
                <label className="my-1 text-sm" htmlFor="address">
                  Address{" "}
                </label>
                <input
                  type="text"
                  id="address"
                  autoComplete="on"
                  placeholder="2351 Libby Street"
                  {...register("address", {
                    required: true,
                    maxLength: 100,
                  })}
                  className="w-52 sm:w-40   border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                />
                {errors.address && (
                  <p className="text-pink-600 pt-1 text-xs">
                    {errors.address.type === "required" &&
                      "This field is required."}
                    {errors.address.type === "maxLength" &&
                      "Max length is 100 char."}
                  </p>
                )}
              </div>

              <div className="flex justify-between w-52 sm:w-40   gap-3">
                {/**State */}

                <div className="flexCol items-start">
                  {" "}
                  <label className="my-1 text-sm" htmlFor="state">
                    State{" "}
                  </label>
                  <input
                    type="text"
                    id="state"
                    autoComplete="on"
                    placeholder="Arizona"
                    {...register("state", {
                      required: true,
                      maxLength: 20,
                    })}
                    className="w-24 sm:w-20 border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                  />
                  {errors.state && (
                    <p className="text-pink-600 pt-1 text-xs">
                      {errors.state.type === "required" &&
                        "This field is required."}
                      {errors.state.type === "maxLength" &&
                        "Max length is 20 char."}
                    </p>
                  )}
                </div>

                {/**ZIP */}

                <div className="flexCol items-start">
                  {" "}
                  <label className="my-1 text-sm" htmlFor="zip">
                    ZIP{" "}
                  </label>
                  <input
                    type="tel"
                    id="zip"
                    autoComplete="on"
                    placeholder="90656"
                    {...register("zip", {
                      required: true,
                      pattern: /^[\d]{5}/,
                    })}
                    className="w-20 sm:w-16 border border-cblue/30 px-1 py-1 hover:border-blue-600 transition duration-300 placeholder:text-xs  placeholder:text-cblue/50 placeholder:font-medium rounded-sm"
                  />
                  {errors.zip && (
                    <p className="text-pink-600 pt-1 text-xs">
                      {errors.zip.type === "required" &&
                        "This field is required."}
                      {errors.zip.type === "pattern" && " Invalid ZIP."}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </form>

          <h2 className="text-xl font-medium mb-3 mt-10 ss:text-center">
            Payment Method
          </h2>

          <div className="bg-white rounded-xl shadow-lg shadow-slate-300 px-12 py-5 flex justify-between">
            <div className="rowwrapper ">
              <input
                type="radio"
                value="online"
                name="Payment"
                id="online"
                onChange={() => setOnline(true)}
                checked={online === true}
              />
              <input
                type="radio"
                value="cash"
                name="Payment"
                id="cash"
                onChange={() => setOnline(false)}
                checked={online === false}
              />

              <label
                htmlFor="online"
                className="option px-3 py-1 sm:px-1 option-1"
              >
                <span className="text-base sm:text-sm">Online Payment</span>
              </label>
              <label
                htmlFor="cash"
                className="option px-3 sm:px-1 py-1 option-2"
              >
                <span className="text-base sm:text-sm">Cash on Delivery</span>
              </label>
            </div>
          </div>
        </div>

        {/**Order Summary */}
        <div className="w-5/12 md:w-full md:max-w-xl ">
          <h2 className="text-start text-xl font-medium mb-3 ss:text-center">
            Order Summary
          </h2>
          <div className="bg-white h-[580px] overflow-y-scroll scroll-hidden rounded-xl shadow-lg shadow-slate-300 ]">
            <div className="bg-white w-full h-6 sticky top-0 z-[100]"></div>
            <div className=" w-full h-auto bg-csky sticky top-[414px]  right-0 px-3 py-3 z-[100] ">
              {" "}
              {cartItems?.length > 0 && (
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">SUBTOTAL</p>
                    <p className="blur-gray text-sm font-medium px-1 rounded-md">
                      ${cartTotalAmount}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm font-semibold">SHIPPING</p>
                    <p className="blur-gray text-sm font-medium px-1 rounded-md">
                      $20
                    </p>
                  </div>
                  <hr className="my-2 border border-cblue" />
                  <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">TOTAL (USD)</p>
                    <p className="blur-gray text-sm font-medium px-1 rounded-md">
                      ${cartTotalAmount + 20}
                    </p>
                  </div>
                  <div className="flexCol gap-2 mt-2">
                    <button
                      onClick={handleSubmit(onSubmit)}
                      className="c-button c-button--gooey "
                    >
                      {" "}
                      Confirm Order{" "}
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
            {/**Cart Items */}
            {cartItems?.length > 0 && (
              <div className="px-4 -mt-44 ">
                {cartItems?.map((item, i) => (
                  <CartItem item={item} key={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
