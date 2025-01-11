import { useState } from "react";
import AdminAccessModal from "./AdminAccessModal";

const AdminAccess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className="absolute inset-x-0 py-5 flex justify-center items-center">
        <button
          onClick={toggleModal}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-pink-300 dark:focus:ring-purple-700 focus:outline-none"
        >
          Reveal Admin Keys
        </button>
      </div>

      {isModalOpen && <AdminAccessModal toggleModal={toggleModal} />}
    </>
  );
};

export default AdminAccess;
