import React from "react";
import "./navbar.scss";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        {/* nav-links */}
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
