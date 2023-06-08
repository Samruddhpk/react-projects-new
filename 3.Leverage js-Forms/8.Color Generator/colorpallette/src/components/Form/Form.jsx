import React, { useState } from "react";
import "./Form.scss";

const Form = ({ addColors }) => {
  const [color, setColor] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addColors(color);
  };
  return (
    <section>
      <h2 style={{ color: color }}>Color Pallette Generator</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="colorPicker"
        />
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="text"
        />

        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
