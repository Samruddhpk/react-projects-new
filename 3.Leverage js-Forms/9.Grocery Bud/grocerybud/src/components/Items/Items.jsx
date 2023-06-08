import React from "react";
import "./items.scss";
import SingleItem from "../SingleItem/SingleItem";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <section className="items-container">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </section>
  );
};

export default Items;
