import React from "react";
import "./duties.scss";
import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const Duties = ({ duties }) => {
  return (
    <article className="duties-container">
      {duties.map((duty, index) => {
        const id = uuidv4();
        // console.log(id);
        return (
          <div className="duty-holder" key={id}>
            <FaAngleDoubleRight className="icon" />
            <p className="duty">{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Duties;
