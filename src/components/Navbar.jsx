import { CiSearch } from "react-icons/ci";
import { assets } from "../assets/assets";
import "../Styles/navbar.css";
import { MdKeyboardArrowLeft, MdOutlinePersonOutline } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState(null); // Tracks the active element
  const [visible, setVisible] = useState(false); // Controls the visibility of the mobile menu

  const handleClick = (id) => {
    setActive(id); // Set the clicked item as active
  };

  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="Logo" className="logo" />

        <ul className="navbar-text">
          <NavLink to="/" className="link">
            <p onClick={() => handleClick("home")}>HOME</p>
            <hr
              style={{
                display: active === "home" ? "block" : "none",
                borderBottom: "2px solid white",
                width: "60%",
              }}
            />
          </NavLink>
          <NavLink to="/collection" className="link">
            <p onClick={() => handleClick("collection")}>COLLECTIONS</p>
            <hr
              style={{
                display: active === "collection" ? "block" : "none",
                borderBottom: "2px solid white",
                width: "60%",
              }}
            />
          </NavLink>
          <NavLink to="/about" className="link">
            <p onClick={() => handleClick("about")}>ABOUT</p>
            <hr
              style={{
                display: active === "about" ? "block" : "none",
                borderBottom: "2px solid white",
                width: "60%",
              }}
            />
          </NavLink>
          <NavLink to="/contact" className="link">
            <p onClick={() => handleClick("contact")}>CONTACT</p>
            <hr
              style={{
                display: active === "contact" ? "block" : "none",
                borderBottom: "2px solid white",
                width: "60%",
              }}
            />
          </NavLink>
        </ul>

        <div className="navbar-icon">
          <CiSearch />

          {/* Profile Icon with Dropdown */}
          <div className="dropdown">
            <MdOutlinePersonOutline className="profile-icon" />
            <div className="dropdown-content">
              <ul>
                <li>My Profile</li>
                <li>Orders</li>
                <li>Logout</li>
              </ul>
            </div>
          </div>

          <Link to="./cart" className="link-to-cart">
            <TiShoppingCart />
            <p className="cart-count">10</p>
          </Link>

          {/* Mobile menu icon */}
          <IoIosMenu onClick={() => setVisible(!visible)} className="menu" />
        </div>

        {/* Mobile Menu */}
        <div className={`menu-set ${visible ? "visible" : "hidden"}`}>
          <div className="back-text">
            <div onClick={() => setVisible(false)} className="back-text-sub">
              <MdKeyboardArrowLeft className="back-icon" />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              to="/"
              className="menu-links"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/collection"
              className="menu-links"
            >
              COLLECTION
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/about"
              className="menu-links"
            >
              ABOUT
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              to="/contact"
              className="menu-links"
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
