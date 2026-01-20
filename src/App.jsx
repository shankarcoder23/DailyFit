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
    <div className="app-wrapper">
      {/* Navbar & Modal */}
      <Navbar cartCount={cart.length} />
      <SignupModal />

      {/* Main Content */}
      <main className="content">
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

          {/* Sub Category */}
          <Route
            path="/category/:SubCategory"
            element={<SubCategory />}
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
