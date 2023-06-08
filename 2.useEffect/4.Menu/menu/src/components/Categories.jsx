import React from "react";
import "./categories.scss";

const Categories = ({ categories, filterItems }) => {
  return (
    <section className="category-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Categories;
