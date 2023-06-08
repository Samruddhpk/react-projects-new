import React from "react";
import MenuItem from "./MenuItem";
import "./menu.scss";

const Menu = ({ menu }) => {
  return (
    <section className="menu-container">
      {menu.map((menuItem) => {
        return <MenuItem {...menuItem} key={menuItem.id} />;
      })}
    </section>
  );
};

export default Menu;
