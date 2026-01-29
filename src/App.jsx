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
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/Myaccount";



function App() {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        // Increase qty if already in cart
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // Add new product with qty and numeric price
      return [
        ...prevCart,
        {
          ...product,
          qty: 1,
          price: Number(product.price)
        }
      ];
    });
  };

  return (
    <div className="app-wrapper">
      {/* Navbar & Modal */}
      <Navbar cartCount={cart.reduce((a, b) => a + (b.qty || 0), 0)} />
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

          {/* Checkout */}
<Route
  path="/checkout"
  element={<Checkout cart={cart} />}
/>

{/* Order Success */}
<Route path="/order-success" element={<Order />} />


          {/* Static Pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-account" element={<MyAccount />} />

          {/* Sub Category */}
          <Route
            path="/category/:categoryName"
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
