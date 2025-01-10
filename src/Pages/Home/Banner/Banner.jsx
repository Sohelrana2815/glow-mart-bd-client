import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import useAuth from "../../../Hooks/useAuth";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";
import CustomCarousel from "./CustomCarousel";

const Banner = () => {
  const { loading } = useAuth();
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <AnimatedComponent animation="zoom-in">
      <CustomCarousel />
    </AnimatedComponent>
  );
};

export default Banner;
