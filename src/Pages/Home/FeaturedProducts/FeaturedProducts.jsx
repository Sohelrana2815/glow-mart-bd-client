import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const FeaturedProducts = () => {
  // Data
  const products = [
    {
      image:
        "https://i.ibb.co/kQzx1qQ/Amb8-Wb3-Tww-CPLVwxpr-Ak-Zw-ABAi-Rv-GZl-Vc0n-Sn-UUk.png",
      name: "Hydrating Cream",
    },
    {
      image:
        "https://i.ibb.co.com/TKd3nqX/19y8mrf7-LD8w-Pucx-M5-YSf-G2-Gfjp8-E1r-H5-Nbb-Ap8e.png",
      name: "Natural Foundation",
    },
    {
      image:
        "https://i.ibb.co.com/pz4P9Bx/hage1-Kyybz6-FVre-Wq-LQ2u3l-Jsc-YY6wse-Jg-XXy-JPt.png",
      name: "Glow Serum",
    },
    {
      image:
        "https://i.ibb.co.com/4ZLwDpRb/2.webp",
      name: "Lip Gloss Set",
    },
    {
      image:
        "https://i.ibb.co.com/BKnQ7V48/Lf8mc-WGVM72-EZ76-X83n8c-Fw-MSQFvk-UNfv9d-Ry6b1.webp",
      name: "Compact Powder",
    },
    {
      image: "https://i.ibb.co.com/mVV145cg/al-haramain.jpg",
      name: "Organic Mascara",
    },
  ];

  return (
    <>
      <SectionTitle
        heading="Our Featured Picks"
        subHeading="Handpicked products just for you – explore what’s trending now."
      />
      <div className="px-4 md:px-8 max-w-screen-2xl mx-auto">
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          spaceBetween={20}
          className="mySwiper"
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:bg-pink-500">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-3/4 lg:w-1/2 mx-auto h-40 md:h-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm font-medium">
                      {product.name}
                    </p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <button className="mt-3 px-4 py-2 bg-indigo-600 text-white text-xs font-medium rounded hover:bg-indigo-700 transition-all duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedProducts;
