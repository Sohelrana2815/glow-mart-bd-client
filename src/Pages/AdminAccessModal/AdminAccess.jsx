import { useState } from "react";
import AdminAccessModal from "./AdminAccessModal";

const AdminAccess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div className="absolute inset-x-0  py-5">
        <div className="flex flex-col items-center">
          <button className="btn btn-info" onClick={toggleModal}>
            Reveal Admin Keys
          </button>
        </div>
      </div>

      {isModalOpen && <AdminAccessModal toggleModal={toggleModal} />}
    </>
  );
};

export default AdminAccess;
