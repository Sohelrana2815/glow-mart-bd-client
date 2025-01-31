import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
import CustomCarousel from "./CustomCarousel";

const Banner = () => {
  return (
    <AnimatedComponent animation="zoom-in">
      <CustomCarousel />
    </AnimatedComponent>
  );
};

export default Banner;
