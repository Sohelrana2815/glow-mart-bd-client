import { FaEdit } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useProducts from "../../../Hooks/useProducts";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [products, refetch] = useProducts();
  const axiosSecure = useAxiosSecure();

  const handleDeleteProduct = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/products/${product._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="space-y-4">
      <SectionTitle heading="Manage Products" subHeading="Hurry Up!" />
      <div>
        <h1 className="text-3xl my-4">Total Products : {products.length}</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th className="text-base font-bold font-serif">
                  Product Image
                </th>
                <th className="text-base font-bold font-serif">Product Name</th>
                <th className="text-base font-bold font-serif">Profit</th>
                <th className="text-base font-bold font-serif">Edit</th>
                <th className="text-base font-bold font-serif">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {products.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="lg:w-28"
                      src={product.image}
                      alt="Product Img"
                    />
                  </td>
                  <td>
                    <p className="text-base">{product.name}</p>
                  </td>
                  <td>
                    <p className="text-base">{product.profit}</p>
                  </td>
                  <td>
                    <Link to={`/dashboard/updateProducts/${product._id}`}>
                      <button className="btn bg-[#d1a054] ">
                        <FaEdit className="text-white text-lg" />
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteProduct(product)}
                      className="btn bg-red-600 "
                    >
                      <FaTrashCan className="text-white text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
