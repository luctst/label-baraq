import React from "react";
import ImageSlider from "react-image-comparison-slider";

const ComparisonSlider = (props) => {
  return (
    <div>
      <ImageSlider
        image1={props.imageOne}
        image2={props.imageTwo}
        sliderWidth={2}
        sliderColor="white"
        handleColor="white"
      />
    </div>
  );
};

export default ComparisonSlider;
