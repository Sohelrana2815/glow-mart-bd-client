import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Autoplay } from "swiper/modules";
const ProductCategory = () => {
  return (
    <div>
      <SectionTitle heading="PRODUCT CATEGORY" subHeading="Checkout" />
      <Swiper
        slidesPerView={4}
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
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/XzqVhq3/ploreX.jpg"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/GVCvtfD/w-BRLFu4jvlb-XWQMPis-NPXOGS9c2q5c-Obto1-VRdua.jpg"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/pz4P9Bx/hage1-Kyybz6-FVre-Wq-LQ2u3l-Jsc-YY6wse-Jg-XXy-JPt.png"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/kKkT0QZ/sh-Ca-QT1afv-Iku6-Ua-PEe-THWu4f-BSy-Wi-Ty-Jl-Wef-Eb-P.png"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/WVFrh0c/nevia-blue.png"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/YXwvDnx/jaglar.jpg"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/4sTXWMW/beardo-mafia.jpg"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/KrL0Pqj/q3jk-Fh-Nqsuv-C0-UVg62l-LGIzbsj-XPx-L842t-DFLi-U7.png"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/3B0cQ3b/V4-Rsl-MXBKMOJUg-R96xiqv5l-JDdn-JRo1-VRd-Ebgrn-O.jpg"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/jg4KcY9/o0tt-M9-MMYc-XVvn-Wh-C7q3bkk-FFy-Y3-Npm-Hg-L1m-XUb-F.png"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/jMB2G7P/s6e4-Ib5ej-Ox6-Rncj-Av0w-K4-XJd-EYxt-IUg-Hg-IB8-Krc.jpg"
            alt="PRODUCT IMAGE"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductCategory;
