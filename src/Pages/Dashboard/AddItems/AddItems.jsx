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
          solidPrice: parseFloat(data.solidPrice),
          retailPrice: parseFloat(data.retailPrice),
          profit: parseFloat(data.profit),
          category: data.category,
          subCategory: data.subCategory,
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
      <SectionTitle heading="Add An Item" subHeading="Wat's New?" />

      <div className="w-full md:w-3/4 mx-auto p-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1st */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product name*</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Product name"
                className="input input-bordered w-full"
              />
              {errors.name && (
                <span className="text-red-600">Product name is required</span>
              )}
            </div>
            {/* 2nd */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Solid Price*</span>
              </label>
              <input
                type="number"
                step="any"
                min="0"
                {...register("solidPrice", { required: true })}
                placeholder="Enter Solid Price"
                className="input input-bordered w-full"
              />
              {errors.solidPrice && (
                <span className="text-red-600">
                  Solid Price field is required
                </span>
              )}
            </div>
            {/* 3rd */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Retail Price*</span>
              </label>
              <input
                type="number"
                step="any"
                min="0"
                {...register("retailPrice", { required: true })}
                placeholder="Enter Retail Price"
                className="input input-bordered w-full"
              />
              {errors.retailPrice && (
                <span className="text-red-600">
                  Retail Price field is required
                </span>
              )}
            </div>
            {/* 4th */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Profit*</span>
              </label>
              <input
                type="number"
                step="any"
                min="0"
                {...register("profit", { required: true })}
                placeholder="Enter The Profit"
                className="input input-bordered w-full"
              />
              {errors.profit && (
                <span className="text-red-600">Profit field is required</span>
              )}
            </div>
            {/* 5th */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="fragrance">Fragrance</option>
                <option value="skinCare">Skin Care</option>
                <option value="hairCare">Hair Care</option>
                <option value="dailyEssential">Daily Essential</option>
              </select>
              {errors.category && (
                <span className="text-red-600">Category field is required</span>
              )}
            </div>
            {/* 6th */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Category (Optional)</span>
              </label>
              <select
                defaultValue=""
                {...register("subCategory", {
                  setValueAs: (value) => value || undefined,
                })}
                className="select select-bordered w-full"
              >
                <option value="">Select a sub category (Optional)</option>
                <option value="lipCare">Skin Care (Lip Care)</option>
                <option value="lotion">Skin Care (Lotion)</option>
                <option value="hairOil">Hair Care (Hair Oil)</option>
                <option value="shampoo">Hair Care (Shampoo)</option>
                <option value="soap">Daily Essential (Soap)</option>
                <option value="bodyWash">Daily Essential (Body Wash)</option>
              </select>
            </div>
          </div>
          {/* Text area */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description*</span>
            </label>
            <textarea
              {...register("description")}
              placeholder="Enter short description"
              className="textarea textarea-bordered w-full"
            ></textarea>
            {errors.description && (
              <span className="text-red-600">Description is required</span>
            )}
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered w-full my-4"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-full md:w-auto">
              Add Item
              <FaUtensils />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItems;
