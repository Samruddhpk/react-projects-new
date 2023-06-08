import React from "react";
import "./jobinfo.scss";
import Duties from "../duties/Duties";

const JobsInfo = ({ jobs, currentItem }) => {
  const { title, company, dates, duties } = jobs[currentItem];
  return (
    <section className="jobinfo-container">
      <h2>{title}</h2>
      <span>{company}</span>
      <p className="dates">{dates}</p>
      <Duties duties={duties} />
    </section>
  );
};

export default JobsInfo;
