import React, { useState, useEffect } from "react";
import { longList } from "../../data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

import "./carousal.scss";

const Carousal = () => {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, title, image, quote, name } = person;
        return (
          <article
            className="slide "
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={id}
          >
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="title">{title}</p>
            <p className="quote">{quote}</p>
            <FaQuoteRight className="quote-icon" />
          </article>
        );
      })}

      <div className="btn-container">
        <button className="btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="btn right">
          <FaChevronRight onClick={nextSlide} />
        </button>
      </div>
    </section>
  );
};

export default Carousal;
