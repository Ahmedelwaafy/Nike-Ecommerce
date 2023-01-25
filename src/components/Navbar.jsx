import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setToggleCart } from "../Features/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.Cart.cartState);
  const cartTotalQuantity = useSelector(
    (state) => state.Cart.cartTotalQuantity
  );

  const [scroll, setScroll] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScroll(true);
      } else setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navBackground = scroll ? "blur" : "";
  const toggleStyle = toggle ? "sm:block" : "";
  const activeLink = ({ isActive }) => ({
    background: isActive
      ? "linear-gradient(94deg, rgba(9,57,89,1) 0%, rgba(183,226,247,1) 100%)"
      : "",
    backgroundSize: isActive ? "100% 3px" : "",
    backgroundRepeat: isActive ? "no-repeat" : "",
    backgroundPosition: isActive ? "left bottom" : "",
  });

  return (
    <nav className=" w-full fixed top-0 py-6 z-40 ">
      <div
        className={` ${navBackground} absolute transition duration-500 top-0  z-[-1]  w-full h-[78px]`}
      ></div>

      <div className=" w-5/6 mx-auto flex justify-between items-center">
        {/** 1-Logo */}
        <a href="#hero">
          <img className="" src="../assets/logo.svg" alt="nike-logo" />
        </a>

        {/** 2-Desktop Menu */}
        <ul className="  sm:hidden flex justify-between items-center gap-12 text-sm font-DMSans font-semibold  ">
          <li>
            <NavLink className="underline-gradient " to="/" style={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="underline-gradient  "
              to="/women"
              style={activeLink}
            >
              Women
            </NavLink>
          </li>

          <li>
            <NavLink
              className="underline-gradient "
              to="/men"
              style={activeLink}
            >
              Men
            </NavLink>
          </li>
          <li>
            <NavLink
              className="underline-gradient "
              to="/kids"
              style={activeLink}
            >
              Kids
            </NavLink>
          </li>
          <li>
            <NavLink
              className="underline-gradient "
              to="Collections"
              style={activeLink}
            >
              Collections
            </NavLink>
          </li>
        </ul>
        {/** 2-Mobile Menu */}
        <button className="hidden sm:block" onClick={() => setToggle(!toggle)}>
          <img src="../assets/menu.svg" alt="menu-icon" />
        </button>

        {/** Side Menu */}
        <div
          className={` ${toggleStyle} absolute top-0 right-0 pt-36 hidden  overlay h-[100vh] z-[-1] w-full `}
          onClick={() => setToggle(false)}
        >
          {/**
          <div className="flex justify-end px-8 my-8">
            <button onClick={() => setToggle(false)}>
              <img src="../assets/close-icon.svg" alt="close-icon" />
            </button>
          </div>{" "}
          */}
          <ul className="  flex flex-col justify-between items-center gap-20 text-sm font-DMSans font-semibold  ">
            <li>
              <NavLink
                className="underline-gradient "
                to="/"
                style={activeLink}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="underline-gradient  "
                to="/women"
                style={activeLink}
              >
                Women
              </NavLink>
            </li>

            <li>
              <NavLink
                className="underline-gradient "
                to="/men"
                style={activeLink}
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                className="underline-gradient "
                to="/kids"
                style={activeLink}
              >
                Kids
              </NavLink>
            </li>
            <li>
              <NavLink
                className="underline-gradient "
                to="Collections"
                style={activeLink}
              >
                Collections
              </NavLink>
            </li>
          </ul>
        </div>

        {/** 3-Cart Icon */}
        <div
          className="relative hover:scale-110 transition-all duration-300"
          onClick={() => dispatch(setToggleCart(!cartState))}
        >
          <button>
            <img src="../assets/cart.svg" alt="" />
          </button>
          <div className="text-cgray bg-cblue flex items-center justify-center rounded-full text-xs shadow-sm shadow-cgray absolute bottom-[26px] left-[4px] px-[4px] cursor-pointer  ">
            {cartTotalQuantity}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
