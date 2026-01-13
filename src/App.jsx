import { useState } from "react";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import HeroCarousel from "./components/HeroCarousel";
import Home from "./pages/Home";
import SignupModal from "./components/SignupModal";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <SignupModal />
      <Category />
      <HeroCarousel />
      <Home addToCart={addToCart} />
    </>
  );
}

export default App;
