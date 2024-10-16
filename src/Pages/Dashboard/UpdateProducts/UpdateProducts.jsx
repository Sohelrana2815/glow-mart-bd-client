import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaPen } from "react-icons/fa6";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProducts = () => {
  const { name, solidPrice, retailPrice, profit, category, description, _id } =
    useLoaderData();

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
          solidPrice: parseFloat(data.solidPrice),
          retailPrice: parseFloat(data.retailPrice),
          profit: parseFloat(data.profit),
          category: data.category,
          subCategory: data.subCategory,
          image: res.data.data.display_url,
          description: data.description,
        };

        const productRes = await axiosSecure.patch(`/products/${_id}`, product);
        console.log(productRes.data);
        if (productRes.data.modifiedCount > 0) {
          // reset();
          Swal.fire({
            title: "Updated",
            text: "Your product has been updated successfully.",
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
      <SectionTitle heading="Update Product" subHeading="What's New?" />
      <div className="w-3/4 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* 1st */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product name*</span>
              </label>
              <input
                type="text"
                defaultValue={name}
                {...register("name", { required: true })}
                placeholder="Product name"
                className="input input-bordered"
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
                defaultValue={solidPrice}
                {...register("solidPrice", { required: true })}
                placeholder="Enter Solid Price"
                className="input input-bordered"
              />
              {errors.name && (
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
                defaultValue={retailPrice}
                {...register("retailPrice", { required: true })}
                placeholder="Enter Retail Price"
                className="input input-bordered"
              />
              {errors.name && (
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
                defaultValue={profit}
                {...register("profit", { required: true })}
                placeholder="Enter The Profit"
                className="input input-bordered"
              />
              {errors.name && (
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
                className="select select-bordered"
                defaultValue={category}
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option value="fragrance">Fragrance</option>
                <option value="skinCare">Skin Care</option>
                <option value="hairCare">Hair Care</option>
                <option value="dailyEssential">Daily Essential</option>
              </select>
              {errors.name && (
                <span className="text-red-600">Category field is required</span>
              )}
            </div>
            {/* 6th */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Category (Optional)*</span>
              </label>
              <select
                defaultValue=""
                {...register("subCategory", {
                  setValueAs: (value) => value || undefined,
                })}
                className="select select-bordered"
              >
                <option disabled>Select a sub category</option>
                <option value="">None</option>
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
              defaultValue={description}
              {...register("description")}
              placeholder="Enter short description"
              className="textarea textarea-bordered textarea-md w-full"
            ></textarea>
            {errors.name && (
              <span className="text-red-600">Description is required</span>
            )}
            <input
              type="file"
              // defaultValue={image}
              {...register("image")}
              className="file-input file-input-bordered w-full max-w-xs my-4"
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Update Item
              <FaPen />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProducts;
