import { useState } from "react";
import AdminAccessModal from "./AdminAccessModal";

const AdminAccess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
      <div className=" absolute left-1/2 z-10 py-5 ">
        <button
          className="btn btn-info relative xs:btn-sm md:btn-sm lg:btn"
          onClick={toggleModal}
        >
          Admin Access
        </button>
      </div>

      {isModalOpen && <AdminAccessModal toggleModal={toggleModal} />}
    </>
  );
};

export default AdminAccess;
