import { createBrowserRouter } from "react-router-dom";
import { Home, Product, ShoppingCart } from "../pages/";
import { PATH } from "./path";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.PRODUCT,
    element: <Product />,
  },
  {
    path: PATH.CART,
    element: <ShoppingCart />,
  },
]);
