import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="mt-24 py-10  bg-csky  ">
      <div className="w-5/6 mx-auto flex  ss:flex-col gap-10 justify-around">
        <div className="text-center">
          <h3 className=" mb-3 font-bold text-lg">ABOUT NIKE</h3>
          <ul className="leading-10">
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                News
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Sustainability
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Careers
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Investors
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Prupose
              </button>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className=" mb-3 font-bold text-lg">GET HELP</h3>
          <ul className="leading-10">
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Order Status
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Shipping & Delivery
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                FAQ
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Payment Options
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className=" mb-3 font-bold text-lg">COMPANY</h3>
          <ul className="leading-10">
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Gift Cards
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Promotions
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Find A Store
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Signup
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/underconstruction")}>
                Send Us Feeback
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-7 text-center">
        <p className="  text-sm md:text-center">
          Copyright <span className="text-base font-bold">&copy;</span> All
          Rights Reserved
          <span className="font-semibold"> @ NIKE </span> 2023.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
