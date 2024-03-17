import Footer from "../Compnents/Footer";
import Navbar from "../Compnents/Navbar";
import CustomDetails from "../Compnents/CustomDetails";
import { useEffect } from "react";


export default function CustomOrder() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Navbar/>
        <CustomDetails/>
        <Footer/>
    </div>
  );
}
