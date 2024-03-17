
import Footer from '../Compnents/Footer';
import DisplayProducts from '../Compnents/DisplayProducts';
import Navbar from '../Compnents/Navbar';
import { useEffect } from 'react';

function Products() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar/>
      <DisplayProducts/>
      <Footer/>
    </div>
  );
}

export default Products;
