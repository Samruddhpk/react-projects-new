// remove tilde

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { list } from "../../data.js";
import { FaQuoteRight } from "react-icons/fa";
import "./Slick.scss";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade:true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };
  return (
    <section className="slick-container">
      <Slider {...settings}>
        {list.map((person) => {
          const { id, title, image, quote, name } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} />
              <h3>{name}</h3>
              <p className="title">{title}</p>
              <p className="quote">{quote}</p>
              <FaQuoteRight className="quote-icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default Slick;
