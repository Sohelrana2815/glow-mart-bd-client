import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Products/Products";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "productInfo/:id",
        element: <ProductsDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
