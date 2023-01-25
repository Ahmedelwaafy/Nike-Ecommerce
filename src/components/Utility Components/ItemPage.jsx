import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { setAddItemToCart, setToggleCart } from "../../Features/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function ItemPage({ type }) {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.Cart.cartState);

  const [data, setData] = useState({});
  const [flip, setFlip] = useState("");

  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        `https://nike-api-render.onrender.com/${type}/${id}`
      );
      setData(res.data);

      return res.data;
    }
    fetchData();
  }, [id, type]);
  return (
    <div className="my-[78px] h-[80vh] sm:h-auto w-5/6 mx-auto flex sm:flex-col sm:items-center gap-12 pt-16">
      <div className="w-3/5 sm:w-full sm:order-2 img-col ">
        <img className={`${flip} w-96`} src={`${data.img}`} alt="" />
        <div className="flex gap-12 ">
          <div>
            <img
              className="border-2 border-cblue  w-64 cursor-pointer hover:scale-105 transition-all duration-700 active:scale-110 rounded-md shadow-sm p-2 shadow-cblue "
              src={`${data.img}`}
              alt=""
              onClick={() => setFlip("")}
            />
          </div>
          <div className="hover:scale-105 transition-all duration-700 active:scale-110">
            <img
              className="border-2 border-cblue  flip w-64 cursor-pointer  rounded-md shadow-sm p-2 shadow-cblue "
              src={`${data.img}`}
              alt=""
              onClick={() => setFlip("flip")}
            />
          </div>
        </div>
      </div>
      <div
        className="w-2/5 sm:pt-5 sm:w-full flex sm:order-1 justify-center items-center  "
        style={{
          background: `${data.color}`,
          boxShadow: `2px 7px 15px 0.11px ${data.shadow}`,
        }}
      >
        <div>
          <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold font-Anton filter drop-shadow  ">
            {data.title}
          </h1>
          <h2 className="my-8 text-center">{data.text}</h2>
          {/**Rating & Price */}
          <div className="flex justify-between w-40  mx-auto mt-4">
            <div className="blur-gray px-1 rounded-md font-medium">
              ${data.price}
            </div>
            <div className="flex items-center gap-1">
              <img src="../assets/star.svg" alt="star-icon" />
              <p className="text-cgray ">{data.rating}</p>
            </div>
          </div>
          {/**Buttons */}
          <div className="flex justify-between w-40  mx-auto my-8">
            <button
              type="button"
              className="blur-gray box-shadow  py-1 px-1.5 rounded-md active:scale-90 transition-all duration-100 ease-in-out"
              onClick={() => dispatch(setAddItemToCart(data))}
            >
              <img className="w-5 h-5 " src="../assets/cart.svg" alt="cart" />
            </button>
            <button
              type="button"
              className="blur-gray box-shadow py-1 px-2 rounded-md font-medium active:scale-90 transition-all duration-100 ease-in-out"
              onClick={() => {
                dispatch(setAddItemToCart(data));
                dispatch(setToggleCart(!cartState));
              }}
            >
              {data.btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
