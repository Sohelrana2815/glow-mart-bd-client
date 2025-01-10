import { FaSearch } from "react-icons/fa";

const SearchBar = ({ search, handleSearchChange }) => {
  return (
    <div className="flex justify-end my-20">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          className="w-full py-3 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          placeholder="Search products..."
        />
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <FaSearch className="text-gray-500 dark:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
