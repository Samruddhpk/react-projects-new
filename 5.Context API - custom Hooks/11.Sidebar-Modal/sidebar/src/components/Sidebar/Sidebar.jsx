import React from "react";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import { links, social } from "../../data";
import "./sidebar.scss";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <section className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <h2>Sidebar</h2>
        <button className="close-sidebar-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <span className="icon">{icon}</span>
              <span>{text}</span>
            </li>
          );
        })}
      </ul>

      <div className="social-container">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
