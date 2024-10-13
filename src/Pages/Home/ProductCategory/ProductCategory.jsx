import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Autoplay } from "swiper/modules";
const ProductCategory = () => {
  return (
    <div className="mt-56 md:mt-28">
      <SectionTitle heading="Quality Products" subHeading="Checkout" />
      <Swiper
        slidesPerView={2} // Default for small screens
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides on screens >= 640px
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // 3 slides on screens >= 768px
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4, // 4 slides on screens >= 1024px
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        className="mySwiper"
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/kQzx1qQ/Amb8-Wb3-Tww-CPLVwxpr-Ak-Zw-ABAi-Rv-GZl-Vc0n-Sn-UUk.png"
            alt="PRODUCT IMAGE"
            className="w-full h-auto object-cover max-w-[150px] sm:max-w-[200px] md:max-w-[300px] lg:max-w-[350px]" // Adjust for small devices
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/XzqVhq3/ploreX.jpg"
            alt="PRODUCT IMAGE"
            className="w-full h-auto object-cover max-w-[150px] sm:max-w-[200px] md:max-w-[300px]" // Adjust for small devices
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/3B0cQ3b/V4-Rsl-MXBKMOJUg-R96xiqv5l-JDdn-JRo1-VRd-Ebgrn-O.jpg"
            alt="PRODUCT IMAGE"
            className="w-full h-auto object-cover max-w-[150px] sm:max-w-[200px] md:max-w-[300px]" // Adjust for small devices
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/jMB2G7P/s6e4-Ib5ej-Ox6-Rncj-Av0w-K4-XJd-EYxt-IUg-Hg-IB8-Krc.jpg"
            alt="PRODUCT IMAGE"
            className="w-full h-auto object-cover max-w-[150px] sm:max-w-[200px] md:max-w-[300px]" // Adjust for small devices
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/6njr5FS/w0zin92vt8-HITis-WL04acr7-MRYK6668giqi-P2l52.png"
            alt="PRODUCT IMAGE"
            className="w-full h-auto object-cover max-w-[150px] sm:max-w-[200px] md:max-w-[300px]" // Adjust for small devices
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/9vN2D7Z/adidas-pure.jpg"
            alt="PRODUCT IMAGE"
            className="w-full h-auto object-cover max-w-[150px] sm:max-w-[200px] md:max-w-[300px]" // Adjust for small devices
          />
        </SwiperSlide>
        {/* Add other SwiperSlides similarly */}
      </Swiper>
    </div>
  );
};

export default ProductCategory;
