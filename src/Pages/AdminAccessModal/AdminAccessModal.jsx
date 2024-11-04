const AdminAccessModal = ({ toggleModal }) => {
  const email = "sohelrana27@gmail.com";
  const password = "sr9137";

  // copy to clipboard function

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="fixed inset-0 z-10 text-center flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="modal-box dark:text-black bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Admin Access Required</h2>

        <div className="space-y-4">
          {/* Email Row */}
          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium">Email:</label>
              <span className="ml-2">{email}</span>
            </div>
            <button
              className="btn btn-outline btn-sm ml-4"
              onClick={() => copyToClipboard(email)}
            >
              Copy Email
            </button>
          </div>

          {/* Password Row */}
          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium">Password:</label>
              <span className="ml-2">{password}</span>
            </div>
            <button
              className="btn btn-outline btn-sm ml-4"
              onClick={() => copyToClipboard(password)}
            >
              Copy Password
            </button>
          </div>
        </div>

        <button className="btn btn-primary w-full mt-6" onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AdminAccessModal;
