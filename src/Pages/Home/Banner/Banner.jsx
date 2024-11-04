import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../../assets/Banner/img1.jpg";
import img2 from "../../../assets/Banner/img2.jpg";
import img3 from "../../../assets/Banner/img3.jpg";

import { Carousel } from "react-responsive-carousel";
import useAuth from "../../../Hooks/useAuth";
import AnimatedComponent from "../../../Components/AnimatedComponent/AnimatedComponent";

const Banner = () => {
  const { loading } = useAuth();
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  return (
    <AnimatedComponent
      animation="zoom-in"
      duration={2000}
      delay={0}
      offset={100}
    >
      <div className="mt-20">
        <Carousel infiniteLoop autoPlay interval={2000}>
          <div>
            <img src={img1} className="rounded-xl" />
          </div>
          <div>
            <img src={img2} className="rounded-xl" />
          </div>
          <div>
            <img src={img3} className="rounded-xl" />
          </div>
        </Carousel>
      </div>
    </AnimatedComponent>
  );
};

export default Banner;
