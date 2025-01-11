import { useLoaderData, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProducts = () => {
  const { name, category, description, _id, price } = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    try {
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

        const productRes = await axiosSecure.patch(
          `/updateSpecificProducts/${_id}`,
          product
        );
        console.log(productRes.data);
        if (productRes.data.modifiedCount > 0) {
          // reset();

          Swal.fire({
            title: "Updated",
            text: "Your product has been updated successfully.",
            icon: "success",
          });
          navigate("/dashboard/manageItems");
        }
      }
    } catch (error) {
      console.error("Error uploading product", error);
    }
  };

  return (
    <>
      <SectionTitle heading="Update Product" subHeading="What's New?" />
      <div className="min-h-screen dark:bg-gray-900 dark:text-gray-200 py-10 px-4">
        <div className="w-full md:w-3/4 lg:w-2/3 mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center dark:text-gray-200">
            Update Product
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Grid Layout for Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div className="form-control">
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Product Name*
                </label>
                <input
                  type="text"
                  defaultValue={name}
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
              <div className="form-control">
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Price*
                </label>
                <input
                  type="number"
                  step="any"
                  min="0"
                  defaultValue={price}
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
              <div className="form-control">
                <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                  Category*
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-black"
                  defaultValue={category}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="fragrance">Fragrance</option>
                  <option value="lotion">Lotion</option>
                  <option value="shampoo">Shampoo</option>
                  <option value="lipCare">Lip Care</option>
                  <option value="hairOil">Hair Oil</option>
                  <option value="bodyWash">Body Wash</option>
                  <option value="soap">Soap</option>
                </select>
                {errors.category && (
                  <span className="text-sm text-red-500">
                    Category field is required
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Description*
              </label>
              <textarea
                defaultValue={description}
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
            <div className="form-control">
              <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                Upload Product Image
              </label>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-bordered w-full dark:text-black rounded-lg"
              />
            </div>

            {/* Update Button */}
            <div className="text-center">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 rounded-lg text-lg font-medium inline-flex items-center gap-2 transition duration-300"
              >
                Update Product
                <FaPen />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProducts;
