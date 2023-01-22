import Navbar from "../Navbar";
import Footer from "../Footer";
import CartView from "../CartView";
import { Outlet } from "react-router-dom";
function ProductsLayout() {
  return (
    <>
      <Navbar />
      <CartView />
      <div id="hero" className=""></div>
      <Outlet />
      <div className="w-full pl-4 flex justify-end">
        <div className="w-5/6 ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ProductsLayout;
