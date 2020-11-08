import React from "react";
import { defineCustomElements as defineImgComparisonSlider } from "img-comparison-slider/loader";

const ComparisonSlider = (props) => {
  defineImgComparisonSlider(window);
  return (
    <img-comparison-slider>
      <img slot="before" src={props.imageOne} style={{ width: "100%" }} />
      <img slot="after" src={props.imageTwo} style={{ width: "100%" }} />
    </img-comparison-slider>
  );
};

export default ComparisonSlider;
