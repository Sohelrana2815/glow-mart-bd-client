import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="mt-20">
      <Carousel autoPlay infiniteLoop interval={2500}>
        <div>
          <img
            src="https://i.ibb.co.com/9GCJGQQ/img1.jpg"
            className="rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/FD6RN9N/img2.jpg"
            className="rounded-xl"
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co.com/tPfSgx2/img3.jpg"
            className="rounded-xl"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
