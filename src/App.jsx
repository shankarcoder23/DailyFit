import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Category from "./components/Category";
import HeroCarousel from "./components/HeroCarousel";
import SignupModal from "./components/SignupModal";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import About from "./pages/About";
import SubCategory from "./pages/SubCategory";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <>
      {/* Navbar & Modal (Global) */}
      <Navbar cartCount={cart.length} />
      <SignupModal />

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Category />
              <HeroCarousel />
              <Home addToCart={addToCart} />
            </>
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />

        {/* Static Pages */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      <Route path="/category/subcategory" element={<SubCategory />} />
      </Routes>

      {/* Footer (Global) */}
      <Footer />
    </>
  );
}

export default App;
