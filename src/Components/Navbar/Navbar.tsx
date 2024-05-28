import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import "./Navbar.css";

const Navbar = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : null}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={`${showMobileMenu ? "" : "hide-mobile-menu"}`}>
        <li>
          <Link to="hero" smooth offset={0} duration={500}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="programs" smooth offset={-260} duration={500}>
            PROGRAM
          </Link>
        </li>
        <li>
          <Link to="about" smooth offset={-150} duration={500}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="campus" smooth offset={-260} duration={500}>
            CAMPUS
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth offset={-260} duration={500}>
            TESTIMONIALS
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth
            offset={-260}
            duration={500}
            className="btn"
          >
            CONTACT US
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt=""
        className="menu-icon"
        onClick={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
