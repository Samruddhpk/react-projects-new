import React, { useState } from "react";
import "./Form.scss";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please provide value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form className="form-container">
      <h2>Grocery Bud</h2>
      <input
        type="text"
        value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
      />
      <button className="btn" onClick={handleSubmit}>
        add item
      </button>
    </form>
  );
};

export default Form;
