import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import invertedLogo from "../../assets/inverted-logo.svg";
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
      <img src={sticky ? invertedLogo : logo} alt="" className="logo" />
      <ul className={`${showMobileMenu ? "" : "hide-mobile-menu"}`}>
        <li>
          <Link to="hero" smooth offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth offset={-260} duration={500}>
            Soluções
          </Link>
        </li>
        <li>
          <Link to="about" smooth offset={-260} duration={500}>
            Quem Somos
          </Link>
        </li>
        <li>
          <Link to="campus" smooth offset={-260} duration={500}>
            Equipe
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
            Fale Conosco
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
