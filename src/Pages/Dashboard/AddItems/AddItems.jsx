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
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                step="any"
                min="0"
                {...register("price", { required: true })}
                placeholder="Enter Price"
                className="input input-bordered w-full"
              />
              {errors.price && (
                <span className="text-red-600">Price field is required</span>
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
                <option value="lipCare">Lip Care</option>
                <option value="lotion">Lotion</option>
                <option value="hairOil">Hair Oil</option>
                <option value="shampoo">Shampoo</option>
                <option value="soap">Soap</option>
                <option value="bodyWash">Body Wash</option>
              </select>
              {errors.category && (
                <span className="text-red-600">Category field is required</span>
              )}
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
