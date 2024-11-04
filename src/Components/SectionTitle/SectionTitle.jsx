import PropTypes from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center py-5">
      <p className="text-orange-600 dark:text-blue-50 dark:font-bold lg:text-2xl font-normal">
        ---{subHeading}---
      </p>
      <h3 className="uppercase border-y-2 md:text-lg text-xl lg:text-2xl font-normal mt-4 p-3">
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
