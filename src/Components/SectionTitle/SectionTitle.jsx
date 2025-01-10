import PropTypes from "prop-types";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-20 space-y-4">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-800 dark:text-gray-100">
        {heading}
      </h3>
      <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {subHeading}
      </p>
      <div className="w-20 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-600"></div>
    </div>
  );
};

SectionTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
