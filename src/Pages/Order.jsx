import { useEffect } from "react";
import Footer from "../Compnents/Footer";
import Navbar from "../Compnents/Navbar";
import ProductsDetails from "../Compnents/ProductsDetails";

function Order() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
    return (
      <div className="">
        <Navbar/>
        <ProductsDetails/>
        <Footer/>
      </div>
    );
  }
  
  export default Order;
  