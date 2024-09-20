import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from '../../../assets/Parallax/shop.jpg'
import "./Parallax.css";
const Parallax = () => {
  return (
    <div className="featured-item relative bg-fixed text-white pt-10 mt-10">
      {/* Ensure the SectionTitle is above the overlay */}
      <div className="relative z-10">
        <SectionTitle subHeading={"Our Shop"} heading={"Featured Items"} />
      </div>

      {/* Overlay for darkening the background */}
      <div className="absolute inset-0 bg-[#151515] bg-opacity-70"></div>

      <div className="relative z-10 md:flex justify-center items-center px-36 pb-20 pt-12">
        <div>
          <img className="w-3/4 mx-auto" src={featured} alt="Featured" />
        </div>
        <div>
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn text-white border-b-white btn-outline border-0 border-b-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parallax;
