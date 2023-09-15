import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { AiFillShopping } from "react-icons/ai";

const Navbar = () => {
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
            <span id="lws-totalCart">0</span>
          </Link>
        </div>
      </div>
    </nav>
    // Navbar ends
  );
};

export default Navbar;
