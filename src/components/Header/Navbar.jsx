import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiFillShopping } from "react-icons/ai";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartState = useSelector((state) => state.cartReducer);
  const cartLength = cartState.reduce(
    (total, item) => item.cartQuantity + total,
    0
  );
  return (
    // Navbar
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <Link to="/">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </Link>

        <div className="flex gap-4">
          <Link to="/" className="navHome" id="lws-home">
            Home
          </Link>
          <Link to="/cart" className="navCart" id="lws-cart">
            <i className="text-xl">
              <AiFillShopping />
            </i>
            <span id="lws-totalCart">{cartLength}</span>
          </Link>
        </div>
      </div>
    </nav>
    // Navbar ends
  );
};

export default Navbar;
