import React, { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlLocationPin } from "react-icons/sl";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { DataContext } from "../DataProvider/DataProvider";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";

function Header() {
  const [{ basket }] = useContext(DataContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.Header__container}>
          {/* Logo and Delivery */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="Amazon Logo"
              />
            </Link>

            <div className={classes.delivery}>
              <SlLocationPin />
              <div className={classes.abebe}>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className={classes.search}>
            <select>
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Product" />
            <BsSearch size={25} />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div
            className={classes.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <GiHamburgerMenu size={35} />
          </div>

          {/* Desktop Menu */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language__container}>
              <img
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="USA Flag"
              />
              <select>
                <option>EN</option>
                <option>Amh</option>
              </select>
            </Link>

            <Link to="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>

            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={classes.cart}>
              <ShoppingCartIcon style={{ fontSize: 30 }} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        {menuOpen && (
          <div className={classes.mobileMenu}>
            <Link to="/signin" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
            <Link to="/orders" onClick={() => setMenuOpen(false)}>
              Orders
            </Link>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart ({basket.length})
            </Link>
          </div>
        )}
      </section>

      <LowerHeader />
    </section>
  );
}

export default Header;
