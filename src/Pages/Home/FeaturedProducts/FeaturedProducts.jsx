import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Autoplay } from "swiper/modules";

const FeaturedProducts = () => {
  // Data
  const products = [
    {
      image:
        "https://i.ibb.co/kQzx1qQ/Amb8-Wb3-Tww-CPLVwxpr-Ak-Zw-ABAi-Rv-GZl-Vc0n-Sn-UUk.png",
      name: "Hydrating Cream",
    },
    {
      image: "https://i.ibb.co/XzqVhq3/ploreX.jpg",
      name: "Natural Foundation",
    },
    {
      image:
        "https://i.ibb.co/3B0cQ3b/V4-Rsl-MXBKMOJUg-R96xiqv5l-JDdn-JRo1-VRd-Ebgrn-O.jpg",
      name: "Glow Serum",
    },
    {
      image:
        "https://i.ibb.co/jMB2G7P/s6e4-Ib5ej-Ox6-Rncj-Av0w-K4-XJd-EYxt-IUg-Hg-IB8-Krc.jpg",
      name: "Lip Gloss Set",
    },
    {
      image:
        "https://i.ibb.co/6njr5FS/w0zin92vt8-HITis-WL04acr7-MRYK6668giqi-P2l52.png",
      name: "Compact Powder",
    },
    {
      image: "https://i.ibb.co/9vN2D7Z/adidas-pure.jpg",
      name: "Organic Mascara",
    },
  ];

  return (
    <>
      <div className="my-20 md:mt-28 px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold dark:text-gray-200 text-gray-800">
            Featured Products
          </h2>
          <p className="text-gray-600 text-sm dark:text-gray-200">
            Check out our bestsellers!
          </p>
        </div>
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
