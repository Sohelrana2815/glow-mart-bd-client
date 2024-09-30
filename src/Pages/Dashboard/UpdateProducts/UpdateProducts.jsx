import { useLoaderData } from "react-router-dom";

const UpdateProducts = () => {
    const product = useLoaderData();
    console.log(product);
    
    return (
        <div>
            Update Products Page
        </div>
    );
};

export default UpdateProducts;