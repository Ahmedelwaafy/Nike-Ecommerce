import { useState, useEffect } from "react";

function Navbar() {
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
            <a
              className="underline-gradient "
              href="https://www.behance.net/ahmedelwaafy"
            >
              {" "}
              Women
            </a>
          </li>

          <li>
            <a
              className="underline-gradient "
              href="https://www.behance.net/ahmedelwaafy"
            >
              {" "}
              Men{" "}
            </a>
          </li>
          <li>
            <a
              className="underline-gradient "
              href="https://www.behance.net/ahmedelwaafy"
            >
              {" "}
              Kids{" "}
            </a>
          </li>
          <li>
            <a
              className="underline-gradient "
              href="https://www.behance.net/ahmedelwaafy"
            >
              {" "}
              Collections{" "}
            </a>
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
              <a onClick={() => setToggle(false)} href="#bob">
                {" "}
                Women
              </a>
            </li>

            <li>
              <a onClick={() => setToggle(false)} href="#hif">
                {" "}
                Men{" "}
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#hif">
                {" "}
                Kids{" "}
              </a>
            </li>
            <li>
              <a onClick={() => setToggle(false)} href="#hif">
                {" "}
                Collections{" "}
              </a>
            </li>
          </ul>
        </div>

        {/** 3-Cart Icon */}
        <div>
          <button>
            <img src="../assets/cart.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
