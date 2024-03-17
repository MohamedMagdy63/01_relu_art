
import AboutRelu from '../Compnents/AboutRelu';
import Footer from '../Compnents/Footer';
import DisplayProducts from '../Compnents/DisplayProducts';
import MainBox from '../Compnents/MainBox';
import Navbar from '../Compnents/Navbar';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts (page loads)
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar/>
      <MainBox/>
      <AboutRelu/>
      <DisplayProducts/>
      <Footer/>
    </div>
  );
}

export default Home;
