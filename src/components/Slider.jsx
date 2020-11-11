import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const formatBgColor = (hex) => {
  if (hex.length === 4) {
    hex = hex + hex[1] + hex[1] + hex[1];
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || null;
  if (!result) return;
  const rgb = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.8)`;
};

const PrevArrow = ({ clickHandler }) => {
  return (
    <div className="lightbox__left-arrow" onClick={clickHandler}>
      <svg
        width="27"
        height="34"
        viewBox="0 0 27 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.26499 17.8347C0.665979 17.4394 0.665977 16.5606 1.26499 16.1653L24.6993 0.702713C25.3641 0.264023 26.25 0.740845 26.25 1.53739L26.25 32.4626C26.25 33.2592 25.3641 33.736 24.6993 33.2973L1.26499 17.8347Z"
          fill="#A11842"
        />
      </svg>
    </div>
  );
};

const NextArrow = ({ clickHandler }) => {
  return (
    <div className="lightbox__right-arrow" onClick={clickHandler}>
      <svg
        width="27"
        height="34"
        viewBox="0 0 27 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.735 16.1653C26.334 16.5606 26.334 17.4394 25.735 17.8347L2.30074 33.2973C1.63589 33.736 0.75 33.2592 0.75 32.4626L0.75 1.53739C0.75 0.740846 1.63589 0.264024 2.30074 0.702716L25.735 16.1653Z"
          fill="#A11842"
        />
      </svg>
    </div>
  );
};

const Slider = (props) => {
  const listenKey = (event) => {
    if (event.key === "Escape") {
      props.onClose();
    }
  };

  const clickOutside = (event) => {
    const cloneEvent = { ...event };
    if (
      cloneEvent.target.className !== "lightbox__slide__img" &&
      cloneEvent.target.tagName !== "path"
    ) {
      props.onClose();
    }
  };

  window.addEventListener("keydown", listenKey, true);

  return (
    <div
      className="lightbox"
      style={{ backgroundColor: formatBgColor(props.bgColor) }}
      onClick={clickOutside}
    >
      <Carousel
        showArrows={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        swipeable={true}
        useKeyboardArrows={true}
        selectedItem={props.focus}
        renderArrowPrev={(clickHandler) => <PrevArrow clickHandler={clickHandler} />}
        renderArrowNext={(clickHandler) => <NextArrow clickHandler={clickHandler} />}
      >
        {props.images.map((image, index) => (
          <div key={index} className="lightbox__slide">
            <div className="lightbox__slide__img">
              <img
                src={image.url}
                className="lightbox__image"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
