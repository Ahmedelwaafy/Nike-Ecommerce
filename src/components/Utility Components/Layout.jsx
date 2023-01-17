import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Navbar />
      <div id="hero" className="">
        
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
