import React from "react";
import "./menuItem.scss";

const MenuItems = ({ img, price, title, desc }) => {
  return (
    <article className="single-menuItem">
      <img src={img} alt={title} />
      <div className="info">
        <header>
          <h5>{title}</h5>
          <span>${price}</span>
        </header>
        <p>{desc}</p>
      </div>
    </article>
  );
};

export default MenuItems;
