import React from "react";
import "./Title.scss";

const Title = ({ title }) => {
  return (
    <div className="title">
      <h2>{title || "Default title"}</h2>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
