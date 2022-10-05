import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
    "https://i.postimg.cc/BbgjzxjQ/2022-04-13-13h02-48.png",
    alt: "Project 1",
    
  },
  {
    src:
      "https://i.postimg.cc/m2nRyh9V/2022-05-25-14h33-28.png",
    alt: "Project 2",
    
  },
  {
    src:
      "https://i.postimg.cc/W3FbPZsW/Buscador.png",
    alt: "Project 3",
    
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
