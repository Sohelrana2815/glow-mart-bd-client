import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center md:size-3/12 mx-auto">
      <p className="text-orange-600 text-xl font-normal">
        ----{subHeading}----
      </p>
      <h3 className="uppercase border-y-2 text-3xl font-normal mt-4 mb-6 p-3">
        {heading}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
