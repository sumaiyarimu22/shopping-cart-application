import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Products from "./components/products/Products";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
