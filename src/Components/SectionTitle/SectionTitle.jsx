import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-5 space-y-6">
      <h3 className="md:text-lg text-xl lg:text-3xl xl:text-4xl font-normal">
        {heading}
      </h3>
      <p className="dark:text-gray-200">{subHeading}</p>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
