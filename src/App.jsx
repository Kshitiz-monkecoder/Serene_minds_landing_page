/* eslint-disable no-unused-vars */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import InfiniteTextCarousel from "./components/InfiniteTextCarousel";
import AboutUs from "./components/AboutUs";
import Subscribe from "./components/Subscribe";
import Membership from "./components/Membership";

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <Hero />
      <InfiniteTextCarousel />
      <Partners />
      <Services />
      <AboutUs />
      <Testimonials />
      <Membership />
      <Subscribe />
      
      <Footer />
    </div>
  );
}

export default App;
