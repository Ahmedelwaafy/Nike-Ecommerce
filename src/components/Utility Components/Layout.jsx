import Navbar from "../Navbar";
import Footer from "../Footer";
import CartView from "../CartView";

import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Navbar />
      <CartView />
      <div id="hero" className=""></div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
