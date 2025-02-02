import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const NewProducts = () => {
  return (
    <>
      <SectionTitle
        heading="Unmatched Quality, Incredible Offers"
        subHeading="Discover top-notch products crafted to perfection, paired with exclusive deals."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-8 max-w-screen-xl mx-auto">
        {/* Card 1 */}
        <div
          className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden group transform transition-transform duration-500 ease-in-out hover:scale-105"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/BKnQ7V48/Lf8mc-WGVM72-EZ76-X83n8c-Fw-MSQFvk-UNfv9d-Ry6b1.webp')",
            backgroundSize: "contain",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 text-white">
            <p className="text-sm uppercase tracking-wider">Limited Edition</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Glow Boost Serum
            </h2>
            <button className="mt-4 px-5 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-all">
              Shop Now
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>

        {/* Card 2 */}
        <div
          className="relative h-96 bg-cover bg-center rounded-lg overflow-hidden group transform transition-transform duration-500 ease-in-out hover:scale-105"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/ycFKnn6j/Mensfragrances.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 text-white">
            <p className="text-sm uppercase tracking-wider">New Arrival</p>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Perfect Matte Lipstick
            </h2>
            <button className="mt-4 px-5 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-all">
              Discover Now
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </div>
      </div>
    </>
  );
};

export default NewProducts;
