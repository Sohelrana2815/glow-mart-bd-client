import { FiBox } from "react-icons/fi";
import { IoLeafOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
const Services = () => {
  const services = [
    {
      icon: (
        <FiBox className="text-4xl md:text-5xl xl:text-6xl text-blue-500" />
      ),
      title: "Free Shipping",
      description: "Free shipping for orders over $130",
    },
    {
      icon: (
        <IoLeafOutline className="text-4xl md:text-5xl xl:text-6xl text-green-500" />
      ),
      title: "Fast Delivery",
      description: "Get your orders delivered in 3-5 business days",
    },
    {
      icon: (
        <TiMessages className="text-4xl md:text-5xl xl:text-6xl text-yellow-500" />
      ),
      title: "Quality Guaranteed",
      description: "Premium quality products you can trust",
    },
    {
      icon: (
        <CiCreditCard1 className="text-4xl md:text-5xl xl:text-6xl text-purple-500" />
      ),
      title: "24/7 Support",
      description: "We're here to help you anytime",
    },
  ];

  return (
    <>
      <SectionTitle
        heading="Our Premium Services"
        subHeading="Experience convenience like never before with services tailored just for you."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16 max-w-screen-xl mx-auto">
        {services.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="p-4 bg-gray-100 rounded-full group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h2 className="text-lg  md:text-xl font-semibold group-hover:text-blue-500 text-black transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
