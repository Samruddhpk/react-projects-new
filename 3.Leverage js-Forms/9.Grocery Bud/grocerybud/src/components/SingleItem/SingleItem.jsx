import React, { useState } from "react";
import "./singleItem.scss";

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <article>
      <li className="name-container">
        <input
          type="checkbox"
          className="checkbox"
          checked={item.completed}
          onChange={() => editItem(item.id)}
        />
        <h4 style={{ textDecoration: item.completed && "line-through" }}>
          {item.name}
        </h4>
      </li>
      <button className="btn delete-btn" onClick={() => removeItem(item.id)}>
        delete
      </button>
    </article>
  );
};

export default SingleItem;
SingleItem;
