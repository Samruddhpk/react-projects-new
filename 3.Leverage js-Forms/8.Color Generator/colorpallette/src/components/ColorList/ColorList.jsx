import React from "react";
import SingleColor from "../SingleColor/SingleColor";
import "./ColorList.scss";

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={index} color={color} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
