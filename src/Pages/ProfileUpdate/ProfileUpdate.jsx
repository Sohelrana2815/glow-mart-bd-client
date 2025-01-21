import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const ProfileUpdate = () => {
  const { user, updateUserProfile } = useAuth(); // use the auth hook to access user data and methods

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    updateUserProfile(name, photoURL)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Profile Update!",
          text: "Your profile has been updated successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: error.message,
        });
      });
  };
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-800">
        {/* Header Section */}
        <div className="text-center py-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Update Your Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Keep your information up-to-date to enjoy a personalized experience.
          </p>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          {/* Current Profile Section */}
          <div className="text-center mb-6">
            <div className="flex flex-col items-center">
              {/* Current Photo */}
              <img
                src={user?.photoURL || "https://via.placeholder.com/150"}
                alt="User Avatar"
                className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover shadow-md"
              />
              {/* Current Display Name */}
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {user?.displayName || "No Display Name"}
              </h3>
              <p className="text-gray-600 text-sm">
                {user?.email || "No Email Available"}
              </p>
            </div>
          </div>

          {/* Update Profile Form */}
          <form
            onSubmit={handleUpdateProfile}
            className="space-y-4 dark:text-black"
          >
            {/* Display Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Display Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter new display name"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Photo URL */}
            <div>
              <label
                htmlFor="photoURL"
                className="block text-sm font-medium text-gray-600"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter new photo URL"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileUpdate;
