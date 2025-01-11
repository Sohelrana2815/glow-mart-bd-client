import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
      // Upload image file in image bb then get the url
      // const
      console.log(data);
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        const product = {
          name: data.name,
          price: parseFloat(data.price),
          category: data.category,
          image: res.data.data.display_url,
          description: data.description,
        };

        const productRes = await axiosSecure.post("/products", product);
        console.log(productRes.data);

        if (productRes.data.insertedId) {
          reset();
          Swal.fire({
            title: "Added New Product",
            text: "Your product has been added successfully.",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.error("Error uploading product", error);
    }
  };

  return (
    <>
      <div>
        <SectionTitle heading="Add An Item" subHeading="Wat's New?" />
      </div>
      <div className="min-h-screen dark:bg-gray-900 dark:text-gray-200 py-10 px-4">
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center dark:text-gray-200">
            Add New Product
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Grid for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Product Name*
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Enter product name"
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    Product name is required
                  </span>
                )}
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Price*
                </label>
                <input
                  type="number"
                  step="any"
                  min="0"
                  {...register("price", { required: true })}
                  placeholder="Enter price"
                  className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                />
                {errors.price && (
                  <span className="text-sm text-red-500">
                    Price field is required
                  </span>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Category*
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="fragrance">Fragrance</option>
                  <option value="lipCare">Lip Care</option>
                  <option value="lotion">Lotion</option>
                  <option value="hairOil">Hair Oil</option>
                  <option value="shampoo">Shampoo</option>
                  <option value="soap">Soap</option>
                  <option value="bodyWash">Body Wash</option>
                </select>
                {errors.category && (
                  <span className="text-sm text-red-500">
                    Category field is required
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Description*
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Enter a short description"
                className="textarea textarea-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
              ></textarea>
              {errors.description && (
                <span className="text-sm text-red-500">
                  Description is required
                </span>
              )}
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Product Image
              </label>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered w-full rounded-lg dark:text-black"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 rounded-lg text-lg font-medium inline-flex items-center gap-2 transition duration-300"
              >
                Add Product
                <FaUtensils />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItems;
