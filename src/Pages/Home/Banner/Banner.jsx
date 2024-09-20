import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import useLoading from "../../../Hooks/useLoading";
import Skeleton from "react-loading-skeleton";
const Banner = () => {

  const loading = useLoading()
  return (
    <div className="mt-20">
      <Carousel autoPlay infiniteLoop interval={2500}>
        <div>
          { loading ? <Skeleton height={800} width={1000}/> : <img  src="https://i.ibb.co.com/9GCJGQQ/img1.jpg" className="rounded-xl" />}
        </div>
        <div>
        { loading ? <Skeleton height={800} width={1000}/> :<img src="https://i.ibb.co.com/FD6RN9N/img2.jpg" className="rounded-xl" /> }
          
        </div>
        <div>
        { loading ? <Skeleton height={800} width={1000}/> :<img src="https://i.ibb.co.com/tPfSgx2/img3.jpg" className="rounded-xl" />}
          
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
